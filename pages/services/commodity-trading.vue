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
                    Commodities can be an important way to diversify portfolio for investors, beyond traditional securities. Because the prices of commodities tend to move in opposition to stocks, some investors also rely on commodities during periods of market volatility.<br>
                    By building a structure that offers reliability, efficiency and optimum productivity, we provide practi- cal solutions to any challenges in Commodity Trading including Energy, Oil and Gas, Metal and Agri- business sectors
                  </p>
                  <b-tabs content-class="mt-3" align="center">
                    <b-tab title="ENERGY, OIL AND GAS" active><p>
                      Energy, Oil and gas are some of the most significant exports and sources of foreign exchange for the economy. Global economic developments and reduced oil outputs from established oil wells around the world have led to rising oil prices while there is increasing demand for these commodities. This in the last couple of years, has presented incredible opportunities. You can partner with us to take advantage of the huge business opportunity in this sector.
                    </p>
                    <p>
                      FVIS INVESTMENT LTD offers efficient, premium-quality com- modity trading services at an af- fordable rate, with our expert team wade through the myriad of trading options to hand-pick trading op- tions that provide you with the most lucrative solutions for your in- dividual situation.
                    </p>
                      <NuxtLink to="/services/oil-gas" class="btn btn-info">Interested in Oil and Gas, Please click here to contact us</NuxtLink>
                    </b-tab>
                    <b-tab title="METALS"><p>
                      We can also advice and guide you to invest in Metal commodities such as gold, silver, platinum, and copper. These has high reliable status in the face of market volatility, high inflation and currency devaluation.<br>
                      <NuxtLink to class="btn btn-info">Interested in Metal, Please click here to contact us</NuxtLink>
                    </p></b-tab>
                    <b-tab title="AGRO PRODUCT BUSINESS"><div>
                      <blockquote>“Partner with FVIS INVESTMENT LTD to get professional services in the agricultural sector and food value chain from the primary producer through to the retailer and end- consumer”</blockquote>
                      With increased global awareness of food security and sustainable food production, agriculture is fast becoming one of the key industries on both a global and local level. In Nigeria there is a renewed emphasis on growing the non-oil sector of the economy and the Agro-industry is experiencing a revitalization with government policies geared towards encouraging farmers and
                      investors.
                      <NuxtLink to class="btn btn-info">Interested in Agri business, Please click here to contact us</NuxtLink>
                    </div></b-tab>
                  </b-tabs>
                  <p class="mt-4">
                    Although these commodities provide unprecedented returns, they could also be risky investment propositions because their market (supply and demand) is impacted by uncertainties that are difficult or impossible to predict, as such most clients veer away from these opportunities that pose a higher investment risk. <strong>Partner with FVIS and we will guide and help provide opportunities for profiting from these sectors and see the inherent volatility and complexity of commodity trading fade away.</strong><br><br>
                    We are well positioned to support investors looking to tap into the huge potentials of these sectors. We look forward to any opportunity to work with your organisation.
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
<style scoped>
  .sub-header {
    background-image: url(/assets/images/comodity-trading-header.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }
</style>
