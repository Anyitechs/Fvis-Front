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
                >Philanthropic exercise in Benin City, Edo State, Nigeria (Day 3)</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">Philanthropic exercise in Benin City, Edo State, Nigeria (Day 3)</li>
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
      title: 'Philanthropic exercise in Benin City, Edo State, Nigeria (Day 3) - FvisNg'
    }
  },
  data() {
    return {
      index: null,
      bgcolor: 'rgba(51, 51, 51, .9)',
      images: [
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/1.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/1.jpeg',
          caption: '#1'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/2.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/2.jpeg',
          caption: '#2'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/3.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/3.jpeg',
          caption: '#3'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/4.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/4.jpeg',
          caption: '#4'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/5.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/5.jpeg',
          caption: '#5'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/6.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/6.jpeg',
          caption: '#6'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/7.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/7.jpeg',
          caption: '#7'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/8.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/8.jpeg',
          caption: '#8'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/9.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/9.jpeg',
          caption: '#9'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/10.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/10.jpeg',
          caption: '#10'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/11.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/11.jpeg',
          caption: '#11'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/12.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/12.jpeg',
          caption: '#12'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/13.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/13.jpeg',
          caption: '#13'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/14.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/14.jpeg',
          caption: '#14'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/15.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/15.jpeg',
          caption: '#15'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/3rd/16.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/3rd/16.jpeg',
          caption: '#16'
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
