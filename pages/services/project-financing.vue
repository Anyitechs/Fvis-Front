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
                <h1 class="text-custom-white lh-default fw-600">Project Financing</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white">Services |&nbsp;</li>
                  <li class="text-custom-white active">Project Financing</li>
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
                    <a class="text-custom-black fw-600">Project Financing</a>
                  </h2>
                  <img class="img-fluid" src="/assets/images/services/project_financing.jpeg" />
                  <p class="text-light-white">
                    Our consultants develop sustainable, flexible, and
                    uniquely structured project financing solutions that meet your exact needs.
                  </p>
                  <p class="text-light-white">
                    Because, although the world is rife with a host of lucrative opportunities for bold
                    entrepreneurs, the funding to support these incredible visions can be hard to obtain.
                    <strong>
                      FVIS
                      INVESTMENT LTD
                    </strong> refuses to allow inadequate funding to stop entrepreneurs from realizing the
                    potential of their dreams, especially large scale projects that promise positive transformational
                    effects on both the local and global economy.
                    <br />By combining our in-depth industry knowledge, financial expertise and risk management
                    experience, we make sure that both developers and communities benefit from investment in critical
                    infrastructure projects.
                    <br />There is no substitute for top expertise to tackle the challenges of international project
                    development. FVIS Nigeria appreciates the critical role that properly structured financing plays
                    in the success of every project, well before the actual construction starts, and long into the
                    first years of operations.
                    <br />Our expert team provides the structure for your specific project requires to excel in every
                    phase of development, to ensure you meet both your short- and long-term financial goals while
                    achieving a handsome return on investment to continue driving the growth of all your other
                    initiatives forward.
                    <br />No matter the requirements of your project, our collective and extensive global investment
                    experience, coupled with in-depth industry knowledge, is the key to providing your next venture
                    with the solid foundation it deserves.
                    <br />Approach
                    <strong>FVIS INVESTMENT LTD</strong> and enjoy unsurpassed professionalism from a company that is
                    perfectly equipped to bring your visions to life – globally.
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
      title: 'Project Financing - Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Our consultants develop sustainable, flexible, and uniquely structured project financing solutions that meet your exact needs.'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
