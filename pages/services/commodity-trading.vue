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
                <h1 class="text-custom-white lh-default fw-600">Commodity Trading</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white">Services |&nbsp;</li>
                  <li class="text-custom-white active">Commodity Trading</li>
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
                    <a class="text-custom-black fw-600">Commodity Trading (Oil &amp; Gas)</a>
                  </h2>
                  <img class="img-fluid" src="/assets/images/services/commodity.jpg" />
                  <p class="text-light-white">
                    By building a structure that offers reliability, efficiency and
                    optimum productivity, we provide practical solutions to any challenges in the Oil and Gas
                    industry.
                  </p>
                  <p class="text-light-white">
                    Oil and gas are two of the most significant exports and sources of foreign exchange for the
                    economy. And in the last couple of years, incredible opportunities presented themselves due to the
                    increasing demand for industrial gas, plus the rising demand for gas injection requirements used
                    to enhance oil and condensate the recovery from producing areas.
                    <br />But although these commodities provide unprecedented returns, most clients veer away from
                    these opportunities that pose a higher investment risk. When partnering with a reputable firm like
                    FVIS INVESTMENT LTD, the inherent volatility and complexity of commodity trading fade away.
                    <br />FVIS INVESTMENT LTD offers efficient, premium-quality commodity trading services at an
                    affordable rate, with our expert team wade through the myriad of trading options to hand-pick
                    trading options that provide you with the most lucrative solutions for your individual situation.
                    <br />By combining our established strengths with the focus and culture expected from an
                    independent company, we unlock hidden potential that drives profits for our stakeholders while
                    also assisting in meeting global energy needs. Only by having access to an incredibly dedicated
                    and expert team of employees and partners are we able to embrace every opportunity to exceed our
                    customers’ needs.
                    <br />A thorough investment plan, centered around the commodity market, benefits your investment
                    portfolio by improving your risk-adjusted profits, providing a stable investment platform that
                    remains unaffected by inflation, and offering much higher return rates when compared to other
                    asset classes.
                  </p>
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
      title: 'Commodity Trading - Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'By building a structure that offers reliability, efficiency and optimum productivity, we provide practical solutions to any challenges in the Oil and Gas industry.'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
