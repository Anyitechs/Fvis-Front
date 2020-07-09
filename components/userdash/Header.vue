<template>
  <div id="header-fix" class="header py-4 py-lg-2 fixed-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-lg-3 col-xl-2 align-self-center">
          <div class="site-logo">
            <NuxtLink to>
              <img src="/dash/images/logo-v1.png" alt class="img-fluid" />
            </NuxtLink>
          </div>
          <div class="navbar-header">
            <button
              @click="toggle"
              type="button"
              id="sidebarCollapse"
              class="navbar-btn bg-transparent float-right"
            >
              <i class="glyphicon glyphicon-align-left"></i>
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-3 align-self-center d-none d-lg-inline-block">
        </div>
        <div class="col-12 col-lg-6 col-xl-7 d-none d-lg-inline-block">
          <nav class="navbar navbar-expand-lg p-0">
            <ul class="navbar-nav notification ml-auto d-inline-flex">
              <li class="nav-item dropdown align-self-center">
                <a class="nav-link p-3" data-toggle="dropdown" aria-expanded="false">
                  <span class="lnr lnr-alarm h4 text-white"></span>
                  <span class="ring-point">
                    <span class="ring"></span>
                  </span>
                </a>
                <ul class="dropdown-menu border-bottom-0 rounded-0 py-0">
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="media py-2">
                        <img
                          src="/dash/images/author.jpg"
                          alt
                          class="d-flex mr-3 img-fluid redial-rounded-circle-50"
                        />
                        <div class="media-body">
                          <h6 class="mb-0">{{ $auth.user.first_name }}</h6>
                          <small class="redial-light">New user registered.</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="media py-2">
                        <img
                          src="/dash/images/author2.jpg"
                          alt
                          class="d-flex mr-3 img-fluid redial-rounded-circle-50"
                        />
                        <div class="media-body">
                          <h6 class="mb-0">Peter</h6>
                          <small class="redial-light">Server #12 overloaded.</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="media py-2">
                        <img
                          src="/dash/images/author3.jpg"
                          alt
                          class="d-flex mr-3 img-fluid redial-rounded-circle-50"
                        />
                        <div class="media-body">
                          <h6 class="mb-0">Bill</h6>
                          <small class="redial-light">Application error.</small>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-center py-3" href="#">
                      <strong>
                        See All Tasks
                        <i class="fa fa-angle-right pl-2"></i>
                      </strong>
                    </a>
                  </li>
                </ul>
              </li>
              <li :class="'nav-item dropdown user-profile align-self-center ' + justshow">
                <a class="nav-link" data-toggle="dropdown" :aria-expanded="justshow == 'show' ? true : false">
                  <span class="float-right pl-3 text-white">
                    <i @click="profiledropdown" class="fa fa-angle-down"></i>
                  </span>
                  <div class="media">
                    <img
                      :src="$auth.user.profile_img"
                      alt
                      class="d-flex mr-3 img-fluid redial-rounded-circle-50"
                      width="45"
                    />
                    <div class="media-body align-self-center">
                      <p
                        class="mb-2 text-white text-uppercase font-weight-bold"
                      >{{ firstname }} {{ lastname }}</p>
                      <small v-if="checkscope" class="redial-primary-light font-weight-bold text-white">Admin</small>
                    </div>
                  </div>
                </a>
                <ul :class="'dropdown-menu border-bottom-0 rounded-0 py-0 ' + justshow">
                  <li>
                    <NuxtLink class="dropdown-item py-2" to="/user/profile">
                      <i class="fa fa-user pr-2"></i> User Profile
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="dropdown-item py-2" to="/user/settings">
                      <i class="fa fa-cog pr-2"></i> Settings
                    </NuxtLink>
                  </li>
                  <li>
                    <a @click="logout" href="#" class="dropdown-item py-2">
                      <i class="fa fa-sign-out pr-2"></i> logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      justshow: '',
    }
  },
  computed: {
    firstname() {
      return this.$auth.user.first_name
    },
    lastname() {
      return this.$auth.user.last_name
    },
    menutoggle() {
      return this.$store.state.navigationmenu.toggle
    },
    checkscope() {
      return this.$auth.hasScope('admin')
    }
  },
  methods: {
    profiledropdown() {
      if (this.justshow == '') {
        this.justshow = 'show'
      } else if (this.justshow == 'show') {
        this.justshow = ''
      }
    },
    async logout() {
      try {
        await this.$auth.logout()
        this.$router.push('/login')
      } catch (e) {
        this.$bvToast.toast(
          'An error occured while trying to logout, try again!',
          {
            title: 'Logout!',
            variant: 'warning',
            solid: true
          }
        )
      }
    },
    toggle() {
      if (this.$store.state.navigationmenu.toggle == '') {
        this.$store.commit('navigationmenu/SET_MENU_TOGGLE')
      } else if (this.$store.state.navigationmenu.toggle == 'active') {
        this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
      }
    }
  }
}
</script>

<style>
</style>