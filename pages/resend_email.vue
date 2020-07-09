<template>
  <div class="row d-flex justify-content-center pt-5 mt-5">
    <div class="col-12 col-xl-4">
      <div class="card">
        <div class="card-body text-center">
          <h4 class="mb-0 redial-font-weight-400">Please Sign In</h4>
        </div>
        <div class="redial-divider"></div>
        <div class="card-body py-4 text-center">
          <NuxtLink to="/">
            <img src="/logo.png" alt="FvisNg" class="img-fluid mb-4 w-50" />
          </NuxtLink>
          <form @submit.prevent="submitlogin">
            <div class="form-group">
              <input
                v-model="email"
                :disabled="form.disabled"
                type="text"
                class="form-control"
                placeholder="E-Mail"
              />
            </div>
            <button
              type="submit"
              class="btn btn-primary btn-md redial-rounded-circle-50 btn-block"
            >{{ form.submitbutton }}</button>

            <div class="redial-divider my-4"></div>

            <a
              @click="fling"
              class="btn btn-success btn-md redial-rounded-circle-50 btn-block text-white"
            >Login</a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: ['auth'],
    layout: 'auth',
    head() {
      return {
        title: 'Resend Verification - Fvis Nig',
        meta: [
          {
            hid: 'description', name: 'description', content: 'Resend verification link to activate your account.'
          }
        ]
      }
    },
    data() {
      return {
        form: {
          disabled: true,
          submitbutton: 'Resend Activation Link'
        }
      }
    },
    async asyncData({ $auth }) {
      return { email: $auth.user.email }
    },
    methods: {
      async submitlogin() {
        if (this.email !== this.$auth.user.email) {
          this.popToast('Error Occured', 'Action not allowed.')
        } else {
          this.form.submitbutton = 'Loading...'
          try {
            const tech = await this.$axios.$get(
              'https://resource.fvisng.com/api/auth/email/resend'
            )
            if (tech.message == 'Already verified') {
              this.popToast('Verification Successful', 'Email already verified')
              setTimeout(() => this.$router.push('/login'), 5000)
            } else if (tech.message == 'Email Sent') {
              this.popToast(
                'Email sent',
                'Email with verification link has been sent to ' + this.email
              )
              this.form.submitbutton = 'Resend Activation Link'
            }
          } catch (e) {
            this.popToast(
              'Too many attempts',
              'Our system has detected too many attempts to send verification link, kindly try again later.'
            )
            this.form.submitbutton = 'Resend Activation Link'
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
      },
      fling() {
        this.$auth.logout()
        this.$router.push('/login')
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
