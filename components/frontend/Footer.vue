<template>
  <div>
    <footer class="bg-black section-padding footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <div class="footer-box mb-md-80">
              <div class="footer-heading">
                <h4 class="text-custom-white no-margin">Useful Links</h4>
              </div>
              <ul class="custom links">
                <li>
                  <NuxtLink to="/about" class="text-custom-white">About Us</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/gallery/local" class="text-custom-white">Gallery</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/news" class="text-custom-white">News</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/faq" class="text-custom-white">FAQ</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact" class="text-custom-white">Contact Us</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/privacy" class="text-custom-white">Privacy &amp; Membership Policy</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="footer-box mb-md-80">
              <div class="footer-heading">
                <h4 class="text-custom-white no-margin">Featured Post</h4>
              </div>
              <ul class="custom popular_post">
                <li>
                  <div class="post">
                    <div class="post-wrapper">
                      <div class="popular_post_img animate-img">
                        <NuxtLink to="/news/1">
                          <img
                            src="/news/phil.jpeg"
                            class="img-fluid image-fit"
                            alt="Apst. Johnson led his team again on another philanthropic exercise"
                          />
                        </NuxtLink>
                      </div>
                      <div class="popular_post_title">
                        <h6>
                          <NuxtLink
                            to="/news/1"
                            class="text-custom-white fs-14 fw-400"
                          >Apst. Johnson led his team again on another philanthropic exercise</NuxtLink>
                        </h6>
                        <div class="post-date">
                          <p class="text-white no-margin">April 15 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="post">
                    <div class="post-wrapper">
                      <div class="popular_post_img animate-img">
                        <NuxtLink to="/news/2">
                          <img
                            src="/news/2nd-edition.jpeg"
                            class="img-fluid image-fit"
                            alt="Apst. Johnson led his team again on another philanthropic exercise"
                          />
                        </NuxtLink>
                      </div>
                      <div class="popular_post_title">
                        <h6>
                          <NuxtLink
                            to="/news/2"
                            class="text-custom-white fs-14 fw-400"
                          >Covid-19: FVIS collaborates with Edo State Govt in Fight against virus pandemic, distributes food items, others to the needy</NuxtLink>
                        </h6>
                        <div class="post-date">
                          <p class="text-white no-margin">April 19 2020</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="footer-box mb-xs-80">
              <div class="footer-heading">
                <h4 class="text-custom-white no-margin">Twitter Feeds</h4>
              </div>
              <client-only placeholder="Loading...">
                <ul v-if="$fetchState.pending">
                  <li>
                    <p class="tweet">
                      Loading Tweets...
                    </p>
                  </li>
                </ul>
                <ul v-else-if="$fetchState.error">
                  <li>
                    <p class="tweet">
                      An error occured while Loading Tweets...
                    </p>
                  </li>
                </ul>
                <ul class="custom twitter-feed twitter-slider" v-else>
                  <slick ref="slick" :options="slickOptions">
                    <li>
                      <p class="tweet">
                        {{tweets.data[0].text}}
                        <br>
                      </p>
                      <p class="timePosted">
                        <a href="#">{{ tweets.data[0].created_at | tweettime }}</a>
                      </p>
                    </li>
                    <li>
                      <p class="tweet">
                        {{tweets.data[1].text}}
                        <br>
                      </p>
                      <p class="timePosted">
                        <a href="#">{{ tweets.data[1].created_at | tweettime }}</a>
                      </p>
                    </li>
                    <li>
                      <p class="tweet">
                        {{tweets.data[2].text}}
                        <br>
                      </p>
                      <p class="timePosted">
                        <a href="#">{{ tweets.data[2].created_at | tweettime }}</a>
                      </p>
                    </li>
                    <li>
                      <p class="tweet">{{tweets.data[3].text}}</p>
                      <br>
                      <p class="timePosted">
                        <a
                          href="https://twitter.com/techieoriname"
                        >{{ tweets.data[3].created_at | tweettime }}</a>
                      </p>
                    </li>
                  </slick>
                </ul>
              </client-only>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="footer-box">
              <div class="footer-heading">
                <h4 class="text-custom-white no-margin">Newsletter</h4>
              </div>
              <div class="newsletter">
                <mailchimp-subscribe
                  url="https://fvisng.us8.list-manage.com/subscribe/post-json"
                  user-id="3707e931734f2958c5cd6ab7a"
                  list-id="300adfe1fb"
                  @error="onError"
                  @success="onSuccess"
                >
                  <template v-slot="{ subscribe, setEmail, error, success, loading }">
                    <form @submit.prevent="subscribe">
                      <div class="form-group">
                        <input
                          placeholder="Enter your email"
                          class="form-control form-control-custom"
                          type="email"
                          @input="setEmail($event.target.value)"
                        />
                      </div>
                      <button
                        v-if="!loading"
                        class="btn-first btn-submit-fill btn-height full-width"
                        type="submit"
                      >Submit</button>
                      <div v-if="loading">
                        <button
                          class="btn-first btn-submit-fill btn-height full-width"
                          type="submit"
                          disabled
                        >Submitting...</button>
                      </div>
                    </form>
                  </template>
                </mailchimp-subscribe>
              </div>
              <div class="social-media">
                <ul class="custom social-media">
                  <li>
                    <a href="https://web.facebook.com/peter.ozeze" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/FvisLtd" target="_blank">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/fvisng" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/fvis-investment" target="_blank"><i class="fab fa-linkedin"></i></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCjKKZWYv9RMV3umFIdYOdMw" target="_blank"><i class="fab fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <p class="text-custom-white no-margin">&copy; Fvis Nig - 2020 | All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
    <!-- End Footer -->
    <div id="back-top" class="back-top">
      <a href="#top">
        <i class="flaticon-up-arrow"></i>
      </a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
export default {
  components: {
    MailchimpSubscribe
  },
  data() {
    return {
      slickOptions: {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        vertical: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: 'linear',
        pauseOnHover: true
      },
      tweets: []
    }
  },
  async fetch() {
    const tweet = await this.$axios.$get(
      'https://resource.fvisng.com/api/tweets'
    )
    this.tweets = tweet
  },
  methods: {
    onError() {
      this.$Toast(
        'Newsletter',
        'An error occured while trying to complete your subscription, kindly try again',
        'danger'
      )
    },
    onSuccess() {
      this.$Toast(
        'Newsletter',
        'Thank you for subscribing to our newsletter',
        'success'
      )
    },
  },
  filters: {
    tweettime (value) {
        let tweetdate = moment(value, "ddd MMM D HH:mm:ss ZZ YYYY")
        return moment(tweetdate).fromNow()
    }
}
}
</script>

<style>
</style>
