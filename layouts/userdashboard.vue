<template>
  <div>
      <Header />
      <nuxt />
  </div>
</template>

<script>
import Header from '~/components/userdash/Header'
export default {
    components: {
        Header
    },
    head() {
        return {
            link: [
                {
                    hid: 'plugins', rel: 'stylesheet', href: '/dash/css/plugins.min.css'
                },
                {
                    hid: 'main', rel: 'stylesheet', href: '/dash/css/main.min.css'
                }
            ],
          script: [
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

</style>
