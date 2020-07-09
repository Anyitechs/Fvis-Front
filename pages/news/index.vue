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
                <h1 class="text-custom-white lh-default fw-600">News</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">News</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section
      class="section-padding bg-gray our-articles"
      v-if="$fetchState.pending && !posts.length"
    >
      <div class="container">
        <div class="row">
          <content-placeholders
            v-for="p in 6"
            :key="p"
            rounded
            class="col-lg-4 col-md-6 post mb-xl-30"
          >
            <content-placeholders-img class="full-width myimg" />
            <content-placeholders-text class="post-content mypost" :lines="3" />
          </content-placeholders>
        </div>
      </div>
    </section>
    <section class="section-padding bg-gray our-articles" v-else-if="$fetchState.error">
      <div class="container">
        <div class="row">
          <b-alert show variant="warning">{{ $fetchState.error.message }}</b-alert>
        </div>
      </div>
    </section>
    <section class="section-padding bg-gray our-articles" v-else>
      <div class="container">
        <div class="row">
          <article
            class="col-lg-4 col-md-6 post mb-xl-30"
            v-for="(post, i) in posts"
            :key="post.id"
            v-observe-visibility="i === posts.length - 1 ? lazyLoadArticles : false"
          >
            <div class="post-wrapper">
              <div class="blog-img animate-img">
                <NuxtLink :to="`/news/${post.slug}`">
                  <img :src="post.featured_img" class="full-width myimg" :alt="post.title" />
                </NuxtLink>
              </div>
              <div class="blog-meta padding-20">
                <div class="post-content mypost">
                  <h2>
                    <NuxtLink
                      :to="`/news/${post.slug}`"
                      class="text-custom-black fw-600"
                    >{{ post.title }}</NuxtLink>
                  </h2>
                </div>
                <div class="blog-links">
                  <NuxtLink :to="`/news/${post.slug}`" class="text-light-blue fs-14">Read More</NuxtLink>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <section
      class="section-padding bg-gray our-articles"
      v-if="$fetchState.pending && posts.length"
    >
      <div class="container">
        <div class="row">
          <content-placeholders
            v-for="p in 6"
            :key="p"
            rounded
            class="col-lg-4 col-md-6 post mb-xl-30"
          >
            <content-placeholders-img class="full-width myimg" />
            <content-placeholders-text class="post-content mypost" :lines="3" />
          </content-placeholders>
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
      title: 'News - Fvis Nig'
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  },
  data() {
    return {
      posts: [],
      next_page: '1'
    }
  },
  filters: {
    strippedContent: function(string) {
      let regex = /(<([^>]+)>)/gi
      return string.replace(/(<([^>]+)>)/gi, '')
    }
  },
  async fetch() {
    const posts = await this.$axios.$get(
      `https://resource.fvisng.com/api/getposts/18?page%5Bnumber%5D=${this.next_page}`
    )
    this.posts = this.posts.concat(posts.data.data)
    // this.posts = posts.data.data
    if (posts.data.next_page_url == null) {
      this.next_page = null
    } else {
      this.next_page++
    }
  },
  methods: {
    async infiniteScroll($state) {
      if (this.next_page !== null) {
        const check = await this.$axios.$get(this.next_page)
        check.data.data.forEach(item => this.posts.push(item))
        $state.loaded()
        this.nextpage = check.data.next_page_url
      } else {
        $state.complete()
      }
    },
    lazyLoadArticles(isVisible) {
      if (isVisible) {
        if (this.next_page !== null) {
          this.$fetch()
        }
      }
    }
  }
}
</script>
<style scoped>
.myimg {
  object-fit: cover !important;
  height: 200px;
  min-height: 200px;
}
.mypost {
  min-height: 200px;
}
</style>