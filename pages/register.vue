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
                        <h4 class="text-custom-black fw-600">Register</h4>
                        <p class="text-custom-black">Complete the form below to register.</p>
                      </div>
                      <form @submit.prevent="registration">
                        <div class="row">
                          <div class="col-6">
                            <div class="form-group">
                              <label class="text-custom-black fs-14 fw-600">First Name</label>
                              <input
                                v-model="form.first_name"
                                type="text"
                                class="form-control form-control-custom"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label class="text-custom-black fs-14 fw-600">Last Name</label>
                              <input
                                v-model="form.last_name"
                                type="text"
                                class="form-control form-control-custom"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-group">
                              <label class="text-custom-black fs-14 fw-600">Email</label>
                              <input
                                v-model="form.email"
                                type="email"
                                class="form-control form-control-custom"
                                placeholder="Enter e-Mail"
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label class="text-custom-black fs-14 fw-600">Passowrd</label>
                              <input
                                v-model="form.password"
                                type="password"
                                class="form-control form-control-custom"
                                placeholder="Enter Password"
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label class="text-custom-black fs-14 fw-600">Confirm Passowrd</label>
                              <input
                                v-model="form.password_confirmation"
                                type="password"
                                class="form-control form-control-custom"
                                placeholder="Re-enter Password"
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label class="text-custom-black fs-14 fw-600">Phone Number</label>
                              <input
                                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                v-model="form.phone_number"
                                type="number"
                                class="form-control form-control-custom"
                                placeholder="e.g 08030000000"
                                maxlength="11"
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label class="text-custom-black fs-14 fw-600">Gender</label>
                              <select
                                class="form-control form-control-custom"
                                v-model="form.gender"
                              >
                                <option value selected disabled>-- SELECT</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <button
                            data-direction="next"
                            class="btn-first btn-submit-fill"
                          >{{ RegisterButton }}</button>
                          <p class="fw-600 mt-2 fs-13 text-center mt-4">
                            Already have an account?
                            <NuxtLink to="/login">LOGIN</NuxtLink>
                          </p>
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
  head() {
    return {
      title: 'Register - Fvis Nig',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Sign up for your account. By signing up, you confirm that you have ...'
        }
      ]
    }
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    // 15th two months prior
    const minDate = new Date(today)
    minDate.setMonth(minDate.getMonth() - 2)
    minDate.setDate(15)
    // 15th in two months
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() - 216)
    maxDate.setDate(15)
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: '',
        password_confirmation: '',
        gender: ''
      },
      max: maxDate.toString(),
      RegisterButton: 'Register'
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  },
  methods: {
    async registration() {
      this.RegisterButton = 'Loading...'
      if (
        !this.form.first_name ||
        !this.form.last_name ||
        !this.form.email ||
        !this.form.phone_number ||
        !this.form.gender
      ) {
        this.popToast(
          'Registration error!',
          'Kindly complete all the required fields correctly'
        )
        this.RegisterButton = 'Register'
      } else {
        try {
          const register = await this.$axios.$post(
            'https://resource.fvisng.com/api/auth/register',
            {
              first_name: this.form.first_name,
              last_name: this.form.last_name,
              email: this.form.email,
              phone_number: this.form.phone_number,
              password: this.form.password,
              password_confirmation: this.form.password_confirmation,
              gender: this.form.gender
            }
          )
          if (register.success == true) {
            this.RegisterButton = 'Register'
            this.Registered()
            this.$router.push('/resend_email')
          }
          if (register.error.email) {
            this.popToast('Registration error!', register.error.email[0])
          } else if (register.error.phone_number) {
            this.popToast('Registration error!', register.error.phone_number[0])
          } else if (register.error.password) {
            this.popToast('Registration error!', register.error.password[0])
          }
          this.RegisterButton = 'Register'
        } catch (e) {}
      }
    },
    Registered(variant = 'success') {
      this.$bvToast.toast('Your Registration was Successful', {
        title: 'Registration Successful',
        variant: variant,
        solid: true
      })
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

<style lang="scss" scoped>
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
