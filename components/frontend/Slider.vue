<template>
  <div class="slider parallax overlay-bg" id="banner-animation">
    <div class="side-lines">
      <span class="box"></span>
      <span class="text">FvisNg</span>
      <span class="line"></span>
    </div>
    <div class="transform-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <client-only placeholder="Loading...">
              <slick ref="slick" :options="slickOptions">
                <div class="slide-item">
                  <div class="banner-text">
                    <h1 class="text-custom-white fw-700">FIXED INCOME INVESTMENT</h1>
<!--                    <h5 class="text-light">Get the funding you need.</h5>-->
                    <p
                      class="text-custom-white"
                    > FVIS INVESTMENT LTD provides access to treasury bonds, agency, and government bonds, corporate bonds, municipal bonds, mortgage-backed securities, and more!</p>
                    <NuxtLink to="/register" class="btn-first btn-submit-fill">GET STARTED</NuxtLink>
                  </div>
                </div>
                <div class="slide-item">
                  <div class="banner-text">
                    <h1 class="text-custom-white fw-700">PROJECT FINANCING</h1>
<!--                    <h5 class="text-light">As low as 8%</h5>-->
                    <p class="text-custom-white">
                      Approach FVIS INVESTMENT LTD and enjoy unsurpassed professionalism from a com- pany that is perfectly equipped to bring your visions to life – globally.
                    </p>
                    <NuxtLink to="/register" class="btn-first btn-submit-fill">GET STARTED</NuxtLink>
                  </div>
                </div>
                <div class="slide-item">
                  <div class="banner-text">
                    <h1 class="text-custom-white fw-700">CORPORATE FINANCING</h1>
<!--                    <h5 class="text-light">As low as 8%</h5>-->
                    <p class="text-custom-white">
                      Whether crowdfunding, microloans, vendor financing, or purchase order financing, our team will pinpoint the perfect solution for you.
                    </p>
                    <NuxtLink to="/register" class="btn-first btn-submit-fill">GET STARTED</NuxtLink>
                  </div>
                </div>
                <div class="slide-item">
                  <div class="banner-text">
                    <h1 class="text-custom-white fw-700">Real Estate</h1>
<!--                    <h5 class="text-light">As low as 8%</h5>-->
                    <p class="text-custom-white">
                      Our expert management services to provide superior quality investment opportunities, ideally suited to your specific business needs.
                    </p>
                    <NuxtLink to="/register" class="btn-first btn-submit-fill">GET STARTED</NuxtLink>
                  </div>
                </div>
                <div class="slide-item">
                  <div class="banner-text">
                    <h1 class="text-custom-white fw-700">TALENT DEVELOPMENT (HUMAN RESOURCE)</h1>
<!--                    <h5 class="text-light">As low as 8%</h5>-->
                    <p class="text-custom-white">
                      Keep your business three steps ahead with our bespoke talent development programs.
                    </p>
                    <NuxtLink to="/register" class="btn-first btn-submit-fill">GET STARTED</NuxtLink>
                  </div>
                </div>
                <div class="slide-item">
                  <div class="banner-text">
                    <h1 class="text-custom-white fw-700">COMMODITY TRADING</h1>
<!--                    <h5 class="text-light">As low as 8%</h5>-->
                    <p class="text-custom-white">
                      We provide practical solutions to any challenges in Commodity Trading including En- ergy, Oil and Gas, Metal and Agribusiness sectors
                    </p>
                    <NuxtLink to="/register" class="btn-first btn-submit-fill">GET STARTED</NuxtLink>
                  </div>
                </div>
                <div class="slide-item">
                  <div class="banner-text">
                    <h1 class="text-custom-white fw-700">CHARITY (CSR)</h1>
<!--                    <h5 class="text-light">As low as 8%</h5>-->
                    <p class="text-custom-white">
                      We help you help the world. We help facilitate your charitable ventures by streamlining access to the world's best NGOs, raising funds and fair disbursement of all donations.
                    </p>
                    <NuxtLink to="/register" class="btn-first btn-submit-fill">GET STARTED</NuxtLink>
                  </div>
                </div>
                <div class="slide-item">
                  <div class="banner-text">
                    <h1 class="text-custom-white fw-700">LOAN SERVICES</h1>
<!--                    <h5 class="text-light">As low as 8%</h5>-->
                    <p class="text-custom-white">
                      Get loans with Great interest as low as 8%. we provide the right Personal and Corporate loans solutions, which can make all the difference in your business
                    </p>
                    <NuxtLink to="/register" class="btn-first btn-submit-fill">GET STARTED</NuxtLink>
                  </div>
                </div>
              </slick>
            </client-only>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 700,
        focusOnSelect: true,
        cssEase: 'linear'
      }
    }
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },
    prev() {
      this.$refs.slick.prev()
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick()
    }
  }
}
</script>

<style>
</style>
