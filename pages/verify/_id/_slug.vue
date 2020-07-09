<template>
  <div class="row d-flex justify-content-center pt-5 mt-5">
    <b-overlay :show="show" rounded="sm">
      <div class="col-12 col-xl-4">
        <div class="card">
          <div class="card-body text-center">
            <h4 class="mb-0 redial-font-weight-400">Resend Verification Link</h4>
          </div>
          <div class="redial-divider"></div>
          <div class="card-body py-4 text-center">
            <NuxtLink to="/">
              <img src="/logo.png" alt="FvisNg" class="img-fluid mb-4 w-50" />
            </NuxtLink>
            <form @submit.prevent="submitlogin">
              <div class="form-group">
                <input v-model="form.email" type="text" class="form-control" placeholder="E-Mail" />
              </div>
              <button
                type="submit"
                class="btn btn-primary btn-md redial-rounded-circle-50 btn-block"
              >{{ form.submitbutton }}</button>
            </form>
          </div>
        </div>
      </div>
    </b-overlay>
  </div>
</template>

<script>
  import { BToast } from 'bootstrap-vue'
  export default {
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
          submitbutton: 'Resend'
        },
        show: false
      }
    },
    computed: {
      params() {
        return this.$route.params
      }
    },
    validate({ params }) {
      return /^\d+$/.test(params.id)
    },
    async asyncData({ $auth }) {
      if($auth.user) {
        return { email: $auth.user.email }
      } else {
        return { email: '' }
      }

    },
    async beforeMount() {
      this.show = true
      try {
        const status = await this.$axios.$get(
          'https://resource.fvisng.com/api/auth/email' + this.$route.fullPath
        )
        if (status.message == 'Successfully verified') {
          this.$router.push('/user/dashboard')
        } else if (status.message == 'Already verified') {
          this.$router.push('/user/dashboard')
        }
        this.show = false
      } catch (err) {
        if (!err) {
          this.popToast(
            'An error occured',
            'An error occured while trying to verify your account, kindly try again.'
          )
        } else {
          if (err.response.data.message == 'Invalid signature.') {
            this.popToast(
              'Invalid/Expired Signature!',
              'Invalid/Expired email verification link, kindly click on resend to get a new link.'
            )
          } else if (err.response.data.message == 'Too Many Attempts.') {
            this.popToast(
              'Too many attempts!',
              'Our system has detected too many attempts to verify your link, kindly hold on for a while and try again.'
            )
          }
        }
        this.show = false
      }
    },
    methods: {
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

<style>
</style>
