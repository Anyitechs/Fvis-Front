<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Fund Transfer</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/user/dashboard" class="redial-light">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active">Fund Transfer</li>
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
                    <h6 class="header-title pl-3 redial-relative">Funds Transfer</h6>
                    <div class="col-md-8 offset-md-2">
                      <div class="form-group">
                        <label class="redial-font-weight-600 d-block">
                          Account Number
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          v-model="form.account_number"
                          class="form-control"
                          @change="fetchname"
                          placeholder="Account Number"
                        />
                      </div>
                      <div class="form-group">
                        <label class="redial-font-weight-600 d-block">
                          Bank
                          <span class="text-danger">*</span>
                        </label>
                        <select
                          class="form-control"
                          v-model="form.bankcode"
                          @change="techie($event)"
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
                        <label class="redial-font-weight-600 d-block">
                          Account Name
                          <span class="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          v-model="form.account_name"
                          class="form-control"
                          :placeholder="placeholder"
                          disabled
                        />
                      </div>
                      <div class="form-group">
                        <label class="redial-font-weight-600 d-block">
                          Amount
                          <span class="text-danger">*</span>
                        </label>
                        <money class="form-control" v-model="form.amount" v-bind="money"></money>
                      </div>
                      <div class="form-group">
                        <label
                          class="redial-font-weight-600 d-block"
                        >Beneficiary's Mobile Number (optional)</label>
                        <input
                          type="text"
                          v-model="form.benenumber"
                          class="form-control"
                          placeholder="Beneficiary's Mobile Number"
                        />
                      </div>
                      <div class="form-group">
                        <label class="redial-font-weight-600 d-block">Remark (Optional)</label>
                        <input
                          type="text"
                          v-model="form.remark"
                          class="form-control"
                          placeholder="Remark (e.g Transfer to ABC)"
                        />
                      </div>
                      <paystack
                        :amount="form.amount * 100"
                        :email="$auth.user.email"
                        :paystackkey="paystackkey"
                        :reference="reference"
                        :callback="callback"
                        :close="close"
                        :embed="false"
                      >
                        <button
                          :disabled="disablesubmit"
                          class="btn btn-primary"
                          type="submit"
                        >Continue</button>
                      </paystack>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/userdash/Nav'
import Breadcrumb from '~/components/userdash/Breadcrumb'
import { Money } from 'v-money'
import axios from 'axios'
export default {
  components: {
    Nav,
    Breadcrumb,
    Money
  },
  middleware: 'user',
  layout: 'userdashboard',
  data() {
    return {
      form: {
        account_number: '',
        account_name: '',
        amount: 0,
        remark: '',
        benenumber: '',
        bankcode: '',
        selectedbank: ''
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
      money: {
        decimal: '.',
        thousands: ',',
        prefix: '₦',
        suffix: '',
        precision: 2,
        masked: false
      },
      paystackkey: 'pk_test_219fe40f38e54f389a60160061bdcf153f2415d5',
      placeholder: 'Account Name'
    }
  },
  computed: {
    reference() {
      let text = ''
      let possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length))

      return (
        'Fvis-transfer-' + text + Math.floor(Math.random() * 1000000000 + 1)
      )
    },
    disablesubmit() {
      if (
        !this.form.amount ||
        !this.form.account_number ||
        !this.form.bankcode ||
        !this.form.account_name
      ) {
        return true
      }
      return false
    }
  },
  methods: {
    async callback(response) {
      /**
       * 
       * message: "Approved"
reference: "Fvis-transfer-FB8U4h8u0Q819091830"
status: "success"
trans: "662000817"
transaction: "662000817"
trxref: "Fvis-transfer-FB8U4h8u0Q819091830"
       */
      const submittransfer = await this.$axios.$post(
        'https://resource.fvisng.com/api/user/fundstransfer',
        {
          message: response.message,
          status: response.status,
          trxref: response.trxref,
          remark: this.form.remark,
          amount: this.form.amount,
          bankcode: this.form.bankcode,
          account_number: this.form.account_number,
          benenumber: this.form.benenumber,
          selectedbank: this.form.selectedbank
        }
      )
      if (submittransfer.success) {
        this.$Toast('Transfer Status', submittransfer.data, 'success')
      } else {
        this.$Toast('Transfer Status', submittransfer.error)
      }
    },
    async close() {
      this.$Toast('Funds Transfer', 'Payment Page Closed.')
    },
    async fetchname() {
      this.placeholder = 'Fetching Account Name ...'
    },
    techie() {
      this.form.selectedbank =
        event.target.options[event.target.selectedIndex].attributes[
          'data-item-type'
        ].value
    }
  },
  watch: {
    'form.account_number': function(val) {
      if (
        this.form.account_number != null &&
        this.form.account_number.length >= 10 &&
        this.form.bankcode.length > 2
      ) {
        const moreOptions = {
          headers: { 'Content-Type': 'application/json' }
        }
        axios
          .post(
            'https://api.ravepay.co/flwv3-pug/getpaidx/api/resolve_account',
            {
              recipientaccount: this.form.account_number,
              destbankcode: this.form.bankcode,
              PBFPubKey: 'FLWPUBK-d5b2281ac85d309b388abc39a4029f39-X'
            },
            moreOptions
          )
          .then(response => {
            this.form.account_name = response.data.data.data.accountname
          })
      }
    },
    'form.bankcode': function(val) {
      if (
        this.form.account_number != null &&
        this.form.account_number.length >= 10 &&
        this.form.bankcode.length > 2
      ) {
        const moreOptions = {
          headers: { 'Content-Type': 'application/json' }
        }
        axios
          .post(
            'https://api.ravepay.co/flwv3-pug/getpaidx/api/resolve_account',
            {
              recipientaccount: this.form.account_number,
              destbankcode: this.form.bankcode,
              PBFPubKey: 'FLWPUBK-d5b2281ac85d309b388abc39a4029f39-X'
            },
            moreOptions
          )
          .then(response => {
            this.form.account_name = response.data.data.data.accountname
          })
      }
    }
  }
}
</script>

<style>
</style>