<template>
  <div class="error-404">
    <h1>This page doesn’t exist</h1>
    <p>The link you clicked on may be broken or no longer exist.</p>
  </div>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: 'extra-page'
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