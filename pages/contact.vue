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
                <h1 class="text-custom-white lh-default fw-600">Contact Us</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding bg-gray contact-us">
      <div class="container">
        <div class="row">
          <div class="col-xl-5 col-lg-4 mb-md-80">
            <div class="contact-form full-height align-self-center bx-wrapper bg-custom-white">
              <h4 class="text-custom-black fw-600">Get In Touch</h4>
              <p
                class="text-light-white no-margin"
              >Reach out to us & we will respond as soon as we can.</p>
              <form class="form-layout-1" @submit.prevent="submit">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="text-left">First Name</label>
                      <input v-model="form.first_name" type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <div class="form-group">
                      <label class="text-left">Last Name</label>
                      <input v-model="form.last_name" type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="col-12 mb-xl-20">
                    <div class="form-group">
                      <label class="text-left">Email Address</label>
                      <input v-model="form.email" type="email" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label class="text-left">Message</label>
                      <textarea v-model="form.message" rows="5" class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      type="submit"
                      class="btn-first btn-submit text-light-blue full-width"
                    >{{ form.submit }}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-xl-7 col-lg-8">
            <iframe
              class="full-width full-height"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7135292066596!2d3.3648501147708902!3d6.557801395257022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d8fb6300eef%3A0x2320c8126a34d624!2s256%20Ikorodu%20Rd%2C%20Ilupeju%2C%20Lagos!5e0!3m2!1sen!2sng!4v1587142826496!5m2!1sen!2sng"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <section class="section-padding bg-gray contact-bottom">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="contact-info bx-wrapper bg-custom-white text-center mb-md-40">
              <div class="contact-info-wrapper">
                <div class="icon mb-xl-20">
                  <i class="flaticon-telephone"></i>
                </div>
                <h5 class="text-custom-black fw-600">Phone</h5>
                <p class="text-light-white">You can call us on</p>
                <a href="tel:2347061535474" class="fs-14">+234 706 153 5474</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="contact-info bx-wrapper bg-custom-white text-center mb-md-40">
              <div class="contact-info-wrapper">
                <div class="icon mb-xl-20">
                  <i class="flaticon-email"></i>
                </div>
                <h5 class="text-custom-black fw-600">Email</h5>
                <p class="text-light-white">Reach out to us via mail</p>
                <a href="mailto:info@fvisng.com" class="fs-14">info@fvisng.com</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="contact-info bx-wrapper bg-custom-white text-center">
              <div class="contact-info-wrapper">
                <div class="icon mb-xl-20">
                  <i class="flaticon-pin"></i>
                </div>
                <h5 class="text-custom-black fw-600">Location</h5>
                <p class="text-light-white">Lagos Office</p>
                <span class="fs-14">
                  256, Ikorodu Road,
                  Obanikoro, Lagos, Nigeria.
                </span>
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
export default {
  components: {
    Header,
    Footer
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        submit: 'Submit'
      }
    }
  },
  head() {
    return {
      title: 'Contact - Fvis Ng',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'For support, please send an email to info@fvisng.com or call us on +234 (0)706 153 5474. For partnership information, please send an email to'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  },
  methods: {
    async submit() {
      if (
        !this.form.first_name ||
        !this.form.last_name ||
        !this.form.email ||
        !this.form.message
      ) {
        this.$Toast('Contact Form', 'Kindly complete all fields.')
      } else {
        this.form.submit = 'Submitting...'
        const sub = await this.$axios.$post(
          'https://resource.fvisng.com/api/user/contactus',
          {
            first_name: this.form.first_name,
            last_name: this.form.last_name,
            email: this.form.email,
            message: this.form.message
          }
        )
        if (sub.success == true) {
          this.$Toast(
            'Contact Form',
            'Your Message was successfully sent, you will get a response from us within 24hours.',
            'success'
          )
          this.form.submit = 'Submit'
        } else {
          this.$Toast(
            'Contact Form',
            'An error occured while trying to submit your message, kindly try again.',
            'danger'
          )
          this.form.submit = 'Submit'
          console.log(sub)
        }
      }
    }
  }
}
</script>

<style>
</style>
