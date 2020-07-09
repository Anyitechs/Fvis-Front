<template>
  <section class="section-padding our-articles">
    <div class="container">
      <div class="section-header">
        <div class="section-heading">
          <h3 class="text-custom-black fw-700">Archives</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 no-padding">
          <div class="blog-slider slick-initialized slick-slider">
            <button
              @click="prev"
              class="slick-prev slick-arrow"
              aria-label="Previous"
              type="button"
              style
            >Previous</button>
            <div class="slick-list draggable">
              <slick ref="slick" :options="options">
                <article
                  class="col-12 post slick-slide slick-cloned"
                  data-slick-index="-3"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 320px;"
                >
                  <div class="post-wrapper">
                    <div class="blog-img animate-img">
                      <NuxtLink to="/gallery/local/3" tabindex="4">
                        <img
                          src="https://fvisng.com/gallery/3rd/6.jpeg"
                          class="full-width"
                          alt="COVID-19 Philanthropic exercise in Benin City, Edo State, Nigeria (Day 3)"
                        />
                      </NuxtLink>
                    </div>
                    <div class="blog-meta padding-20">
                      <div class="post-content">
                        <h2>
                          <NuxtLink
                            to="/gallery/local/3"
                            class="text-custom-black fw-600"
                            tabindex="-1"
                          >COVID-19 Philanthropic exercise in Benin City, Edo State, Nigeria (Day 3)</NuxtLink>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
                <article
                  class="col-12 post slick-slide slick-cloned"
                  data-slick-index="-3"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 320px;"
                >
                  <div class="post-wrapper">
                    <div class="blog-img animate-img">
                      <NuxtLink to="/gallery/local/2" tabindex="4">
                        <img
                          src="https://fvisng.com/gallery/third/1.jpeg"
                          class="full-width"
                          alt="COVID-19 Philanthropic exercise in Benin City, Edo State, Nigeria (Day 2)"
                        />
                      </NuxtLink>
                    </div>
                    <div class="blog-meta padding-20">
                      <div class="post-content">
                        <h2>
                          <NuxtLink
                            to="/gallery/local/2"
                            class="text-custom-black fw-600"
                            tabindex="-1"
                          >COVID-19 Philanthropic exercise in Benin City, Edo State, Nigeria (Day 2)</NuxtLink>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
                <article
                  class="col-12 post slick-slide slick-cloned"
                  data-slick-index="-3"
                  aria-hidden="true"
                  tabindex="-1"
                  style="width: 320px;"
                >
                  <div class="post-wrapper">
                    <div class="blog-img animate-img">
                      <NuxtLink to="/gallery/local/1" tabindex="4">
                        <img
                          src="https://fvisng.com/gallery/12.jpg"
                          class="full-width"
                          alt="Philanthropic exercise in Benin City, Edo State, Nigeria (Day 1)"
                        />
                      </NuxtLink>
                    </div>
                    <div class="blog-meta padding-20">
                      <div class="post-content">
                        <h2>
                          <NuxtLink
                            to="/gallery/local/1"
                            class="text-custom-black fw-600"
                            tabindex="-1"
                          >Philanthropic exercise in Benin City, Edo State, Nigeria (Day 1)</NuxtLink>
                        </h2>
                      </div>
                    </div>
                  </div>
                </article>
              </slick>
            </div>

            <button
              @click="next"
              class="slick-next slick-arrow"
              aria-label="Next"
              type="button"
              style
            >Next</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        loop: true,
        autoplay: true,
        speed: 400,
        cssEase: 'linear',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: true,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  methods: {
    next() {
      this.$refs.slick.next()
    },

    prev() {
      this.$refs.slick.prev()
    }
  }
}
</script>

<style>
</style>