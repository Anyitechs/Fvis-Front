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
                <h1 class="text-custom-white lh-default fw-600">Videos</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">Videos</li>
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
          <div class="col-lg-4 col-md-6 post mb-xl-30">
            <vue-plyr>
              <video poster="poster.png" src="home.mp4">
                <source src="/home.mp4" type="video/mp4" size="720"/>
              </video>
            </vue-plyr>
          </div>
          <div class="col-lg-4 col-md-6 post mb-xl-30">
            <vue-plyr>
              <div class="plyr__video-embed">
                <iframe
                  src="https://www.youtube.com/embed/dxQ4dzAUDdc?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1" allowfullscreen allowtransparency allow="autoplay">
                </iframe>
              </div>
            </vue-plyr>
          </div>
          <div class="col-lg-4 col-md-6 post mb-xl-30">

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

  export default {
    components: {
      Header,
      Footer
    },
    head() {
      return {
        title: 'Gallery - FvisNg'
      }
    },
    data() {
      return {
        galleries: [],
        next_page: ''
      }
    },
    async fetch() {
      const gallery = await this.$axios.$get(
        '/getgalleries'
      )
      if (gallery.success == true) {
        this.galleries = gallery.data.data
        this.next_page = gallery.data.next_page_url
      }
      console.log(gallery.data.data)
    },
    methods: {},
    beforeMount() {
      this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
    }
  }
</script>

<style scoped>
  img {
    max-width: 250px !important;
    /*width: none;*/
    /*height: none;*/
    transition: 0.5s;
  }
</style>
