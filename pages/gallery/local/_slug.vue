<template>
  <div>
    <Header />
    <div v-if="$fetchState.pending">
      <div class="sub-header p-relative">
        <div class="overlay overlay-bg-black"></div>
        <div class="pattern"></div>
        <div class="section-padding">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="sub-header-content p-relative">
                  <h1 class="text-custom-white lh-default fw-600"></h1>
                  <ul class="custom">
                    <li>
                      <NuxtLink to="/news" class="text-custom-white"></NuxtLink>
                    </li>
                    <li class="text-custom-white text-white active"></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="sub-header p-relative">
        <div class="overlay overlay-bg-black"></div>
        <div class="pattern"></div>
        <div class="section-padding">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="sub-header-content p-relative">
                  <h1 class="text-custom-white lh-default fw-600">{{ title }}</h1>
                  <ul class="custom">
                    <li>
                      <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                    </li>
                    <li class="text-custom-white text-white active">{{ title }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding bg-gray contact-us">
      <div class="container">
        <div class="row">
          <div class="col" v-for="(image, idx) in images" :key="idx">
            <img
              :src="image.thumbUrl"
              @click="showImage(idx)"
              :alt="image.caption"
              :title="image.caption"
              width="250"
            />
            <br />
            <br />
          </div>
        </div>
      </div>
    </section>
    <ImageBox :images="images" :index="index" @close="index = null" :bgcolor="bgcolor"></ImageBox>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/frontend/Footer'
import Header from '~/components/frontend/Header'
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      title: '',
      date: '',
      images: [],
      author: '',
      show: 0,
      index: null,
      bgcolor: 'rgba(51, 51, 51, .9)'
    }
  },
  async fetch() {
    // const posts = await fetch(
    //   `/gallery/${this.$route.params.slug}`
    // ).then(res => {
    //   console.log(res)
    //   res.json()
    // })
    const posts = await this.$axios.$get(`/gallery/${this.$route.params.slug}`)
    console.log(posts)
    this.title = posts.title
    this.date = posts.date
    this.author = posts.author.first_name + ' ' + posts.author.last_name
    this.images = this.images.concat(posts.data)
  },
  methods: {
    showImage: function(idx) {
      this.index = idx
    }
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
