<template>
  <div class="main-body">
    <div class="header">
      <NuxtLink to="/" class="logo">
        <img src="assets/images/logo.png" alt="logo" />
      </NuxtLink>
      <a href="https://web.facebook.com/peter.ozeze" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>
      <div class="divider"></div>
      <a href="https://twitter.com/FvisLtd" target="_blank">
        <i class="fab fa-twitter"></i>
      </a>
      <NuxtLink to="/">
        <i class="fas fa-arrow-left"></i>
      </NuxtLink>
    </div>
    <div class="ghost">
      <span class="text">404</span>
      <div class="eye"></div>
      <div class="eye two"></div>
      <div class="mouth"></div>
      <div class="corner"></div>
      <div class="corner two"></div>
      <div class="corner three"></div>
      <div class="corner four"></div>
      <div class="over"></div>
      <div class="over two"></div>
      <div class="over three"></div>
      <div class="over four"></div>
      <div class="shadow"></div>
    </div>
    <div class="main">
      <div class="error">error</div>
      <h2>Page not found</h2>
      <h6 class="text-custom-white">
        The page you are looking for might have been removed, had its name changed,
        <br />or is temporarily unavailable.
      </h6>
    </div>
  </div>
</template>
<script>
export default {
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
