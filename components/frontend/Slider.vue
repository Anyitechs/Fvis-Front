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
                    <h1 class="text-custom-white fw-700">Grow Your Business</h1>
                    <h5 class="text-light">Get the funding you need.</h5>
                    <p
                      class="text-custom-white"
                    >Become a member of our community where we can help you scale</p>
                    <NuxtLink to="/register" class="btn-first btn-submit-fill">GET STARTED</NuxtLink>
                  </div>
                </div>
                <div class="slide-item">
                  <div class="banner-text">
                    <h1 class="text-custom-white fw-700">Get Loans With Great Rates</h1>
                    <h5 class="text-light">As low as 8%</h5>
                    <p class="text-custom-white">
                      Become a member of Fvis Nigeria and gain access to incredible benefits <br>
                      Our incredible range of services grows your business by creating a tailor-made opportunities.
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
