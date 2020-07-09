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
                <h1 class="text-custom-white lh-default fw-600">Real Estate</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white">Services |&nbsp;</li>
                  <li class="text-custom-white active">Real Estate</li>
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
              <div class="post-wrapper">
                <div class="blog-meta">
                  <h2>
                    <a class="text-custom-black fw-600">Real Estate</a>
                  </h2>
                  <img class="img-fluid" src="/assets/images/services/Real-estate.jpg" />
                  <p class="text-light-white">
                    Rely on our expert management services to provide superior
                    quality investment opportunities, ideally suited to your specific business needs.
                  </p>
                  <p class="text-light-white">
                    Because we consider you and your business’ goals to develop a solution that perfectly suits your
                    demands, you can rely on our expert management services to provide bespoke, superior quality
                    investment opportunities – no matter your requirements.
                    <br />Our comprehensive service offering covers the entire spectrum of real estate investment to
                    include site evaluations and selections, planning, as well as the execution of strategies:
                    acquisition, disposition, re-entitlement, planning, and development, as well as the actual funding
                    of your project and managing the property after development is concluded.
                    <br />Whether your real estate development project is big or small, our expert consultants treat
                    every client with the same respect and apply the same sense of urgency to all aspects of every,
                    single project.
                    <br />And while in general, property development is a long term investment that only generates
                    returns after an extended period, entrusting FVIS with your entire project promises quicker
                    returns at a much earlier stage than industry standards.
                    <br />Executing a successful development project and managing an entire property portfolio requires
                    specific expertise and dedication. FVIS INVESTMENT LTD takes care of every last detail while
                    keeping you updated every step of the way. By partnering with us, you minimize your overall risk
                    to reach your business goals faster.
                    <br />Join forces with FVIS INVESTMENT LTD and gain access to a compendium of experts in their
                    respective fields: Investors, contractors, engineers, banks, lenders, financial experts, and other
                    professional individuals. These professionals have all joined forces with us to the greater
                    benefit of all FVIS members.
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
      title: 'Real Estate - Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Rely on our expert management services to provide superior quality investment opportunities, ideally suited to your specific business needs.'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
