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
                <h1 class="text-custom-white lh-default fw-600">Login</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white active">Login</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding-bottom user-info-details">
      <div class="container">
        <div class="row">
          <div class="offset-lg-3 col-lg-6">
            <div class="user-info-tabs">
              <div id="add-user-tab" class="step-app">
                <div class="step-content">
                  <div class="step-tab-panel active" id="step-1">
                    <div class="step-tab-inner">
                      <div class="heading text-center">
                        <h4 class="text-custom-black fw-600">Login</h4>
                        <p class="text-custom-black">
                          Complete the form below to login.
                        </p>
                      </div>
                      <form @submit.prevent="submitlogin">
                        <div class="row">
                          <div class="col-12">
                            <div class="form-group">
                              <label class="text-custom-black fs-14 fw-600">Email</label>
                              <input
                              v-model="form.email"
                                type="text"
                                class="form-control form-control-custom"
                                placeholder="Enter Your e-Mail"
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <label class="text-custom-black fs-14 fw-600">Passowrd</label>
                              <input
                              v-model="form.password"
                                type="password"
                                class="form-control form-control-custom"
                                placeholder="Enter Your Password"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                            <button data-direction="next" class="btn-first btn-submit-fill">{{ form.submitbutton }}</button>
                            <p class="fw-600 mt-2 fs-13 text-center mt-4">Don't have an account? <NuxtLink to="/register">REGISTER NOW</NuxtLink></p>
                        </div>
                      </form>
                    </div>
                  </div>
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
export default {
  components: { Header, Footer },
  middleware: 'guest',
  data() {
    return {
      form: {
        email: '',
        password: '',
        submitbutton: 'Login'
      }
    }
  },
  head() {
    return {
      title: 'Login - Fvis Nig',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Log in using the email address and password you registered with.'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  },
  methods: {
    async submitlogin() {
      this.form.submitbutton = 'Loading...'
      try {
        const tech = await this.$auth.loginWith('local', {
          data: this.form
        })
        if (this.$auth.hasScope('admin')) {
          this.$router.push('/admin')
        } else if (this.$auth.hasScope('user')) {
          window.Tawk_API.setAttributes({
            name: this.$auth.user.first_name + this.$auth.user.last_name,
            email: this.$auth.user.email
          })
          if (this.$auth.user.email_verified_at == null) {
            this.$router.push('/resend_email')
          } else {
            this.$router.push('/user/dashboard')
          }
        }
      } catch (e) {
        if (!e) {
          this.popToast('Login error!', 'An error occured. Kindly try again.')
          this.form.submitbutton = 'Login'
        } else if (e) {
          if (e.status == 422)
            this.popToast('Login error!', 'Incorrect Email/Password')
          this.form.submitbutton = 'Login'
        }
      }
    },
    popToast(title, message) {
      // Use a shorter name for this.$createElement
      const h = this.$createElement
      // Increment the toast count
      // Create the message
      const vNodesMsg = h('p', { class: ['text-center', 'mb-0'] }, [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        h('strong', ' ' + message + ' '),
        h('b-spinner', { props: { type: 'grow', small: true } })
      ])
      // Create the title
      const vNodesTitle = h(
        'div',
        { class: ['d-flex', 'flex-grow-1', 'align-items-baseline', 'mr-2'] },
        [
          h('strong', { class: 'mr-2' }, title),
          h('small', { class: 'ml-auto text-italics' }, 'Just Now')
        ]
      )
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: true,
        variant: 'danger'
      })
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/custom.scss';
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
