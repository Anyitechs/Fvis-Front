<template>
  <aside class="col-lg-4">
    <div class="sidebar_wrap mb-md-80">
      <div class="sidebar">
        <div class="sidebar_widgets mb-xl-30">
          <div class="widget_title bg-light-blue">
            <h5 class="no-margin text-custom-white fw-600">MENU</h5>
          </div>
          <ul class="categories custom">
            <li v-show="showall">
              <a class="text-custom-black fs-14">
                Overview
                <span class="arrow">
                  <i class="fas fa-chevron-down"></i>
                </span>
              </a>
            </li>
            <ul :style="'display:' + display">
              <li>
                Overview
              </li>
              <li>
                <NuxtLink to="/services/charity" class="text-custom-black fs-14">Vision and Mission</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/commodity-trading"
                  class="text-custom-black fs-14"
                >Core Values</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/corporate-financing"
                  class="text-custom-black fs-14"
                >Customers Philosophy</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/fixed-income-investment"
                  class="text-custom-black fs-14"
                >International affiliates</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/loan-facilities"
                  class="text-custom-black fs-14"
                >Corporate Social Responsibilities</NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/services/project-financing"
                  class="text-custom-black fs-14"
                >Leadership</NuxtLink>
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
        openchildren: 'open',
        display: 'block',
        showall: false
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
