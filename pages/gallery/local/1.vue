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
                <h1
                  class="text-custom-white lh-default fw-600"
                >Philanthropic exercise in Benin City, Edo State, Nigeria (Day 1)</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">Philanthropic exercise in Benin City, Edo State, Nigeria (Day 1)</li>
                </ul>
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
import Header from '~/components/frontend/Header'
import Footer from '~/components/frontend/Footer'

export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title: 'Philanthropic exercise in Benin City, Edo State, Nigeria (Day 1) - FvisNg'
    }
  },
  data() {
    return {
      index: null,
      bgcolor: 'rgba(51, 51, 51, .9)',
      images: [
        {
          imageUrl: 'https://fvisng.com/gallery/1.jpg',
          thumbUrl: 'https://fvisng.com/gallery/1.jpg',
          caption: '#1'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/2.jpg',
          thumbUrl: 'https://fvisng.com/gallery/2.jpg',
          caption: '#2'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3.jpg',
          thumbUrl: 'https://fvisng.com/gallery/3.jpg',
          caption: '#3'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/4.jpg',
          thumbUrl: 'https://fvisng.com/gallery/4.jpg',
          caption: '#4'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/5.jpg',
          thumbUrl: 'https://fvisng.com/gallery/5.jpg',
          caption: '#5'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/6.jpg',
          thumbUrl: 'https://fvisng.com/gallery/6.jpg',
          caption: '#6'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/7.jpg',
          thumbUrl: 'https://fvisng.com/gallery/7.jpg',
          caption: '#7'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/8.jpg',
          thumbUrl: 'https://fvisng.com/gallery/8.jpg',
          caption: '#8'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/9.jpg',
          thumbUrl: 'https://fvisng.com/gallery/9.jpg',
          caption: '#9'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/10.jpg',
          thumbUrl: 'https://fvisng.com/gallery/10.jpg',
          caption: '#10'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/11.jpg',
          thumbUrl: 'https://fvisng.com/gallery/11.jpg',
          caption: '#11'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/12.jpg',
          thumbUrl: 'https://fvisng.com/gallery/12.jpg',
          caption: '#12'
        }
      ]
    }
  },
  methods: {
    showImage: function(idx) {
      this.index = idx
    }
  },
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
