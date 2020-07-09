<template>
  <div class="wrapper">
    <div class="w-100">
      <nuxt />
    </div>
  </div>
</template>
</template>

<script>
export default {
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
      ]
    }
  }
}
</script>

<style>
</style>