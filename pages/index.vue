<template>
  <div>
    <Header />
    <Slider />
    <section class="main-services section-padding p-relative">
      <div class="container">
        <div class="section-header">
          <div class="section-heading">
            <h3 class="text-custom-black fw-700">FVIS BUSINESS PRESENTATION</h3>
          </div>
        </div>
        <div class="col-md-7 offset-md-2">
          <vue-plyr>
            <video poster="poster.png" src="home.mp4">
              <source src="home.mp4" type="video/mp4" size="720" />
            </video>
          </vue-plyr>
        </div>
      </div>
    </section>
    <Services />
    <Archives />
    <Calculator />
    <Steps />
    <Getapp />
    <Testimonials />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/frontend/Header'
import Slider from '~/components/frontend/Slider'
import Services from '~/components/frontend/Services'
import Steps from '~/components/frontend/Steps'
import Footer from '~/components/frontend/Footer'
import Calculator from '~/components/frontend/Calculator'
import Getapp from '~/components/frontend/Getapp'
import Archives from '~/components/frontend/Archives'
import Testimonials from '~/components/frontend/Testimonials'
export default {
  components: {
    Header,
    Slider,
    Services,
    Steps,
    Footer,
    Calculator,
    Getapp,
    Archives,
    Testimonials
  },
  data() {
    return {
      title: 'Fvis Nig - Loans | Invest | Funding'
    }
  },
  head() {
    return {
      title: this.title,
      bodyAttrs: {
        class: 'animated-banner'
      }
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>

<style>
</style>
