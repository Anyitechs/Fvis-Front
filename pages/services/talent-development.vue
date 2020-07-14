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
                <h1 class="text-custom-white lh-default fw-600">Hire A HR Professional For Your Small Business One Hour At A Time.</h1>
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
                    <a class="text-custom-black fw-600">Talent Development</a>
                  </h2>
                  <img class="img-fluid" src="/assets/images/services/talent.jpeg" />
                  <p class="text-light-white">
                    Keep your business three steps ahead with our bespoke talent development programs. By providing your organization with new skills and learning opportunities, you increase overall efficiency that stimulates company growth to maintain your competitive advantage.
                  </p>
                  <p class="text-light-white">
                    FVIS Talent Development/HR Solutions assists businesses of every industry in their human resource challenges, compliance and termination needs. Our team of passionate experts works side-by-side with you to deliver lucrative and sustainable solutions
                  </p>
                  <div class="text-light-white">
                    Our experience spans across the globe and we will ensure your business is compliant by creating procedures, policies, and documents customized for your company. We specialize in the areas of:
                    <br />
                    <ul>
                  <li>
                    Employee handbook writing
                  </li>
                  <li>
                    Health and Safety meetings and workplace walk through audits
                  </li>
                  <li>
                    Wage and hour laws, including attendance and time keeping audits
                  </li>
                  <li>
                    Job descriptions
                  </li>
                  <li>Job compensation analysis trends local and within the United States</li>
                  <li>Employee benefits</li>
                  <li>Documenting company specific standard operating procedures</li>
                  <li>Placing corrective action plans in place</li>
                  <li>Writing employee performance reviews and bonus plans</li>
                </ul>
                </div>
                </div>
                <h3>CALL US TO TODAY FOR A FREE CONSULTATION!</h3>
                <div class="row">
                <div class="col text-center btn btn-info"><NuxtLink to="/contact" class="text-white">CONTACT US</NuxtLink></div>
                <div class="col text-center btn btn-warning">LET US CONTACT YOU</div>
                </div>
                <div class="row">
                  <div class="col text-center btn btn-info"><NuxtLink to="/contact" class="text-white">CONTACT US</NuxtLink></div>
                  <div class="col text-center btn btn-warning">LET US CONTACT YOU</div>
                </div>
              </div>
              <!-- article -->
              <hr />
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
      title: 'Talent Development - Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Keep your business three steps ahead with our bespoke talent development programs.'
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
    background-image: url(/assets/images/talent-header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
</style>
