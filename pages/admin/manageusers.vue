<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Manage Users</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/manageusers" class="redial-light">Manage Users</NuxtLink>
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
              <div class="col-12 col-xl-6 mb-4" v-for="user in users" :key="user.id">
                <div class="card redial-border-light redial-shadow">
                  <div class="card-body">
                    <div class="media d-block d-sm-flex text-center text-sm-left">
                      <a>
                        <img
                          :src="user.profile_img"
                          alt
                          class="img-fluid d-sm-flex mr-sm-3 mb-3 mb-sm-0 rounded-circle"
                          width="120"
                        />
                      </a>
                      <div class="media-body">
                        <a>
                          <h4>
                            {{ user.first_name + ' ' + user.last_name }}
                            <i
                              v-if="user.email_verified_at !== null"
                              class="fas fa-user-check text-success"
                            ></i>
                            <i v-else class="fas fa-user-check text-secondary"></i>
                          </h4>
                        </a>
                        <ul class="list-unstyled redial-font-weight-600">
                          <li>
                            <i class="icofont icofont-location-pin pr-2"></i>
                            {{ user.residential_address }}
                          </li>
                          <li>
                            <i class="icofont icofont-briefcase pr-2"></i>
                            <a
                              :href="'tel:' + user.phone_number"
                              class="redial-primary"
                            >{{ user.phone_number }}</a>
                          </li>
                        </ul>
                        <button
                          @click="makeadmin(user)"
                          class="btn btn-info btn-xs mb-2 text-white"
                          v-if="!$auth.hasScope('user')"
                        >Make Admin</button>
                        <a :href="'mailto:' + user.email" class="btn btn-primary btn-xs mb-2">
                          <i class="icofont icofont-ui-message pr-1"></i> Send Message
                        </a>
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
    title: 'Manage Users - Fvis Nig'
  },
  computed: {
    menutoggle() {
      return this.$store.state.navigationmenu.toggle
    }
  },
  data() {
    return {
      users: [],
      next_page: undefined
    }
  },
  async fetch() {
    const users = await this.$axios.$get(
      `https://resource.fvisng.com/api/admin/manageusers`
    )
    this.users = users.data.data
    this.next_page = users.data.next_page_url
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
        check.data.data.forEach(item => this.users.push(item))
        $state.loaded()
        this.nextpage = check.data.next_page_url
      }
    },
    async makeadmin(user) {
      const make = await this.$axios.$post(
        'https://resource.fvisng.com/api/admin/makeadmin',
        {
          user_id: user.id
        }
      )
      if(make.success) {
        this.$Toast('User Level Update', user.first_name + ' is now an Admin', 'success')
      }
    }
  }
}
</script>
