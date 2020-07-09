<template>
  <section class="section-padding loan-faqs-sec bg-light-white findrate-top">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6 align-self-center">
          <div class="section-header">
            <div class="section-heading">
              <h3 class="text-custom-black fw-700">Our FAQs</h3>
              <div class="section-description">
                <p class="text-light-white no-margin">
                  Still have questions?
                  <br />Our Client Success Team is always here to help
                </p>
              </div>
            </div>
          </div>
          <div class="loan-faqs-leftside mb-md-80">
            <div class="support-card mb-xl-20">
              <div class="support-user">
                <img src="assets/images/faq-user.png" class="image-fit" alt="img" />
              </div>
              <div class="links text-center mb-xl-20">
                <a href="mailto:support@fvisng.com">support@fvisng.com</a>
                <a href="tel:+2348129661647">+234 812 966 1647</a>
                <a style="color: #0070ba" @click="tawkto">Chat with us</a>
              </div>
            </div>
            <button @click="tawkto" class="btn-first btn-submit-fill">Chat With Us</button>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 align-self-center">
          <div id="accordion" class="faqs-accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <button
                @click="showfaq1"
                  :class="'collapsebtn ' + faq1class"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                >How much can I borrow?</button>
              </div>
              <div id="collapseOne" :class="faq1" data-parent="#accordion">
                <div class="card-body">
                  <p
                    class="text-light-white"
                  >Depending on if you are a member or not. Non members get access to loans from #1,000 to #100,000, While Basic, Platinum and executive members can get #1,000 to &#8358;100,000, and &#8358;101,000 to &#8358;501,000, and &#8358;500,000 to &#8358;2 million respectively.</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <button
                @click="showfaq2"
                  :class="'collapsebtn ' + faq2class"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                >Can I pay off my loan early?</button>
              </div>
              <div id="collapseTwo" :class="faq2" data-parent="#accordion">
                <div class="card-body">
                  <p
                    class="text-light-white no-margin"
                  >Our loan options allows users to pay at minimum of 7 days and maximum of months.</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <button
                @click="showfaq3"
                  :class="'collapsebtn ' + faq3class"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                >Do you offer Project refinancing ?</button>
              </div>
              <div id="collapseThree" :class="faq3" data-parent="#accordion">
                <div class="card-body">
                  <p
                    class="text-light-white"
                  >Members of platinum and executive package have access to finance of up to &#8358;2 million.</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFour">
                <button
                @click="showfaq4"
                  :class="'collapsebtn ' + faq4class"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                >When should I apply?</button>
              </div>
              <div id="collapseFour" :class="faq4" data-parent="#accordion">
                <div class="card-body">
                  <p
                    class="text-light-white"
                  >You can apply anytime on our platform, why wait? you can apply now!.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      faq1: 'collapse',
      faq2: 'collapse',
      faq3: 'collapse',
      faq4: 'collapse',
      faq1class: 'collapsed',
      faq2class: 'collapsed',
      faq3class: 'collapsed',
      faq4class: 'collapsed'
    }
  },
  methods: {
    tawkto() {
      window.Tawk_API.maximize();
    },
    showfaq1() {
      if(this.faq1 == 'collapse') {
        this.faq1 = 'collapse show'
        this.faq1class = ''
        this.faq2 = this.faq3 = this.faq4 = 'collapse'
      } else {
        this.faq1 = 'collapse'
        this.faq1class = 'collapsed'
      }
    },
    showfaq2() {
      if(this.faq2 == 'collapse') {
        this.faq2 = 'collapse show'
        this.faq2class = ''
        this.faq1 = this.faq3 = this.faq4 = 'collapse'
      } else {
        this.faq2 = 'collapse'
        this.faq2class = 'collapsed'
      }
    },
    showfaq3() {
      if(this.faq3 == 'collapse') {
        this.faq3 = 'collapse show'
        this.faq3class = ''
        this.faq1 = this.faq2 = this.faq4 = 'collapse'
      } else {
        this.faq3 = 'collapse'
        this.faq3class = 'collapsed'
      }
    },
    showfaq4() {
      if(this.faq4 == 'collapse') {
        this.faq4 = 'collapse show'
        this.faq4class = ''
        this.faq1 = this.faq2 = this.faq3 = 'collapse'
      } else {
        this.faq4 = 'collapse'
        this.faq4class = 'collapsed'
      }
    }
  }
}
</script>

<style>
</style>