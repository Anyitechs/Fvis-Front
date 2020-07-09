<template>
  <section class="section-padding findrate-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="testimonials-box mb-md-80">
            <div class="section-header">
              <div class="section-heading">
                <h3 class="text-custom-black fw-700">Testimonials</h3>
              </div>
              <div class="section-description">
                <p
                  class="text-light-white"
                >Loved by 1,000+ people around the world!</p>
              </div>
            </div>
            <div class="testimonials-wrapper">
              <div class="col-12">
                <slick ref="slick" :options="opt">
                  <div class="testimonials-inner">
                    <div class="testimonial-content">
                      <h4 class="text-custom-blue fw-700 fs-20">Very satisfied!</h4>
                      <p
                        class="text-light-white mb-xl-20"
                      >I have been an investor with FVIS since November 2017. Since working with the team at FVIS, they have met and surpassed my expectations of working with financial advisors. The team take the time to really know their clients which gives me every confidence that not just my financial goals are well understood but also my comfort level. I have referred at least 5 of my family and friends to FVIS to their Monthly Income Schemes. As a surprise bonus unbeknown to me, I am in with a chance to win a Range Rover Sport 2017 V8 Experience Absolute Fidelity. Wow. I am so excited.</p>
                      <p class="text-custom-black fw-700">
                        <strong>
                          Paul Marrow
                          <br />
                          <span class="text-light-blue fw-500">Home Owner</span>
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div class="testimonials-inner">
                    <div class="testimonial-content">
                      <h4 class="text-custom-blue fw-700 fs-20">Well Pleased!</h4>
                      <p
                        class="text-light-white mb-xl-20"
                      >Never ever, ever, since I have been with FVIS, have I ever gone to bed worrying about money. Your Fixed Monthly Income scheme is what I have been searching for a long time but with no success. I am receiving 5% per month on my investment. I have referred many of my business colleagues to FVIS and they have taken up the Fixed Monthly Scheme and they are all impressed with the monthly returns and the team. You take care of my financial affairs fully – thank you!</p>
                      <p class="text-custom-black fw-700">
                        <strong>
                          Mitchell Youcef
                          <br />
                          <span class="text-light-blue fw-500">Home Owner</span>
                        </strong>
                      </p>
                    </div>
                  </div>
                  <div class="testimonials-inner">
                    <div class="testimonial-content">
                      <h4 class="text-custom-blue fw-700 fs-20">Very satisfied!</h4>
                      <p
                        class="text-light-white mb-xl-20"
                      >We have been looking for projects to invest in that will bring good returns to our investment and we connected with FVIS through their website. We were referred to the FVIS consultants who left us convinced that our investment was in safe hands. After making thorough assessments of the projects in their database they offered us an Investment plan,Affordable Housing Plan which we invested in and is bringing us real returns. FVIS are real professionals and investing in their projects gives you peace of mind.</p>
                      <p class="text-custom-black fw-700">
                        <strong>
                          MOHAMMAD AZEEZ
                          <br />
                          <span class="text-light-blue fw-500">Home Owner</span>
                        </strong>
                      </p>
                    </div>
                  </div>
                </slick>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="clients-box">
            <div class="section-header">
              <div class="section-heading">
                <h3 class="text-custom-black fw-700">Advertisement</h3>
              </div>
            </div>
          </div>
          <img src="/assets/images/350x250.webp" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      opt: {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        draggable: false,
        dots: false
      }
    }
  }
}
</script>

<style>
</style>