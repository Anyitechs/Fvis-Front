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
                <h1 class="text-custom-white lh-default fw-600">Local Gallery</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">Local Gallery</li>
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
          <article
            class="col-lg-4 col-md-6 post mb-xl-30"
            v-for="gallery in galleries"
            :key="gallery.id">
            <div class="post-wrapper">
              <NuxtLink :to="'/gallery/local/3' + gallery.slug">
                <div class="blog-img animate-img">
                  <img
                    :src="gallery.galleryimages[0].gallery_url"
                    style="min-width: 100%;max-width: 100%;max-height: 200px"
                  />
                </div>
              </NuxtLink>
              <div class="blog-meta padding-20">
                <div class="post-content">
                  <h2>
                    <NuxtLink
                      :to="'/gallery/local/' + gallery.slug"
                      class="text-custom-black fw-600"
                    >{{ gallery.title }}</NuxtLink>
                  </h2>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div class="row">
          <youtube video-id="dxQ4dzAUDdc" />
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
      'https://resource.fvisng.com/api/getgalleries'
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
