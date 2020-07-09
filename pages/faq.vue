<template>
<div>
    <Header/>
    <div class="sub-header p-relative">
      <div class="overlay overlay-bg-black"></div>
      <div class="pattern"></div>
      <div class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="sub-header-content p-relative">
                <h1 class="text-custom-white lh-default fw-600">Frequently Asked Questions</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">Frequently Asked Questions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Faq />
    <Footer/>
  </div>
</template>
<script>
    import Header from '~/components/frontend/Header'
    import Footer from '~/components/frontend/Footer'
    import Faq from '~/components/frontend/Faq'

    export default {
    components: {
      Header, Footer, Faq
    },
    head() {
      return {
        title: 'Frequently Asked Questions - FvisNg'
      }
    },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
    }
</script>