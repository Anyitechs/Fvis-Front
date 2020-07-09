<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Dashboard</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/user/dashboard" class="redial-light">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item">Dashboard</li>
          <li class="breadcrumb-item active">Loan</li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav />
      <div id="content" :class="menutoggle">
        <div class="row">
          <div class="col-sm-12">
            <!-- Start Stats -->
            <Stats />
            <!--End of Stats -->
            <div class="row mb-4">
              <div class="col-12 col-xl-6 mb-4 mb-xl-0">
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="card-body">
                    <h6
                      class="header-title pl-3 redial-relative font-weight-bold"
                    >Loan Request Details</h6>
                    <dl class="row mb-0 redial-line-height-2_5">
                      <dt class="col-sm-5">Reference ID:</dt>
                      <dd class="col-sm-7">{{ loan.ref }}</dd>

                      <dt class="col-sm-5">Purpose:</dt>
                      <dd class="col-sm-7">{{ loan.purpose }}</dd>

                      <dt class="col-sm-5">Duration:</dt>
                      <dd class="col-sm-7">{{ loan.duration + ' days' }}</dd>

                      <dt class="col-sm-5">Amount:</dt>
                      <dd class="col-sm-7">
                        {{ loan.amount | currency('&#8358;', ',', 2,
                        '.', 'front', false) }}
                      </dd>

                      <dt class="col-sm-5">Interest:</dt>
                      <dd class="col-sm-7">
                        {{ loan.interest | currency('&#8358;', ',', 2,
                        '.', 'front', false) }}
                      </dd>

                      <dt class="col-sm-5">Credit Score:</dt>
                      <dd class="col-sm-7">
                        <strong>{{ loan.credit_score + '%' }}</strong>
                      </dd>

                      <dt class="col-sm-5">Status:</dt>
                      <dd class="col-sm-7">
                        <b-badge
                          v-if="loan.status == 'pending'"
                          class="text-white"
                          variant="warning"
                        >Pending</b-badge>
                        <b-badge
                          v-if="loan.status == 'active'"
                          class="text-white"
                          variant="success"
                        >Approved</b-badge>
                        <b-badge
                          v-if="loan.status == 'disapproved'"
                          class="text-white"
                          variant="info"
                        >Disapproved</b-badge>
                        <b-badge
                          v-if="repayment == 'overdue'"
                          class="text-white"
                          variant="danger"
                        >Overdue</b-badge>
                        <b-badge v-if="loan.status == 'paid'" class="text-white" variant="dark">Paid</b-badge>
                      </dd>
                      <dt class="col-sm-5">Submission Date:</dt>
                      <dd
                        class="col-sm-7"
                      >{{ loan.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</dd>
                      <dt v-if="loan.status == 'paid'" class="col-sm-5">Repayment Date:</dt>
                      <dd
                        v-if="loan.status == 'paid'"
                        class="col-sm-7"
                      >{{ loan.repayment_date | moment("dddd, MMMM Do YYYY, h:mm:ss a") }} }}</dd>
                    </dl>
                    <div v-if="loan.status == 'pending'" class="d-flex justify-content-center">
                      <button class="btn btn-primary" v-b-modal.updatestatus>
                        <i class="fal fa-edit"></i> Update Status
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-6">
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="redial-relative">
                    <div
                      class="background-image-maker py-5 rounded-top"
                      style="background-image: url(&quot;dist/images/profile-inner.jpg&quot;);"
                    ></div>
                    <div class="holder-image">
                      <img :src="loan.user.profile_img" alt class="img-fluid d-none" />
                    </div>
                    <div class="redial-overlay redial-overlay-bg rounded-top"></div>
                    <div class="card-body text-center redial-relative">
                      <img
                        :src="loan.user.profile_img"
                        alt
                        class="img-fluid rounded-circle redial-shadow2 my-4"
                      />
                    </div>
                  </div>
                  <div class="redial-relative text-center py-4">
                    <h5
                      class="text-uppercase mb-2"
                    >{{ loan.user.first_name + ' ' + loan.user.last_name }} {{ loan.user.gender == 'Male' ? '(M)':'' }}{{ loan.user.gender == 'Female' ? '(F)':'' }}</h5>
                    <h6
                      class="redial-light redial-font-weight-400"
                    >{{ loan.user.residential_address }}</h6>

                    <ul class="list-inline mb-0 pt-4">
                      <li
                        class="list-inline-item redial-brd-right pr-xl-4 pr-0 mr-0 d-xl-inline-block d-block mb-3 mb-xl-0"
                      >
                        <i class="fa fa-phone"></i>
                        <p class="mb-0 text-uppercase redial-font-weight-700">Phone</p>
                        {{ loan.user.phone_number }}
                      </li>
                      <li
                        class="list-inline-item redial-brd-right px-xl-4 px-0 mr-0 d-xl-inline-block d-block mb-3 mb-xl-0"
                      >
                        <i class="fa fa-envelope"></i>
                        <p class="mb-0 text-uppercase redial-font-weight-700">Email</p>
                        {{ loan.user.email }}
                      </li>
                      <li class="list-inline-item pl-xl-4 pl-0 mr-0 d-xl-inline-block d-block">
                        <i class="fa fa-fax"></i>
                        <p class="mb-0 text-uppercase redial-font-weight-700">Employment Status</p>
                        {{ loan.user.employ_status }}
                      </li>
                      <li class="list-inline-item pl-xl-4 pl-0 mr-0 d-xl-inline-block d-block">
                        <i class="fa fa-fax"></i>
                        <p class="mb-0 text-uppercase redial-font-weight-700">State of Residence</p>
                        {{ loan.user.state_of_residence }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-12 col-xl-6 mb-4 mb-xl-0">
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="card-body">
                    <h6 class="header-title pl-3 redial-relative font-weight-bold">ID Card</h6>
                    <img class="img-fluid" :src="loan.user.idcard1" />
                    <img class="img-fluid" :src="loan.user.idcard2" />
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-6 mb-4 mb-xl-0">
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="card-body">
                    <h6 class="header-title pl-3 redial-relative font-weight-bold">Relative</h6>
                    <dl class="row mb-0 redial-line-height-2_5">
                      <dt class="col-sm-5">Relative Name:</dt>
                      <dd class="col-sm-7">{{ loan.user.relativename }}</dd>

                      <dt class="col-sm-5">Relative Number:</dt>
                      <dd class="col-sm-7">{{ loan.user.relativenumber }}</dd>
                    </dl>
                  </div>
                  <div class="card-body">
                    <h6 class="header-title pl-3 redial-relative font-weight-bold">Settlement Info</h6>
                    <dl class="row mb-0 redial-line-height-2_5">
                      <dt class="col-sm-5">Bank Name:</dt>
                      <dd class="col-sm-7">{{ loan.bank.bankname }}</dd>

                      <dt class="col-sm-5">Account Name:</dt>
                      <dd class="col-sm-7">{{ loan.bank.account_name }}</dd>

                      <dt class="col-sm-5">Account Number:</dt>
                      <dd class="col-sm-7">{{ loan.bank.account_number }}</dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '~/components/admindash/Header'
import Nav from '~/components/admindash/Nav'
import Breadcrumb from '~/components/admindash/Breadcrumb'
import Stats from '~/components/admindash/Stats'
export default {
  middleware: ['auth', 'admin'],
  layout: 'Admindashboard',
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      form: {
        status: '',
        loanid: '',
        submitbutton: 'Update'
      },
      overdue: '',
      show: 0,
      loan: []
    }
  },
  components: {
    Header,
    Nav,
    Breadcrumb,
    Stats
  },
  computed: {
    menutoggle() {
      return this.$store.state.navigationmenu.toggle
    },
    repayment() {
      if (this.loan.approved_date !== null) {
        const check = this.compare(this.loan.approved_date, this.loan.duration)
        if (check == 1) {
          this.overdue = ''
          return ''
        } else {
          this.overdue = 'Overdue'
          return 'overdue'
        }
      } else {
        return ''
      }
    }
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  },
  async fetch() {
    const loans = await this.$axios.$get(
      `https://resource.fvisng.com/api/admin/loan/${this.$route.params.id}`
    )

    if (loans.success) {
      this.loan = loans.data
      this.show = 1
    } else if (!loans.success) {
      // this.$nuxt.error({ statusCode, message })
      this.$nuxt.error({ statusCode: 404, message: loans.error })
    }
  },
  methods: {
    async updatestatus() {
      this.form.submitbutton = 'Updating...'
      const update = await this.$axios.$post(
        'https://resource.fvisng.com/api/admin/updateloanstatus/' +
          this.$route.params.id,
        {
          newstatus: this.form.status
        }
      )
      if (update.success == true) {
        this.$bvModal.hide('updatestatus')
        this.$Toast(
          'Update Status',
          'Loan Status Updated Successfully',
          'success'
        )
        this.$fetch()
      } else {
        this.$bvModal.hide('updatestatus')
        this.$Toast(
          'Update Status',
          'An error occurred while trying to update loan status, kindly try again'
        )
      }
      this.form.submitbutton = 'Update'
    },
    compare(dateTimeA, duration) {
      const momentA = this.$moment(dateTimeA).add(duration, 'days')
      const momentB = this.$moment()
      if (momentB > momentA) {
        return 0
      } else {
        return 1
      }
    }
  }
}
</script>
