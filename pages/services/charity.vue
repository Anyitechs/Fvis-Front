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
                <h1 class="text-custom-white lh-default fw-600">Charity</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white">Services |&nbsp;</li>
                  <li class="text-custom-white active">Charity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding bg-gray our-articles">
      <div class="container">
        <div class="row">
          <ServicesAside />
          <div class="col-lg-8">
            <div class="blog-detail padding-20">
              <!-- article -->
              <div class="post-wrapper">
                <div class="blog-meta">
                  <h2>
                    <a class="text-custom-black fw-600">Charity</a>
                  </h2>
                  <img class="img-fluid" src="/assets/gallery-img/2020/05/1588676268eIpQi19.jpg" />
                  <p class="text-light-white">
                    Let FVIS INVESTMENT LTD facilitate your charitable ventures by
                    streamlining access to the world's best NGOs. We help you help the world by assisting in raising
                    funds, as well as the fair disbursement of all monies.
                  </p>
                  <p class="text-light-white">
                    Corporate Social Responsibility (CSR) is an essential component of your business, but over and
                    above your regular business practices, it could become a cumbersome task.
                    <br />Making monetary donations to various deserving causes is the most popular form of CSR, and
                    most companies pledge to donate a percentage of their earnings each year to charitable causes.
                    <br />FVIS INVESTMENT LTD brings businesses and nonprofit organizations (NGOs) together to solve
                    the most pressing social challenges while facilitating all the administrative processes.
                    <br />We believe in the value of NGOs and want to assist your organization in reaching beyond
                    conventional approaches and access assistance to achieve a more significant impact.
                    <br />Your business might also receive requests for donations every day, but managing all those
                    requests is not only overwhelming but time-consuming. FVIS INVESTMENT LTD streamlines all of your
                    donation processes so that you can easily manage your CSR.
                    <br />Our mission is to ensure that charities receive the appropriate amount of funding to enable
                    them to increase their impact in their community significantly. We continuously find ways to
                    combine our efforts with a growing network of resources to support NGOs in accomplishing more.
                    <br />Become part of the FVIS family and watch how your contributions transform communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/frontend/Header'
import Footer from '~/components/frontend/Footer'
import ServicesAside from '~/components/frontend/ServicesAside.vue'

export default {
  components: {
    Header,
    Footer,
    ServicesAside
  },
  head() {
    return {
      title: 'Charity - Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            "Let FVIS INVESTMENT LTD facilitate your charitable ventures by streamlining access to the world's best NGOs. We help you help the world by assisting in raising funds, as well as the fair disbursement of all monies."
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
