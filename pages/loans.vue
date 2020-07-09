<template>
<div>
    <Header />
    <div class="sub-header p-relative">
      <div class="overlay overlay-bg-black"></div>
      <div class="pattern"></div>
      <div class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="sub-header-content p-relative">
                <h1 class="text-custom-white lh-default fw-600">Loans</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">Loans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="blog-detail padding-20">
              <!-- article -->
              <div class="post-wrapper">
                <div class="blog-meta">
                  <h2><a class="text-custom-black fw-600">Fast Cash</a></h2>
                  <p class="text-light-white">
                      Access up to 100k in 10mins, without collateral or Bank Statement. 
                  </p>
                  <h2>Salary Advance</h2>
                  <p class="text-light-white">
                      Can access up to 500k in 48hrs
                  </p>
                  <h2>SME Loan(Strictly for business owners)</h2>
                  <p class="text-light-white">
                      Need some quick loan to boost your business? You can access up to 2million Naira in 5-10 working days. <strong>T &amp; C</strong> apply!
                  </p>
                </div>
              </div>
              <!-- article -->
              <hr>
            </div>
          </div>
        </div>
      </div>
    </section>


    <Footer />
</div>
</template>

<script>
import Header from '~/components/frontend/Header'
import Footer from '~/components/frontend/Footer'
export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: 'Gallery - FvisNg'
    }
  },
  beforeMount() {
      this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>

<style>
</style>