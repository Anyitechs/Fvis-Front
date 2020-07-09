<template>
  <section class="section-padding pb-0 exp-cal2">
    <div class="container">
      <div class="section-header">
        <div class="section-heading">
          <h3 class="text-white fw-700">Simple, flexible loans and investment, tailored for you!</h3>
          <div class="section-description">
            <p class="text-light-white"></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="offset-lg-2 col-lg-8">
          <div class="exp-cal2-loan">
            <div class="row" v-if="!showcalc">
              <div class="col-md-5 mb-5">
                <p class="fw-600 text-center">UP TO</p>
                <div class="exp-cal2-input">
                  <input
                    placeholder
                    maxlength="15"
                    class="pl-4"
                    type="text"
                    value="1Million"
                    readonly
                  />
                </div>
                <p class="fw-600 mt-2 fs-13">FROM 30 TO 90 DAYS</p>
                <div class="col-lg-12 text-center">
                  <button @click="showcalc = true" class="btn-first btn-submit-fill">APPLY FOR LOAN</button>
                </div>
              </div>
              <div class="col-md-2 align-self-center"></div>
              <div class="col-md-5">
                <p class="fw-600 text-center exp-cal2-content">EARN UP TO</p>
                <div class="ex-calculate-value">
                  <input type="text" class="pt-3" placeholder="6.1%" readonly />
                  <p class="fw-600 mt-2 fs-13">Monthly</p>
                  <div class="col-lg-12 text-center">
                    <NuxtLink to="/register">
                      <button class="btn-first btn-submit-fill mt-2">INVEST NOW</button>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="row" v-if="showcalc">
              <div class="col-md-5">
                <p class="fw-600 text-center">Loan Amount</p>
                <div class="exp-cal2-input">
                  <input
                    maxlength="15"
                    placeholder="0"
                    type="text"
                    @keypress="isNumber($event)"
                    @change="removeFormat"
                    v-model="amount"
                  />
                </div>
                <p class="fw-600 mt-2 fs-13">Please enter loan amount</p>
              </div>
              <div class="col-md-2 align-self-center">
                <p class="fw-600 mt-2 fs-13">REPAYMENT TERMS</p>

                <select v-model="terms" class="form-control">
                  <option value="" selected disabled>SELECT</option>
                  <option value="5">5 DAYS</option>
                  <option value="14">14 DAYS</option>
                  <option value="28">28 DAYS</option>
                </select>
              </div>
              <div class="col-md-5">
                <p class="fw-600 text-center exp-cal2-content">Repayment Amount</p>
                <div class="tcalculate-value">
                  <input type="text" class="mt-4" v-model="conversion" readonly />
                  <span v-if="conversion">+ {{ interest + '%' }} Interest</span>
                </div>
              </div>
              <div class="col-lg-12 text-center">
                <NuxtLink to="/register">
                  <button class="btn-first btn-submit-fill" :disabled="checkbutton">PERSONAL INFO</button>
                </NuxtLink>
              </div>
              <div class="col-lg-12 text-center mt-3">
                <p
                  class="fw-600 text-center exp-cal2-content"
                ><span style="cursor: pointer" @click="showcalc = false">Back</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const numberFormat = (number, remove = 0) => {
  let stringText
  stringText = parseFloat(number)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,')
  if (stringText.indexOf('.')) {
    return stringText.substr(0, stringText.length - remove)
  } else {
    return stringText
  }
}

const stripCommas = str => {
  if (typeof str !== 'string') str = String(str)
  return parseFloat(str.replace(',', ''))
}

export default {
  data() {
    return {
      amount: 0,
      conversion: 0,
      showcalc: false,
      interest: '',
      terms: ''
    }
  },
  computed: {
    checkbutton() {
      if (!this.conversion || !this.amount || !this.interest || !this.terms) {
        return true
      }
      return false
    }
  },
  methods: {
    isNumber: function(evt) {
      evt = evt ? evt : window.event
      let charCode = evt.which ? evt.which : evt.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    removeFormat() {
      this.amount = numberFormat(stripCommas(this.amount))
    }
  },
  watch: {
    amount: function(val) {
      const amount = stripCommas(this.amount)
      if (amount > 0 && this.terms !== '') {
        if (this.terms == '5') {
          const interest = (amount / 100) * 8
          this.interest = 8
          this.conversion = numberFormat(amount + interest)
        } else if(this.terms == '14') {
            const interest = (amount / 100) * 11
            this.interest = 11
          this.conversion = numberFormat(amount + interest)
        } else if(this.terms == '28') {
            const interest = (amount / 100) * 15
            this.interest = 15
            this.conversion = numberFormat(amount + interest)
        }
      }
    },
    terms: function(val) {
      const amount = stripCommas(this.amount)
      if (amount > 0 && this.terms !== '') {
        if (this.terms == '5') {
          const interest = (amount / 100) * 8
          this.interest = 8
          this.conversion = numberFormat(amount + interest)
        } else if(this.terms == '14') {
            const interest = (amount / 100) * 11
            this.interest = 11
          this.conversion = numberFormat(amount + interest)
        } else if(this.terms == '28') {
            const interest = (amount / 100) * 15
            this.interest = 15
            this.conversion = numberFormat(amount + interest)
        }
      }
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
.tcalculate-value:before {
  content: '₦';
  color: #888;
  font-size: 40px;
  position: absolute;
  padding: 0 10px 0 10px;
  height: 80px;
  display: flex;
  align-items: center;
  font-weight: 500;
}

.tcalculate-value {
  text-align: center;
}
.tcalculate-value {
  max-width: 245px;
  margin-left: auto;
  margin-right: auto;
}
.tcalculate-value h2 {
  color: #0070ba;
  font-family: 'Montserrat', sans-serif;
  margin-top: 30px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
}
.tcalculate-value > input {
  cursor: pointer;
  border: none;
  padding: 0;
  color: #0070ba;
  font-family: 'Montserrat', sans-serif;
  margin-top: -8px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
  width: -webkit-fill-available;
}
.tcalculate-value > a {
  text-decoration: underline;
  padding: 5px 0;
  display: block;
}
.exp-cal2 .exp-cal2-input input {
  font-size: 25px;
}
.ex-calculate-value:before {
    content: none;
}
</style>