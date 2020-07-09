<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Investments</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/user/dashboard" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item active">Investments</li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav />
      <div id="content">
        <div class="row">
          <div class="col-sm-12"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/userdash/Header'
import Nav from '~/components/userdash/Nav'
import Breadcrumb from '~/components/userdash/Breadcrumb'
export default {
layout: 'userdashboard',
  middleware ({ store, redirect, $auth }) {
    if($auth.user.member_id < 2) {
      return redirect('/login')
    }
  },
  components: {
    Header,
    Nav,
    Breadcrumb
  },
  head() {
    return {
      title: 'Investments - Fvisng'
    }
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  }
}
</script>

<style>

</style>