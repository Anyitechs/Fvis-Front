<template>
  <aside class="col-lg-4">
    <div class="sidebar_wrap mb-md-80">
      <div class="sidebar">
        <div class="sidebar_widgets mb-xl-30">
          <div class="widget_title bg-light-blue">
            <h5 class="no-margin text-custom-white fw-600">MENU</h5>
          </div>
          <ul class="categories custom">
            <li @click="openmenu">
              <a class="text-custom-black fs-14">
                SERVICES
                <span class="arrow">
                  <i class="fas fa-chevron-down"></i>
                </span>
              </a>
            </li>
            <ul :style="'display:' + display">
              <li>
                <NuxtLink to="/services/charity" class="text-custom-black fs-14">CHARITY</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/commodity-trading"
                  class="text-custom-black fs-14"
                >COMMODITY TRADING</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/corporate-financing"
                  class="text-custom-black fs-14"
                >CORPORATE FINANCING</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/fixed-income-investment"
                  class="text-custom-black fs-14"
                >FIXED INCOME INVESTMENT</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/loan-facilities"
                  class="text-custom-black fs-14"
                >LOAN FACILITIES</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/project-financing"
                  class="text-custom-black fs-14"
                >PROJECT FINANCING</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services/real-estate" class="text-custom-black fs-14">REAL ESTATE</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/talent-development"
                  class="text-custom-black fs-14"
                >TALENT DEVELOPMENT</NuxtLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      openchildren: '',
      display: 'none'
    }
  },
  methods: {
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
    }
  }
}
</script>

<style>
</style>