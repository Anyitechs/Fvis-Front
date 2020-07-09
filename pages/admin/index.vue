<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Dashboard</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav />
      <div id="content" :class="menutoggle">
        <div class="row">
          <div class="col-sm-12">
            <div class="card redial-border-light redial-shadow mb-4">
              <div class="card-body d-lg-flex justify-content-center d-block">
                <div
                  class="media d-block d-lg-flex redial-brd-right mr-xl-4 mr-0 text-center text-lg-left mb-4 mb-lg-0"
                >
                  <div class="d-lg-flex h1 mb-0 redial-primary align-self-center">
                    <i class="fad fa-stream"></i>
                  </div>
                  <div class="media-body mx-xl-5 mx-lg-4 mx-0">
                    <div class="chart sparkline spark1"></div>
                    <p class="mb-0">
                      <strong class="redial-dark">{{ numPending }}</strong> Total Pending Loan
                    </p>
                  </div>
                </div>
                <div
                  class="media d-block d-lg-flex redial-brd-right mr-xl-4 mr-0 text-center text-lg-left mb-4 mb-lg-0"
                >
                  <div class="d-lg-flex h1 mb-0 redial-cyan align-self-center">
                    <i class="fas fa-badge-check"></i>
                  </div>
                  <div class="media-body mx-xl-5 mx-lg-4 mx-0">
                    <div class="chart sparkline spark2"></div>
                    <p class="mb-0">
                      <strong class="redial-dark">{{ numActive }}</strong> Total Active Loan
                    </p>
                  </div>
                </div>
                <div class="media d-block d-lg-flex text-center text-lg-left">
                  <div class="d-lg-flex h1 mb-0 redial-drank align-self-center">
                    <i class="fas fa-users"></i>
                  </div>
                  <div class="media-body mx-xl-5 mx-lg-4 mx-0">
                    <div class="chart sparkline spark3"></div>
                    <p class="mb-0">
                      <strong class="redial-dark">{{ users }}</strong> Total Number of Users
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <!--End of Stats -->
            <div class="row mb-4">
              <div class="col-12 col-xl-8">
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="card-body">
                    <div class="d-flex justify-content-between">
                      <h6 class="header-title pl-3 redial-relative">Loan History</h6>
                      <NuxtLink to="/admin/loans">
                        <span class="pl-3 redial-relative">More &raquo;</span>
                      </NuxtLink>
                    </div>
                    <table
                      v-if="Object.keys(loans).length > 0"
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
                      <tbody>
                        <tr
                          @click="loanModal(loan.id)"
                          v-for="loan in loans"
                          :key="loan.id"
                          style="cursor: pointer"
                        >
                          <td>
                            {{ loan.amount | currency('&#8358;', ',', 2,
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
                              v-if="loan.status == 'paid'"
                              class="text-white"
                              variant="dark"
                            >Paid</b-badge>
                          </td>
                          <td>{{ loan.created_at | moment('dddd, MMMM Do YYYY') }}</td>
                        </tr>
                      </tbody>
                    </table>
                    <b-alert v-else show variant="info">No records found.</b-alert>
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

export default {
  middleware: ['auth', 'admin'],
  layout: 'Admindashboard',
  components: {
    Header,
    Nav,
    Breadcrumb
  },
  head: {
    title: 'Dashboard - Fvis Nig'
  },
  computed: {
    menutoggle() {
      return this.$store.state.navigationmenu.toggle
    }
  },
  async asyncData({ $axios }) {
    const statistics = await $axios.$get(
      'https://resource.fvisng.com/api/admin/stats/5'
    )
    return {
      numPending: statistics.numPending,
      numActive: statistics.numActive,
      users: statistics.users,
      loans: statistics.loans.data
    }
  },
  methods: {
    async loanModal(id) {
      await this.$router.push('/admin/loan/' + id)
    }
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  }
}
</script>

<style>
</style>
