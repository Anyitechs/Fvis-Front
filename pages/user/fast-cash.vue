<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Loans</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/user/dashboard" class="redial-light">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active">Loans</li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav />
      <div id="content">
        <div class="row">
          <div class="col-sm-12">
            <div class="row mb-4">
              <div class="col-12 col-xl-12">
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="card-body">
                    <h6 class="header-title pl-3 redial-relative">Loan Request</h6>
                    <b-alert show variant="warning">
                      <h4 class="alert-heading">Hello {{ firstname }},</h4>
                      <p>Kindly complete your profile to continue with Loan application.</p>
                      <hr />
                      <p class="mb-0"></p>
                    </b-alert>
                    <div class="col-md-8 offset-md-2">
                      <form @submit.prevent="submitupload">
                        <div v-if="$auth.user.employ_status == null">
                        <div class="form-group">
                          <label class="redial-font-weight-600 d-block">
                            Relative Name
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            v-model="form.relativename"
                            class="form-control"
                            placeholder="Relative Name"
                          />
                        </div>
                        <div class="form-group">
                          <label class="redial-font-weight-600 d-block">
                            Relative Number
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            v-model="form.relativenumber"
                            class="form-control"
                            placeholder="Relative Number"
                          />
                        </div>
                        <div class="redial-divider my-4"></div>
                        <div class="form-group">
                          <label class="redial-font-weight-600 d-block">
                            Employment Status
                            <span class="text-danger">*</span>
                          </label>
                          <select class="form-control" v-model="form.employ_status">
                            <option value disabled>-- SELECT</option>
                            <option value="Employed">Employed</option>
                            <option value="Self-Employed">Self-Employed</option>
                            <option value="Unemployed">Unemployed</option>
                          </select>
                        </div>
                        <div
                          v-if="form.employ_status == 'Employed' || form.employ_status == 'Self-Employed'"
                        >
                          <div class="form-group">
                            <label class="redial-font-weight-600 d-block">
                              Name of Company
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              v-model="form.employ_company"
                              class="form-control"
                              placeholder="Name of Company"
                            />
                          </div>
                          <div class="form-group">
                            <label class="redial-font-weight-600 d-block">
                              Name of Employer
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              v-model="form.employ_name"
                              class="form-control"
                              placeholder="Name of Employer"
                            />
                          </div>
                          <div class="form-group">
                            <label class="redial-font-weight-600 d-block">
                              Phone Number of Employer
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              v-model="form.employ_number"
                              class="form-control"
                              placeholder="Phone Number of Employer"
                            />
                          </div>
                          <div class="form-group">
                            <label class="redial-font-weight-600 d-block">
                              Salary
                              <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              @keypress="isNumber($event)"
                              @change="removeSalaryFormat"
                              v-model="form.salary"
                              class="form-control"
                              placeholder="Salary"
                            />
                          </div>
                          <div class="form-group">
                            <label class="redial-font-weight-600 d-block">
                              Upload ID (Voter's Card, Driver's License, Passport, etc)
                              <span class="text-danger">*</span>
                            </label>
                          </div>
                          <div class="form-group">
                            <label class="redial-font-weight-600 d-block">
                              Back
                              <span class="text-danger">*</span>
                            </label>
                            <input type="file" class="form-control" @change="idback" />
                          </div>
                          <div class="form-group">
                            <label class="redial-font-weight-600 d-block">
                              Front
                              <span class="text-danger">*</span>
                            </label>
                            <input type="file" class="form-control" @change="idfront" />
                          </div>
                        </div>
                        <div class="redial-divider my-4"></div>
                        </div>
                        <div class="form-group">
                          <label class="redial-font-weight-600">
                            Amount
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            @keypress="isNumber($event)"
                            @change="removeFormat"
                            v-model="form.amount"
                            type="text"
                            class="form-control"
                            placeholder="Enter Amount"
                          />
                          <small class="font-weight-bold">Max amount of &#8358;100,000</small>
                        </div>
                        <div class="form-group">
                          <label class="redial-font-weight-600 d-block">
                            Purpose
                            <span class="text-danger">*</span>
                          </label>
                          <select v-model="form.purpose" class="form-control">
                            <option value disabled>-- SELECT</option>
                            <option value="Business">Business</option>
                            <option value="Education">Education</option>
                            <option value="Emergency">Emergency</option>
                            <option value="Medical">Medical</option>
                            <option value="Travel">Travel</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <label class="redial-font-weight-600 d-block">
                            Duration
                            <span class="text-danger">*</span>
                          </label>
                          <select v-model="form.duration" class="form-control">
                            <option value disabled>-- SELECT</option>
                            <option value="5">5 days</option>
                            <option value="14">14 days</option>
                            <option value="28">28 days</option>
                          </select>
                        </div>
                        <div v-if="form.amount && form.interest">
                          <div class="redial-divider my-4"></div>
                          <em>
                            Repayment Amount:
                            <strong>
                              &#8358;{{ form.finalAmount | currency('', ',', 2,
                              '.', 'front', false) }}
                            </strong>
                          </em>
                        </div>
                        <div class="redial-divider my-4"></div>
                        <div class="form-group">
                          <label class="redial-font-weight-600 d-block">
                            BVN
                            <span class="text-danger">*</span>
                          </label>
                          <input
                            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            @keypress="isNumber($event)"
                            v-model="form.bvn"
                            type="number"
                            class="form-control"
                            maxlength="12"
                            placeholder="Bank Verification Number (BVN)"
                          />
                        </div>
                        <div class="redial-divider my-4"></div>
                        <h4>
                          SETTLEMENT BANK ACCOUNT
                          <span class="text-danger">*</span>
                        </h4>
                        <div v-if="bankdropdown === 1">
                          <ul class="list-group mt-3 mb-3">
                            <div class="d-flex justify-content-center text-center">
                              <b-spinner
                                v-if="Object.keys(savedBanks).length < 1"
                                variant="secondary"
                                type="grow"
                                label="Loading Banks"
                              ></b-spinner>
                            </div>
                            <li
                              v-for="savedBank in savedBanks"
                              :key="savedBank.id"
                              class="list-group-item"
                              :class="{ 'active': activeIndex === savedBank.id}"
                              @click="setActive(savedBank.id)"
                            >
                              {{ savedBank.bankname }}
                              <br />
                              {{ savedBank.account_number.substring(0,3)+'*****'+savedBank.account_number.substring(8,10)
                              }}
                            </li>
                          </ul>
                        </div>
                        <!-- Bank Form Here -->
                        <div class="form-group">
                          <select
                            class="form-control"
                            v-model="form.bank.bankcode"
                            @change="techie($event)"
                            required
                          >
                            <option value selected="selected" disabled>-- SELECT</option>
                            <option
                              :data-item-type="bank.Name"
                              v-for="bank in banks"
                              :value="bank.Code"
                              :key="bank.Id"
                            >{{ bank.Name }}</option>
                          </select>
                        </div>
                        <div class="form-group">
                          <input
                            v-model="form.bank.account_number"
                            @keypress="isNumber"
                            class="form-control"
                            type="text"
                            placeholder="Account Number"
                            maxlength="12"
                          />
                        </div>
                        <div class="form-group">
                          <input
                            v-model="form.bank.account_name"
                            class="form-control"
                            type="text"
                            placeholder="Account Name"
                            disabled="true"
                          />
                        </div>
                        <!-- End of Bank Form -->
                        <button
                          type="submit"
                          class="btn btn-primary btn-xs"
                          :disabled="buttondisable"
                        >
                          <span
                            v-if="isLoading == 1"
                            class="spinner-border spinner-border-sm"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          {{ requestButton }}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-xl-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/userdash/Header'
import Nav from '~/components/userdash/Nav'
import Breadcrumb from '~/components/userdash/Breadcrumb'
// import md5 from 'md5'
import axios from 'axios'

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
  middleware: ['user', 'verified'],
  layout: 'userdashboard',
  components: {
    Header,
    Nav,
    Breadcrumb
  },
  data() {
    return {
      requestButton: 'Request Loan',
      buttondisable: true,
      isLoading: 0,
      form: {
        amount: '',
        purpose: '',
        duration: '',
        interest: '',
        finalAmount: 0,
        bvn: '',
        relativename: '',
        relativenumber: '',
        employ_status: '',
        employ_company: '',
        employ_name: '',
        employ_number: '',
        salary: '',
        bank: {
          bankcode: '',
          account_number: '',
          account_name: '',
          selectedbank: ''
        }
      },
      banks: [
        {
          Id: 174,
          Code: '401',
          Name: 'ASO Savings and & Loans'
        },
        {
          Id: 191,
          Code: '044',
          Name: 'Access Bank'
        },
        {
          Id: 147,
          Code: '323',
          Name: 'Access Money'
        },
        {
          Id: 173,
          Code: '317',
          Name: 'Cellulant'
        },
        {
          Id: 162,
          Code: '303',
          Name: 'ChamsMobile'
        },
        {
          Id: 145,
          Code: '023',
          Name: 'CitiBank'
        },
        {
          Id: 183,
          Code: '559',
          Name: 'Coronation Merchant Bank'
        },
        {
          Id: 164,
          Code: '551',
          Name: 'Covenant Microfinance Bank'
        },
        {
          Id: 170,
          Code: '063',
          Name: 'Diamond Bank'
        },
        {
          Id: 148,
          Code: '302',
          Name: 'Eartholeum'
        },
        {
          Id: 153,
          Code: '307',
          Name: 'EcoMobile'
        },
        {
          Id: 152,
          Code: '050',
          Name: 'Ecobank Plc'
        },
        {
          Id: 169,
          Code: '084',
          Name: 'Enterprise Bank'
        },
        {
          Id: 136,
          Code: '309',
          Name: 'FBNMobile'
        },
        {
          Id: 187,
          Code: '314',
          Name: 'FET'
        },
        {
          Id: 184,
          Code: '601',
          Name: 'FSDH'
        },
        {
          Id: 144,
          Code: '070',
          Name: 'Fidelity Bank'
        },
        {
          Id: 154,
          Code: '318',
          Name: 'Fidelity Mobile'
        },
        {
          Id: 137,
          Code: '011',
          Name: 'First Bank of Nigeria'
        },
        {
          Id: 186,
          Code: '214',
          Name: 'First City Monument Bank'
        },
        {
          Id: 159,
          Code: '501',
          Name: 'Fortis Microfinance Bank'
        },
        {
          Id: 134,
          Code: '308',
          Name: 'FortisMobile'
        },
        {
          Id: 177,
          Code: '058',
          Name: 'GTBank Plc'
        },
        {
          Id: 189,
          Code: '315',
          Name: 'GTMobile'
        },
        {
          Id: 149,
          Code: '324',
          Name: 'Hedonmark'
        },
        {
          Id: 175,
          Code: '030',
          Name: 'Heritage'
        },
        {
          Id: 165,
          Code: '415',
          Name: 'Imperial Homes Mortgage Bank'
        },
        {
          Id: 151,
          Code: '301',
          Name: 'JAIZ Bank'
        },
        {
          Id: 176,
          Code: '402',
          Name: 'Jubilee Life Mortgage Bank'
        },
        {
          Id: 181,
          Code: '082',
          Name: 'Keystone Bank'
        },
        {
          Id: 185,
          Code: '313',
          Name: 'Mkudi'
        },
        {
          Id: 150,
          Code: '325',
          Name: 'MoneyBox'
        },
        {
          Id: 156,
          Code: '999',
          Name: 'NIP Virtual Bank'
        },
        {
          Id: 166,
          Code: '552',
          Name: 'NPF MicroFinance Bank'
        },
        {
          Id: 139,
          Code: '990',
          Name: 'Omoluabi Mortgage Bank'
        },
        {
          Id: 182,
          Code: '327',
          Name: 'Pagatech'
        },
        {
          Id: 132,
          Code: '560',
          Name: 'Page MFBank'
        },
        {
          Id: 167,
          Code: '526',
          Name: 'Parralex'
        },
        {
          Id: 160,
          Code: '329',
          Name: 'PayAttitude Online'
        },
        {
          Id: 171,
          Code: '305',
          Name: 'Paycom'
        },
        {
          Id: 140,
          Code: '311',
          Name: 'ReadyCash (Parkway)'
        },
        {
          Id: 163,
          Code: '403',
          Name: 'SafeTrust Mortgage Bank'
        },
        {
          Id: 180,
          Code: '076',
          Name: 'Skye Bank'
        },
        {
          Id: 158,
          Code: '221',
          Name: 'Stanbic IBTC Bank'
        },
        {
          Id: 133,
          Code: '304',
          Name: 'Stanbic Mobile Money'
        },
        {
          Id: 142,
          Code: '068',
          Name: 'Standard Chartered Bank'
        },
        {
          Id: 179,
          Code: '232',
          Name: 'Sterling Bank'
        },
        {
          Id: 138,
          Code: '326',
          Name: 'Sterling Mobile'
        },
        {
          Id: 172,
          Code: '100',
          Name: 'SunTrust Bank'
        },
        {
          Id: 135,
          Code: '328',
          Name: 'TagPay'
        },
        {
          Id: 155,
          Code: '319',
          Name: 'TeasyMobile'
        },
        {
          Id: 188,
          Code: '523',
          Name: 'Trustbond'
        },
        {
          Id: 178,
          Code: '032',
          Name: 'Union Bank'
        },
        {
          Id: 190,
          Code: '033',
          Name: 'United Bank for Africa'
        },
        {
          Id: 146,
          Code: '215',
          Name: 'Unity Bank'
        },
        {
          Id: 157,
          Code: '320',
          Name: 'VTNetworks'
        },
        {
          Id: 168,
          Code: '035',
          Name: 'Wema Bank'
        },
        {
          Id: 141,
          Code: '057',
          Name: 'Zenith Bank'
        },
        {
          Id: 161,
          Code: '322',
          Name: 'ZenithMobile'
        },
        {
          Id: 143,
          Code: '306',
          Name: 'eTranzact'
        }
      ],
      error: '',
      savedBanks: [],
      activeIndex: undefined,
      bankdropdown: '',
      ref: '',
      front: [],
      back: []
    }
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  },
  computed: {
    reference() {
      let text = ''
      let possible = '0123456789'

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

      return text
    },
    realAmount() {
      return stripCommas(this.form.amount)
    },
    realSalary() {
      return stripCommas(this.form.salary)
    },
    firstname() {
      return this.$auth.user.first_name
    }
  },
  methods: {
    async submitupload() {
      this.requestButton = 'Submitting Request...'
      if (
        !this.form.amount ||
        !this.form.purpose ||
        !this.form.duration ||
        !this.form.interest ||
        !this.form.bvn ||
        !this.form.relativename ||
        !this.form.relativenumber ||
        !this.form.employ_status
      ) {
        this.$Toast(
          'Request Status',
          'An error occured while trying to submit your request, kindly complete all required fields.'
        )
        this.requestButton = 'Request Loan'
      } else {
        let formData = new FormData()
        
        formData.append('idback', this.back)
        formData.append('idfront', this.front)

        formData.append('amount', this.realAmount)
        formData.append('purpose', this.form.purpose)
        formData.append('duration', this.form.duration)
        formData.append('interest', this.form.interest)
        formData.append('bvn', this.form.bvn)
        formData.append('relativename', this.form.relativename)
        formData.append('relativenumber', this.form.relativenumber)
        formData.append('employ_status', this.form.employ_status)
        formData.append('employ_company', this.form.employ_company)
        formData.append('employ_name', this.form.employ_name)
        formData.append('employ_number', this.form.employ_number)
        formData.append('salary', this.realSalary)
        formData.append('bankcode', this.form.bank.bankcode)
        formData.append('account_number', this.form.bank.account_number)
        formData.append('account_name', this.form.bank.account_name)
        formData.append('bankname', this.form.bank.selectedbank)

        const upload = await this.$axios.$post(
          'https://resource.fvisng.com/api/submitloan',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        this.requestButton = 'Request Loan'
        console.log(upload)
      }
    },
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
    techie() {
      this.form.bank.selectedbank =
        event.target.options[event.target.selectedIndex].attributes[
          'data-item-type'
        ].value
    },
    formatAmount() {
      this.form.amount = stripCommas(numberFormat(this.form.amount))
    },
    removeFormat() {
      this.form.amount = numberFormat(stripCommas(this.form.amount))
    },
    removeSalaryFormat() {
      this.form.salary = numberFormat(stripCommas(this.form.salary))
    },
    idfront(event) {
      if (event.target.files.length) {
      this.front = event.target.files[0];
      }
    },
    idback(event) {
      if (event.target.files.length) {
        this.back = event.target.files[0];
      }
    }
  },
  watch: {
    'form.bank.account_number': function(val) {
      if (
        this.form.bank.account_number != null &&
        this.form.bank.account_number.length >= 10
      ) {
        const moreOptions = {
          headers: { 'Content-Type': 'application/json' }
        }
        axios
          .post(
            'https://api.ravepay.co/flwv3-pug/getpaidx/api/resolve_account',
            {
              recipientaccount: this.form.bank.account_number,
              destbankcode: this.form.bank.bankcode,
              PBFPubKey: 'FLWPUBK-d5b2281ac85d309b388abc39a4029f39-X'
            },
            moreOptions
          )
          .then(response => {
            this.form.bank.account_name = response.data.data.data.accountname
            this.buttondisable = false
          })
      }
    },
    'form.duration': function(val) {
      const amount = stripCommas(this.form.amount)
      if (this.form.duration == '5') {
        this.form.interest = (amount / 100) * 8
        this.form.finalAmount = amount + this.form.interest
      } else if (this.form.duration == '14') {
        this.form.interest = (amount / 100) * 11
        this.form.finalAmount = amount + this.form.interest
      } else if (this.form.duration == '28') {
        this.form.interest = (amount / 100) * 15
        this.form.finalAmount = amount + this.form.interest
      }
    },
    'form.amount': function(val) {
      const check = stripCommas(this.form.amount)
      if (check > 100000) {
        this.form.amount = 100000
      }
    }
  }
}
</script>

<style>
</style>
