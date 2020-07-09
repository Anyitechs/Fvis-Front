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
    <div v-else v-for="post in posts" :key="post.id">
      <div class="sub-header p-relative">
        <div class="overlay overlay-bg-black"></div>
        <div class="pattern"></div>
        <div class="section-padding">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="sub-header-content p-relative">
                  <h1 class="text-custom-white lh-default fw-600">{{ post.title }}</h1>
                  <ul class="custom">
                    <li>
                      <NuxtLink to="/news" class="text-custom-white">{{ post.category.name }}</NuxtLink>
                    </li>
                    <li class="text-custom-white text-white active">{{ post.title }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="section-padding bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="blog-detail padding-20">
                <!-- article -->
                <article class="post">
                  <div class="post-wrapper">
                    <div class="blog-meta">
                      <div class="post-meta-box">
                        <div class="post-meta mb-xl-20">
                          <div class="author-img">
                            <img src="/news/nophoto.jpg" class="rounded-circle" alt="image" />
                          </div>
                          <div class="author-meta">
                            <h6 class="no-margin">
                              <span
                                class="text-custom-black"
                              >{{ post.user.first_name + ' ' + post.user.last_name }}</span>
                            </h6>
                            <p class="no-margin text-light-grey">
                              <NuxtLink to="/news" class="text-light-grey">{{ post.category.name }}</NuxtLink>
                              | {{ post.created_at | moment("from", "now") }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-html="post.body"></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  data() {
    return {
      posts: [],
      show: 0
    }
  },
  async fetch() {
    const posts = await fetch(
      `https://resource.fvisng.com/api/post/${this.$route.params.slug}`
    ).then(res => res.json())
    this.posts = this.posts.concat(posts.data)
  }
  // async fetch() {
  //   const post = await this.$axios.$get(
  //     `https://resource.fvisng.com/api/post/${this.$route.params.slug}`
  //   )
  //   if (post.success) {
  //     this.post = post.data
  //     this.show = 1
  //   } else if (!post.success) {
  //     this.$nuxt.error({ statusCode: 404, message: post.error })
  //   }
  // }
}
</script>

<style>
</style>