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
                <h1 class="text-custom-white lh-default fw-600">Corporate Financing</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white">Services |&nbsp;</li>
                  <li class="text-custom-white active">Corporate Financing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding bg-gray our-articles">
      <div class="container">
        <div class="row">
          <ServicesAside />
          <div class="col-lg-8">
            <div class="blog-detail padding-20">
              <!-- article -->
              <div class="post-wrapper">
                <div class="blog-meta">
                  <h2>
                    <a class="text-custom-black fw-600">Corporate Financing</a>
                  </h2>
                  <img class="img-fluid" src="/assets/images/services/corporate.jpeg" />
                  <p class="text-light-white">
                    Our comprehensive offering covers a myriad of options to make sure your business receives
                    precisely what it needs to thrive. Whether crowdfunding, microloans, vendor financing, or purchase
                    order financing, our team will pinpoint the perfect solution for you.
                  </p>
                  <div class="row">
                    <div class="col-md-6">
                      <h4 class="text-dark">OUR EXPERIENCE, YOUR ADVANTAGE</h4>
                      FVIS INVESTMENT LTD offers full-service corporate financing solutions to meet any size company’s needs. With over 30 years of financial transaction and management experience across a spectrum of industries, we focus on providing top- class strategic advisory services in the areas of acquisitions, fund-raising and divestitures.
                      Our highly-skilled team of experts are deeply involved with every aspect of your requirements to provide only the best in industry service.</div>
                    <div class="col-md-6">
                      <h4 class="text-dark">A SERVICE TAILORED TO MEET YOUR BUSINESS NEEDS</h4>
                      <img src="/assets/images/proj.jpg" alt="" class="img-fluid"> <br>
                      At FVIS INVESTMENT LTD, we appreciate that no two deals are ever the same. While you are an expert in running your business, the sale or acquisition of a business is a complex process that is best handled with only the best financial professionals at your side.
                      Our corporate finance team has closed many successful transactions with our powerful combination of corporate deal experience entwined with relentless creativity and tenacity.
                      By carefully considering the needs of the owners, business and industry parameters, our team arrive at the most suitable solution at any given time.</div>
                    <div class="pt-3">Trust FVIS INVESTMENT LTD to take care of every aspect of your corporate financing needs swiftly and professionally.
                    </div>
                  </div>
                  <div class="row">
                    <div class="col text-center btn btn-info"><NuxtLink to="/contact" class="text-white">CONTACT US</NuxtLink></div>
                    <div class="col text-center btn btn-warning">LET US CONTACT YOU</div>
                  </div>
                </div>
              </div>
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
import ServicesAside from '~/components/frontend/ServicesAside.vue'

export default {
  components: {
    Header,
    Footer,
    ServicesAside
  },
  head() {
    return {
      title: 'Corporate Financing - Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Our comprehensive offering covers a myriad of options to make sure your business receives precisely what it needs to thrive. Whether crowdfunding, microloans, vendor financing, or purchase order financing, our team will pinpoint the perfect solution for you.'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
<style scoped>
  .sub-header {
    background-image: url(/assets/images/corporate-financing-header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

</style>
