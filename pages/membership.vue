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
                <h1 class="text-custom-white lh-default fw-600">Applicants</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">Applicants</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Intro />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/frontend/Header'
import Footer from '~/components/frontend/Footer'
import Intro from '~/components/frontend/Intro'
export default {
  components: {
    Header,
    Footer, Intro
  },
  data() {
    return {}
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  },
  head() {
    return {
      title: 'Membership - Fvis Nig',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'FVIS Nigeria has excelled in Financial Management, Investments, and Consultancy for many years and now extends our successful tenure to provide talent development, corporate, and personal loans, as well as facilitating your charitable ventures.'
        }
      ]
    }
  }
}
</script>

<style>
</style>