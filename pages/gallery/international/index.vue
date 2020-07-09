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
                <h1 class="text-custom-white lh-default fw-600">International Gallery</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">International Gallery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-md-7 offset-md-2 mb-4">
            <vue-plyr>
                <video poster="poster.png" src="home.mp4">
                    <source src="/videos/2nd_May.mp4" type="video/mp4" size="720" />
                </video>
            </vue-plyr>        
        </div>
        <div class="col-md-7 offset-md-2 mb-4">
            <vue-plyr>
                <video poster="poster.png" src="home.mp4">
                    <source src="/videos/Fvis_Malaysia.mp4" type="video/mp4" size="720" />
                </video>
            </vue-plyr>        
        </div>
        <div class="col-md-7 offset-md-2 mb-4">
            <vue-plyr>
                <video poster="poster.png" src="home.mp4">
                    <source src="/videos/Kuala.mp4" type="video/mp4" size="720" />
                </video>
            </vue-plyr>        
        </div>
        <div class="col-md-7 offset-md-2 mb-4">
            <vue-plyr>
                <video poster="poster.png" src="home.mp4">
                    <source src="/videos/Project Funding 2018.mp4" type="video/mp4" size="720" />
                </video>
            </vue-plyr>        
        </div>
        <div class="col-md-7 offset-md-2 mb-4">
            <vue-plyr>
                <video poster="poster.png" src="home.mp4">
                    <source src="/videos/Project_Funding_2013.mp4" type="video/mp4" size="720" />
                </video>
            </vue-plyr>        
        </div>
    </div>
    

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
      thirdindex: '',
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
      ],
      thirdphils: [
        {
          imageUrl: 'https://fvisng.com/gallery/third/1.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/1.jpeg',
          caption: '#1'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/2.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/2.jpeg',
          caption: '#2'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/3.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/3.jpeg',
          caption: '#3'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/4.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/4.jpeg',
          caption: '#4'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/5.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/5.jpeg',
          caption: '#5'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/6.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/6.jpeg',
          caption: '#6'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/7.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/7.jpeg',
          caption: '#7'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/8.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/8.jpeg',
          caption: '#8'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/9.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/9.jpeg',
          caption: '#9'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/10.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/10.jpeg',
          caption: '#10'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/11.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/11.jpeg',
          caption: '#11'
        },
        {
          imageUrl: 'https://fvisng.com/gallery/third/12.jpeg',
          thumbUrl: 'https://fvisng.com/gallery/third/12.jpeg',
          caption: '#12'
        }
      ]
    }
  },
  methods: {
    showImage: function(idx) {
      this.index = idx
    },
    thirdImage(idx) {
      this.thirdindex = idx
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
