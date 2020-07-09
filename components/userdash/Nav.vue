<template>
  <nav id="sidebar" :class="'card redial-border-light px-2 mb-4 ' + menutoggle">
    <div class="sidebar-scrollarea">
      <ul class="metismenu list-unstyled mb-0" id="menu">
        <li>
          <NuxtLink to="/user/dashboard">
            <i class="fa fa-dashboard pr-1"></i> Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user/dashboard/packages">
            <i class="icofont icofont-package pr-1"></i> Packages
          </NuxtLink>
        </li>
        <div class="redial-divider my-1"></div>
        <li :class="walletactive">
          <a
            class="has-arrow"
            style="cursor: pointer"
            @click="walletdrop"
            data-toggle="collapse"
            :aria-expanded="walletactive == 'active' ? true : false"
          >
            <i class="icofont icofont-bank-transfer-alt pr-1"></i> Wallet
          </a>
          <ul :class="walletstyle" :aria-expanded="walletactive == 'active' ? true : false">
            <li>
              <NuxtLink to="/user/fundwallet">Fund Wallet</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/user/fundstransfer">Funds Transfer</NuxtLink>
            </li>
          </ul>
        </li>
        <div class="redial-divider my-1"></div>
        <li :class="loanactive">
          <a
            class="has-arrow"
            style="cursor: pointer"
            @click="loansdrop"
            data-toggle="collapse"
            :aria-expanded="loanactive == 'active' ? true : false"
          >
            <i class="icofont icofont-pay pr-1"></i> Loans
          </a>
          <ul :class="loanstyle" :aria-expanded="loanactive == 'active' ? true : false">
            <li>
              <NuxtLink to="/user/fast-cash">Fast Cash</NuxtLink>
            </li>
            <li v-if="$auth.user.member_id > 1">
              <NuxtLink to="/user/salary-earners">Salary Earners</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/user/loanhistory">Loan History</NuxtLink>
            </li>
          </ul>
        </li>
        <div class="redial-divider my-1"></div>
        <li :class="investactive" v-if="$auth.user.member_id > 1">
          <a
            class="has-arrow"
            style="cursor: pointer"
            @click="investsdrop"
            data-toggle="collapse"
            :aria-expanded="investactive == 'active' ? true : false"
          >
            <i class="icofont icofont-money pr-1"></i> Investments
          </a>
          <ul :class="investstyle" :aria-expanded="investactive == 'active' ? true : false">
            <li>
              <NuxtLink to="/user/investments">Invest</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/user/salary-earners">Return on Investment (ROI)</NuxtLink>
            </li>
          </ul>
        </li>
        <div class="redial-divider my-1" v-if="$auth.user.member_id > 1"></div>
        <li>
          <a href="#" @click="logout">
            <i class="icofont icofont-sign-out pr-1"></i> Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    menutoggle() {
      return this.$store.state.navigationmenu.toggle
    }
  },
  data() {
    return {
      loanactive: '',
      loanstyle: 'list-unstyled collapse',
      walletactive: '',
      walletstyle: 'list-unstyled collapse',
      investactive: '',
      investstyle: 'list-unstyled collapse'
    }
  },
  methods: {
    loansdrop() {
      if (this.loanactive == 'active') {
        this.loanactive = ''
        this.loanstyle = 'list-unstyled collapse'
      } else if (this.loanactive == '') {
        this.loanactive = 'active'
        this.loanstyle = 'list-unstyled collapse in'
      }
    },
    walletdrop() {
      if (this.walletactive == 'active') {
        this.walletactive = ''
        this.walletstyle = 'list-unstyled collapse'
      } else if (this.walletactive == '') {
        this.walletactive = 'active'
        this.walletstyle = 'list-unstyled collapse in'
      }
    },
    investsdrop() {
      if (this.investactive == 'active') {
        this.investactive = ''
        this.investstyle = 'list-unstyled collapse'
      } else if (this.investactive == '') {
        this.investactive = 'active'
        this.investstyle = 'list-unstyled collapse in'
      }
    },
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style>
</style>