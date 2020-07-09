<template>
  <div>
    <div class="main-body">
      <nuxt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    menutoggle() {
      return this.$store.state.frontmenu.html
    },
    bodyClass() {
      return this.$store.state.frontmenu.bodyClass
    }
  },
  head() {
    return {
      htmlAttrs: {
        class: 'animated-banner' + this.menutoggle
      },
      bodyAttrs: {
        class: 'animated-banner' + this.bodyClass
      },
      link: [
        {
          hid: 'bootstrap',
          rel: 'stylesheet',
          href: '/assets/css/bootstrap.min.css'
        },
        {
          hid: 'flaticon',
          rel: 'stylesheet',
          href: '/assets/css/font/flaticon.css'
        },
        {
          hid: 'flaticn',
          rel: 'stylesheet',
          href: '/assets/font/flaticon.css'
        },
        {
          hid: 'slick',
          rel: 'stylesheet',
          href: '/assets/css/slick.css'
        },
        {
          hid: 'magnific',
          rel: 'stylesheet',
          href: '/assets/css/magnific-popup.css'
        },
        {
          hid: 'animate',
          rel: 'stylesheet',
          href: '/assets/css/animate.css'
        },
        {
          hid: 'style',
          rel: 'stylesheet',
          href: '/assets/css/style.css'
        },
        {
          hid: 'responsive',
          rel: 'stylesheet',
          href: '/assets/css/responsive.css'
        },
        {
          hid: 'font1',
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&amp;display=swap'
        },
        {
          hid: 'font2',
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Merriweather:400,700&amp;display=swap'
        },
        {
          hid: 'mail',
          rel: 'stylesheet',
          href: '//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css'
        }
      ],
      script: [
        {
          hid: 'fontawesome',
          src: '/front/js/fontawesome.js',
          body: true
        }
      ]
    }
  }
}
</script>
<style>
a,
a:not([href]) {
  color: #0070ba;
  text-decoration: none !important;
  transition: 0.5s !important;
}
a:not([href]):hover,
a:not([href]):focus,
a:focus,
a:hover {
  color: #0070ba;
  text-decoration: none !important;
  transition: 0.5s !important;
}
</style>
