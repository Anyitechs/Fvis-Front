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
                <h1 class="text-custom-white lh-default fw-600">Talent Devlopment</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white">Services |&nbsp;</li>
                  <li class="text-custom-white active">Talent Development</li>
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
          <Servicesaside />
          <div class="col-lg-8">
            <div class="blog-detail padding-20">
              <!-- article -->
              <div class="post-wrapper">
                <div class="blog-meta">
                  <h2>
                    <a class="text-custom-black fw-600">Talent Development</a>
                  </h2>
                  <img class="img-fluid" src="/assets/images/services/talent.jpeg" />
                  <p class="text-light-white">
                    Keep your business three steps ahead with our bespoke
                    talent development programs. By providing your organization with new skills and learning
                    opportunities, you increase overall efficiency that stimulates company growth to maintain your
                    competitive advantage.
                  </p>
                  <p class="text-light-white">
                    New Talent Discovery
                    FVIS Nigeria constantly searches for new talent across all industries to first develop their
                    unique ideas or talents, and then find the perfect job opportunity or partnership that matches
                    their skills. Whether the music industry, technology field or the arts, our team are experts at
                    locating and curating top talent.
                    <br />Employee Training
                    A multitude of surveys has proven the importance of individual development over an increase in
                    salary. And a company that provides ongoing professional development to their employees not only
                    enhance their overall effectiveness but builds a strong leadership pipeline for the immediate
                    future success of their company.
                    <br />Employees that build their capabilities and skillsets see themselves as advancing in the
                    company in their individual career paths. A fully developed workforce helps your company to be
                    more competitive while your employees become increasingly engaged, more productive and loyal.
                    <br />FVIS INVESTMENT LTD is a recognized leader in rolling out successful talent development
                    programs. By performing an initial assessment to ascertain the current condition of your teams, we
                    identify opportunities that will exponentially improve employee engagement and retention.
                    <br />To fulfil our ongoing commitment in providing your company with a solid return on investment,
                    we implement customized, measurable solutions that build your employees’ talent in direct
                    correlation to your companies growth requirements.
                    <br />The key to development is to gain more in-depth insight into every employee’s current
                    capability, pinpoint their gaps and then provide meaningful development activities to address
                    shortcomings. FVIS INVESTMENT LTD selects training modules from our extensive library of
                    self-insight and proven assessments that gives each participant a powerful development experience.
                    <br />Our coaching methodology is based on building lasting relationships, driven by assessment and
                    measured based on the outcome. We combine an objective process-oriented approach to effect
                    behavior transformation with the experience that can only come from years of leadership coaching.
                    <br />Contact FVIS now and leverage our extensive content and training library to start providing
                    your teams and company with unique solutions.
                  </p>
                </div>
              </div>
              <!-- article -->
              <hr />
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
      title: 'Talent Development - Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Keep your business three steps ahead with our bespoke talent development programs.'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
