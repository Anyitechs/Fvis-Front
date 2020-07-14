<template>
  <div>
    <Header/>
    <Slider/>
    <section class="main-services section-padding p-relative">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h3 class="text-custom-black fw-700">What We Do</h3>
            <div class="section-description">
              <p
                class="text-light-white"
              >FVIS has excelled internationally in Financial Management, Investments, and Consultancy for many years and
                now extends our success, expertise and services to the Nigerian Market to provide Personal and Corporate
                Loans, Crowd Funding, Savings and Investment Products, Talent Development as well as facilitating your
                Charitable Ventures.</p>
            </div>
          </div>
          <div class="col-md-6">
            <h3 class="text-custom-black fw-700">
              FVIS BUSINESS PRESENTATION
            </h3>
            <vue-plyr>
              <video poster="poster.png" src="home.mp4">
                <source src="home.mp4" type="video/mp4" size="720"/>
              </video>
            </vue-plyr>
          </div>
        </div>
      </div>
    </section>
    <Services/>
    <Testimonials/>
    <Calculator/>
    <Steps/>
    <Getapp/>
    <Archives/>
    <Footer/>
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
