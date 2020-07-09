<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Loan History</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/user/dashboard" class="redial-light">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active">Loan History</li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav />
      <div id="content">
        <div class="row">
          <div class="col-sm-12">
            <div class="card redial-border-light redial-shadow mb-4">
              <div class="card-body">
                <h6 class="header-title pl-3 redial-relative">Loan History</h6>
                <table
                  class="table table-hover mb-0 redial-font-weight-500 table-responsive d-md-table"
                  v-if="$fetchState.pending && !loans.length"
                >
                  <content-placeholders v-for="p in 6" :key="p" rounded>
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                </table>
                <table
                  class="table table-hover mb-0 redial-font-weight-500 table-responsive d-md-table"
                  v-else-if="$fetchState.error"
                >
                  <thead class="redial-dark">
                    <tr>
                      <th scope="col">Amount</th>
                      <th scope="col">Reference Number</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Status</th>
                      <th scope="col">Date Submitted</th>
                    </tr>
                  </thead>
                  <b-alert show variant="warning">{{ $fetchState.error.message }}</b-alert>
                </table>
                <table
                  v-else
                  class="table table-hover mb-0 redial-font-weight-500 table-responsive d-md-table"
                >
                  <thead class="redial-dark">
                    <tr>
                      <th scope="col">Amount</th>
                      <th scope="col">Reference Number</th>
                      <th scope="col">Purpose</th>
                      <th scope="col">Status</th>
                      <th scope="col">Date Submitted</th>
                    </tr>
                  </thead>
                  <tbody v-if="Object.keys(loans).length > 0">
                    <tr
                      v-for="(loan, i) in loans"
                      :key="loan.id"
                      v-observe-visibility="i === loans.length - 1 ? lazyLoadArticles : false"
                    >
                      <td>
                        {{ loan.final_amount | currency('&#8358;', ',', 2,
                        '.', 'front', false) }}
                      </td>
                      <td>{{ loan.ref }}</td>
                      <td>{{ loan.purpose }}</td>
                      <td>
                        <b-badge
                          v-if="loan.status == 'pending'"
                          class="text-white"
                          variant="warning"
                        >Pending</b-badge>
                        <b-badge
                          v-if="loan.status == 'active' && duecheck(loan) == false"
                          class="text-white"
                          variant="success"
                        >Approved</b-badge>
                        <b-badge
                          v-if="loan.status == 'disapproved'"
                          class="text-white"
                          variant="danger"
                        >Disapproved</b-badge>
                        <b-badge
                          v-if="duecheck(loan) == true"
                          class="text-white"
                          variant="danger"
                        >Overdue</b-badge>
                        <b-badge v-if="loan.status == 'paid'" class="text-white">Paid</b-badge>
                      </td>
                      <td>{{ loan.created_at | moment('dddd, MMMM Do YYYY') }}</td>
                      <td v-if="loan.status == 'active'">
                        <paystack
                          :amount="repayamount(loan)"
                          :email="email"
                          :paystackkey="paystackkey"
                          :reference="reference"
                          :callback="callback"
                          :close="close"
                          :embed="false"
                        >
                          <a class="btn btn-primary text-white">Repay Loan</a>
                        </paystack>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div v-if="Object.keys(loans).length == 0 && !$fetchState.pending">
                  <b-alert show variant="info">No records found.</b-alert>
                </div>
                <table
                  class="table table-hover mb-0 redial-font-weight-500 table-responsive d-md-table"
                  v-if="$fetchState.pending && loans.length"
                >
                  <content-placeholders v-for="p in 6" :key="p" rounded>
                    <content-placeholders-text :lines="1" />
                  </content-placeholders>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/userdash/Header'
import Nav from '~/components/userdash/Nav'
import Breadcrumb from '~/components/userdash/Breadcrumb'
export default {
  layout: 'userdashboard',
  middleware: 'user',
  components: {
    Header,
    Nav,
    Breadcrumb
  },
  head() {
    return {
      title: 'Loan History - Fvisng'
    }
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  },
  data() {
    return {
      loans: [],
      next_page: '1',
      loan: []
    }
  },
  async fetch() {
    const loans = await this.$axios.$get(
      `https://resource.fvisng.com/api/user/loanhistory/10?page%5Bnumber%5D=${this.next_page}`
    )
    this.loans = this.loans.concat(loans.data.data)
    if (loans.data.next_page_url == null) {
      this.next_page = null
    } else {
      this.next_page++
    }
  },
  methods: {
    async callback(response) {
      if (response.message == 'Approved' && response.status == 'success') {
        const submit = await this.$axios.$post(
          'https://resource.fvisng.com/api/user/repayloan',
          {
            status: response.status,
            message: response.message,
            ref: response.trxref
          }
        )
        if (submit.success) {
          this.$Toast(
            'Loan Repayment',
            'Your loan repayment was successful',
            'success'
          )
          this.$fetch()
        } else {
          this.$Toast(
            'Loan Repayment',
            'An error occured while trying to proccess your payment.'
          )
          console.log(submit)
        }
      } else {
        this.$Toast('Loan Repayment', response.message)
      }
    },
    close: function() {
      console.log('closed')
    },
    compare(dateTimeA, duration) {
      const momentA = this.$moment(dateTimeA).add(duration, 'days')
      const momentB = this.$moment()
      if (momentA <= momentB) {
        return 1
      } else {
        return 0
      }
    },
    repayamount(loan) {
      if (loan.status == 'active') {
        const maths = (loan.final_amount * 2) / 100
        return (parseInt(loan.final_amount) - maths) * 100
      } else if (loan.status == 'overdue') {
        return (parseInt(loan.final_amount) + parseInt(loan.interest)) * 100
      }
    },
    duecheck(loan) {
      if (loan.approved_date == null) {
        return false
      } else {
        const momentA = this.$moment(loan.approved_date).add(
          loan.duration,
          'days'
        )
        const momentB = this.$moment()
        if (momentB >= momentA) {
          return true
        } else {
          return false
        }
      }
    },
    lazyLoadArticles(isVisible) {
      if (isVisible) {
        if (this.next_page !== null) {
          this.$fetch()
        }
      }
    }
  }
}
</script>

<style scoped>
.payButton {
  background: none !important;
  border: none !important;
}
</style>