<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Pending Loans</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/manageusers" class="redial-light">Pending Loans</NuxtLink>
          </li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav />
      <div id="content">
        <div class="row">
          <div class="col-12 col-sm-12">
            <div class="row mb-4">
              <div class="col-12 col-md-12">
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="card-body">
                    <h6 class="header-title pl-3 redial-relative">Pending Loans</h6>
                    <div v-if="$fetchState.pending">
                      <b-alert show variant="warning">Fetching Pending Loans...</b-alert>
                    </div>
                    <table
                      class="table table-hover mb-0 redial-font-weight-500 table-responsive d-md-table"
                    >
                      <thead class="redial-dark">
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">Full Name</th>
                          <th sco pe="col">Phone Number</th>
                          <th scope="col">Email</th>
                          <th scope="col">Amount</th>
                          <th scope="col">Status</th>
                          <th scope="col">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          @click="gotoloan(loan.id)"
                          style="cursor: pointer"
                          v-for="loan in loans"
                          :key="loan.id"
                        >
                          <th scope="row">{{ loan.id }}</th>
                          <td>{{ loan.user.first_name + ' ' + loan.user.last_name }}</td>
                          <td>{{ loan.user.phone_number }}</td>
                          <td>{{ loan.user.email }}</td>
                          <td>
                            {{ loan.final_amount | currency('&#8358;', ',', 2,
                            '.', 'front', false) }}
                          </td>
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
                          <td>{{ loan.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-12 mb-4">
            <infinite-loading spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
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
    title: 'Pending Loans - Fvis Nig'
  },
  computed: {
    menutoggle() {
      return this.$store.state.navigationmenu.toggle
    }
  },
  data() {
    return {
      loans: [],
      next_page: undefined
    }
  },
  async fetch() {
    const loans = await this.$axios.$get(
      'https://resource.fvisng.com/api/admin/loans/pending'
    )
    if (loans.success == true) {
      this.loans = loans.data.data
      this.next_page = loans.data.next_page_url
    }
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  },
  methods: {
    async infiniteScroll($state) {
      if (this.next_page == null) {
        $state.complete()
      } else {
        const check = await this.$axios.$get(this.next_page)
        check.data.data.forEach(item => this.loans.push(item))
        $state.loaded()
        this.nextpage = check.data.next_page_url
      }
    },
    gotoloan(loan) {
      this.$router.push('/admin/loan/' + loan)
    }
  }
}
</script>
