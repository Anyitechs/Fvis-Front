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
                <h1 class="text-custom-white lh-default fw-600">Fixed Income Investment</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white">Services |&nbsp;</li>
                  <li class="text-custom-white active">Fixed Income Investment</li>
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
              <div class="post-wrapper">
                <div class="blog-meta">
                  <h2>
                    <a class="text-custom-black fw-600">Fixed Income Investment</a>
                  </h2>
                  <img class="img-fluid" src="/assets/images/services/investments.jpg" />
                  <p class="text-light-white">
                    Each business requires access to a unique combination of high-yielding
                    fixed income investments to maintain a successful portfolio. FVIS INVESTMENT LTD provides access to
                    treasury bonds, agency, and government bonds, corporate bonds, municipal bonds, mortgage-backed
                    securities, and more!
                  </p>
                  <p class="text-light-white">
                    Fixed income plays an integral role in any investor’s portfolio, but it is imperative to entrust
                    only the top industry players with your hard-earned money.
                    <br />Whether your goal is to preserve principal, save for the future, diversify your investments,
                    or receive dependable income, fixed-income investments are vital in realizing your portfolio’s
                    potential and reach your financial goals.
                    <br />FVIS INVESTMENT LTD appreciates that many clients are risk-averse, which is why we developed
                    an investment opportunity that delivers predictable income while maintaining an acceptable level
                    of risk. We make this incredible opportunity possible by investing in reliable long term
                    opportunities that promise high yields and a fast return on investment.
                    <br />We also understand that every client’s budget vastly differs from the next. Hence we offer a
                    range of fixed investment plans. But no matter your budget and preferred plan, all our clients
                    enjoy our diligent service, prompt payments, and excellent service from our dedicated and
                    professional investment team.
                    <br />Our highly skilled consultants are experts in servicing client portfolios, and knowledgeable
                    about the intensive research and due diligence that’s imperative to a lucrative fixed investment
                    portfolio. Through streamlined processes, we ensure both the safety and the liquidity of each
                    investment to provide the most attractive returns possible.
                    <br />FVIS INVESTMENT LTD is committed to providing every client with personalized service to
                    ensure
                    we meet your particular financial needs. Our fixed-income investment strategies emphasize both
                    long-term growth as well as immediate returns by continually monitoring the direction interest
                    rates may be headed.
                    Our offering to our clients is a unique proposition with the perfect blend between industry
                    expertise and unrivalled customer service, which achieves exemplary results – every time
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
      title: 'Fixed Income Investment - Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Each business requires access to a unique combination of high-yielding fixed income investments to maintain a successful portfolio. FVIS INVESTMENT LTD provides access to treasury bonds, agency, and government bonds, corporate bonds, municipal bonds, mortgage-backed securities, and more!'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
