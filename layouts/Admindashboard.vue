<template>
  <div>
    <Header />
    <nuxt keep-alive />
  </div>
</template>

<script>
import Header from '~/components/admindash/Header'
export default {
  components: {
    Header
  },
  head() {
    return {
      link: [
        {
          hid: 'plugins',
          rel: 'stylesheet',
          href: '/dash/css/plugins.min.css'
        },
        {
          hid: 'main',
          rel: 'stylesheet',
          href: '/dash/css/main.min.css'
        }
      ],
      script: [
        {
          hid: 'fontawesome',
          src: '/front/js/fontawesome.js',
          body: true
        },
        {
          hid: 'vue-devtools',
          src: 'http://localhost:8098',
          body: true
        }
      ]
    }
  }
}
</script>

<style>
body {
  background: #f6fafb;
  margin: 0px;
  padding: 0px;
  color: #676767 !important;
  font-family: 'Lato', sans-serif;
  font-size: 0.875rem !important;
  line-height: 1.75rem !important;
}
</style>
