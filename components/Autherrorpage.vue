<template>
  <section class="redial-bg-dark py-5">
    <div class="container">
      <div class="row" v-if="$auth.hasScope('user')">
        <div v-if="error.statusCode === 404" class="col-5 mx-auto">
          <div class="jumbotron mb-0 text-center bg-white rounded">
            <h1 class="display-3 redial-font-weight-800">404</h1>
            <h5>
              <i class="fa fa-warning pr-2"></i>Oops! Something went wrong
            </h5>
            <p>The page you are looking for is not found, please try after some time.</p>
            <NuxtLink to="/user/dashboard" class="btn btn-primary btn-sm">Dashboard</NuxtLink>
          </div>
        </div>
        <div v-else>
          <div class="jumbotron mb-0 text-center bg-white rounded">
            <h1 class="display-3 redial-font-weight-800">500</h1>
            <h5>
              <i class="fa fa-warning pr-2"></i>Oops! Something went wrong
            </h5>
            <p>An error occured, please try after some time.</p>
            <NuxtLink to="/user/dashboard" class="btn btn-primary btn-sm">Dashboard</NuxtLink>
          </div>
        </div>
      </div>
      <div class="row" v-else-if="$auth.hasScope('admin')">
        <div v-if="error.statusCode === 404" class="col-5 mx-auto">
          <div class="jumbotron mb-0 text-center bg-white rounded">
            <h1 class="display-3 redial-font-weight-800">404</h1>
            <h5>
              <i class="fa fa-warning pr-2"></i>Oops! Something went wrong
            </h5>
            <p>The page you are looking for is not found, please try after some time.</p>
            <NuxtLink to="/admin" class="btn btn-primary btn-sm">Dashboard</NuxtLink>
          </div>
        </div>
        <div v-else>
          <div class="jumbotron mb-0 text-center bg-white rounded">
            <h1 class="display-3 redial-font-weight-800">500</h1>
            <h5>
              <i class="fa fa-warning pr-2"></i>Oops! Something went wrong
            </h5>
            <p>An error occured, please try after some time.</p>
            <NuxtLink to="/admin" class="btn btn-primary btn-sm">Dashboard</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
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
        }
      ]
    }
  }
}
</script>

<style>
</style>