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
          <ServicesAside/>
          <div class="col-lg-8">
            <div class="blog-detail padding-20">
              <!-- article -->
              <div class="post-wrapper">
                <div class="blog-meta">
                  <h2>
                    <a class="text-custom-black fw-600">Charity</a>
                  </h2>
                  <img class="img-fluid" src="/assets/gallery-img/2020/05/1588676268eIpQi19.jpg"/>
                  <p class="text-light-white">
                    Let FVIS INVESTMENT LTD facilitate your charitable ventures by
                    streamlining access to the world's best NGOs. We help you help the world by assisting in raising
                    funds, as well as the fair disbursement of all monies.
                  </p>
                  <div class="text-light-white">
                    Corporate Social Responsibility (CSR) is an essential component of your business, but over and above
                    your regular business practices, it could become a cumbersome task.<br><br>
                    Let FVIS INVESTMENT LTD facilitate your charitable ventures by streamlining access to the world's
                    best NGOs. We help you help the world by assisting in raising funds, as well as the fair dis-
                    bursement of all donations.<br><br>
                    Making monetary donations to various deserving causes is the most popular form of CSR, and most
                    companies pledge to donate a percentage of their earnings each year to charitable causes.<br><br>
                    FVIS INVESTMENT LTD brings businesses and non-profit organizations (NGOs) together to solve the most
                    pressing social challenges while facilitating all the administrative processes.<br><br>
                    We believe in the value of NGOs and want to assist your organization in reaching beyond conven-
                    tional approaches and access assistance to achieve a more significant impact.<br><br>
                    Your business might also receive requests for donations every day, but managing all those requests
                    is not only overwhelming but time-consuming. FVIS INVESTMENT LTD streamlines all of your do- nation
                    processes so that you can easily manage your CSR.<br><br>
                    <blockquote>OUR MISSION IS TO ENSURE THAT CHARITIES RECEIVE THE APPROPRIATE AMOUNT OF FUNDING TO ENABLE THEM TO
                    INCREASE THEIR IMPACT IN THEIR COMMUNITY SIGNIFICANTLY. WE CONTINUOUSLY FIND WAYS TO COMBINE OUR
                  EFFORTS WITH A GROWING NETWORK OF RESOURCES TO SUPPORT NGOS IN ACCOMPLISHING MORE.</blockquote><br><br>
                    <strong>Become part of the FVIS family and watch how your contributions transform
                      communities.</strong>
                    <div class="row">
                      <div class="col text-center btn btn-info">
                        <NuxtLink to="/contact" class="text-white">CONTACT US</NuxtLink></div>
                      <div class="col text-center btn btn-warning" v-b-modal.letuscontact>LET US CONTACT YOU</div>
                      <div class="col text-center btn btn-secondary">APPLY AS A VOLUNTEER</div>
                    </div>
                    <b-modal id="letuscontact" size="lg" title="Complete the fields" hide-footer>
                      <form @submit.prevent="submitForm">
                        <div class="row">
                          <div class="col-12 col-md-7 offset-md-2">
                            <div class="form-group">
                              <input type="text" class="form-control" placeholder="Full Name">
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control" placeholder="Phone Number">
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control" placeholder="e-Mail">
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control" placeholder="Address">
                            </div>
                            <div class="form-group">
                              <input type="text" class="form-control" placeholder="Area of interest">
                            </div>
                            <button class="btn btn-primary">{{ formsubmit }}</button>
                          </div>
                        </div>
                      </form>
                    </b-modal>
                  </div>
                </div>
              </div>
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
  import ServicesAside from '~/components/frontend/ServicesAside.vue'

  export default {
    components: {
      Header,
      Footer,
      ServicesAside
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          phoneNumber: '',
          address: '',
          areaOfInterest: ''
        },
        formsubmit: 'Submit'
      }
    },
    head() {
      return {
        title: 'Charity - Services',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content:
              'Let FVIS INVESTMENT LTD facilitate your charitable ventures by streamlining access to the world\'s best NGOs. We help you help the world by assisting in raising funds, as well as the fair disbursement of all monies.'
          }
        ]
      }
    },
    beforeMount() {
      this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
    },
    methods: {
      async submitForm() {
        this.submit = 'Submitting...'
        if(!this.form.name || !this.form.phoneNumber || !this.form.email || !this.form.address) {
          this.$Toast('Form Submission', 'Kindly complete all fields and try again!')
        } else {
          const submitform = await this.$axios.$post('/charity', this.form)
          if(submitform.success) {
            this.Toast('Form Submission', 'Thank you for completing the contact form, we will reach out to you as soon as possible.')
            this.$bvModal.hide('letuscontact')
          }
        }

      }
    }
  }
</script>
