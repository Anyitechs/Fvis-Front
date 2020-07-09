<template>
  <div>
    <Header/>
    <div class="sub-header p-relative">
      <div class="overlay overlay-bg-black"></div>
      <div class="pattern"></div>
      <div class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="sub-header-content p-relative">
                <h1 class="text-custom-white lh-default fw-600">Personal Loans</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white">Services |&nbsp;</li>
                  <li class="text-custom-white active">Personal Loans</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="blog-detail padding-20">
              <!-- article -->
              <div class="post-wrapper">
                <div class="blog-meta">
                  <h2><a class="text-custom-black fw-600">Personal Loans</a></h2>
                  <p class="text-light-white">Take advantage of our personal loans and reach your financial
                    goals now! Whether funding a home renovation, splurging on a holiday, or consolidating debt,
                    our flexible options will provide the perfect solution.</p>
                  <p class="text-light-white">
                    Take advantage of our personal loans and reach your financial goals now! Whether funding a home
                    renovation, splurging on a holiday, or consolidating debt, our flexible options will provide the
                    perfect solution.
                    <br/>Our FVIS personal loan’s team is on call to analyze your individual circumstances and make
                    the best recommendation for your specific needs.
                    <br/>No need to wait to fulfil your dreams, let FVIS INVESTMENT LTD provide the perfect customized
                    personal loan with a repayment plan that fits your budget.
                  </p>
                </div>
              </div>
              <!-- article -->
              <hr>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<script>
  import Header from '~/components/frontend/Header'
  import Footer from '~/components/frontend/Footer'

  export default {
    components: {
      Header, Footer
    },
    head() {
      return {
        title: 'Personal Loans - Services',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Take advantage of our personal loans and reach your financial goals now! Whether funding a home renovation, splurging on a holiday, or consolidating debt, our flexible options will provide the perfect solution.'
          }
        ]
      }
    },
    beforeMount() {
      this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
    }
  }
</script>
