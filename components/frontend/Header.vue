<template>
  <header class="header-style-1">
    <div class="main-navigation-style-1">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="navigation">
              <div class="logo">
                <NuxtLink to="/">
                  <img src="/logo-white.png" class="img-fluid image-fit" alt="Logo" />
                </NuxtLink>
              </div>
              <div :class="'main-menu ' + menuActive">
                <div class="mobile-logo">
                  <NuxtLink to="/">
                    <img src="/logo.png" class="img-fluid image-fit" alt="Logo" width="200" />
                  </NuxtLink>
                </div>
                <nav>
                  <ul class="custom">
                    <li class="menu-item menu-item-has-children">
                      <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                    </li>
                    <li class="menu-item">
                      <NuxtLink to="/about" class="text-custom-white">Who We Are</NuxtLink>
                    </li>
                    <li
                      @click="openmenu"
                      :class="'menu-item menu-item-has-children ' + openchildren">
                      <a class="text-custom-white" href="#">
                        Business Unit
                        <span class="arrow"></span>
                      </a>
                      <ul class="custom sub-menu" :style="'display:' + display">
                        <li class="menu-item">
                          <NuxtLink
                            to="/services/project-financing"
                            class="text-light-grey"
                          >Project Financing</NuxtLink>
                        </li>
                        <li class="menu-item">
                          <NuxtLink to="/services/real-estate" class="text-light-grey">Real Estate</NuxtLink>
                        </li>
                        <li class="menu-item">
                          <NuxtLink to="/services/fixed-income-investment" class="text-light-grey">
                            Fixed Income
                            Investment
                          </NuxtLink>
                        </li>
                        <li class="menu-item">
                          <NuxtLink
                            to="/services/commodity-trading"
                            class="text-light-grey"
                          >Commodity Trading</NuxtLink>
                        </li>
                        <li class="menu-item">
                          <NuxtLink
                            to="/services/corporate-financing"
                            class="text-light-grey"
                          >Corporate Financing</NuxtLink>
                        </li>

                        <li class="menu-item">
                          <NuxtLink to="/services/loan-facilities" class="text-light-grey">
                            Loan Facilities
                            <span class="arrow"></span>
                          </NuxtLink>
                        </li>
                        <li class="menu-item">
                          <NuxtLink
                            to="/services/talent-development"
                            class="text-light-grey"
                          >Talent Development</NuxtLink>
                        </li>
                        <li class="menu-item">
                          <NuxtLink to="/services/charity" class="text-light-grey">Charity</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children">
                      <NuxtLink to="/news" class="text-custom-white">News Blog</NuxtLink>
                    </li>
                    <li
                      @click="opengallery"
                      :class="'menu-item menu-item-has-children ' + opengallerychildren"
                    >
                      <a class="text-custom-white" href="#">
                        Media Gallery
                        <span class="arrow"></span>
                      </a>
                      <ul class="custom sub-menu" :style="'display:' + gallerydisplay">
                        <li class="menu-item">
                          <NuxtLink to="/gallery/local" class="text-light-grey">Photo</NuxtLink>
                          <ul style="display: block">
                            <li class="menu-item">
                              <NuxtLink to="/gallery/local" class="text-light-grey">Local</NuxtLink>
                            </li>
                            <li class="menu-item">
                              <NuxtLink to="/gallery/" class="text-light-grey">International</NuxtLink>
                            </li>
                          </ul>
                        </li>
                        <li class="menu-item">
                          <NuxtLink to="/gallery/videos" class="text-light-grey">Video</NuxtLink>
                        </li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <NuxtLink to="/membership" class="text-custom-white">Membership</NuxtLink>
                    </li>
<!--                    <li class="menu-item">-->
<!--                      <NuxtLink to="/contact" class="text-custom-white">Careers</NuxtLink>-->
<!--                    </li>-->
                    <li class="menu-item">
                      <NuxtLink to="/login" class="text-custom-white">Login</NuxtLink>
                    </li>
                    <li class="menu-item">
                      <NuxtLink to="/contact" class="text-custom-white">Contact Us</NuxtLink>
                    </li>
                  </ul>
                </nav>
<!--                <div class="right-side">-->
<!--                  <div class="cta-btn">-->
<!--                    <NuxtLink to="/login" class="btn-first btn-submit">LOGIN</NuxtLink>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
              <div @click="activeMenu" class="hamburger-menu">
                <div :class="'menu-btn ' + menuActive">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Navigation -->
  </header>
</template>

<script>
export default {
  data() {
    return {
      openchildren: '',
      display: 'none',
      opengallerychildren: '',
      gallerydisplay: 'none',
      openloanclass: '',
      loandisplay: 'none'
    }
  },
  computed: {
    menuActive() {
      return this.$store.state.frontmenu.menuActive
    }
  },
  methods: {
    activeMenu() {
      if (this.$store.state.frontmenu.menuActive == '') {
        this.$store.commit('frontmenu/SET_MENU_TOGGLE')
      } else if (this.$store.state.frontmenu.menuActive == ' active') {
        this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
      }
    },
    openmenu() {
      if (this.openchildren == '') {
        this.openchildren = 'open'
      } else {
        this.openchildren = ''
      }
      if (this.display == 'none') {
        this.display = 'block'
      } else {
        this.display = 'none'
      }
    },
    openloan() {
      this.openloanclass = 'open'
      this.loandisplay = 'block'
    },
    opengallery() {
      if (this.opengallerychildren == '') {
        this.opengallerychildren = 'open'
      } else {
        this.opengallerychildren = ''
      }
      if (this.gallerydisplay == 'none') {
        this.gallerydisplay = 'block'
      } else {
        this.gallerydisplay = 'none'
      }
    }
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/assets/css/font-awesome.css' }]
  }
}
</script>

<style scoped>
</style>
