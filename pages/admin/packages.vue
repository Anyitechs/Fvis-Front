<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Packages</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/packages" class="redial-light">Packages</NuxtLink>
          </li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav/>
    </div>
  </div>
</template>
<script>
  import Header from '~/components/admindash/Header'
  import Nav from '~/components/admindash/Nav'
  import Breadcrumb from '~/components/admindash/Breadcrumb'

  export default {
    middleware: ['auth', 'admin'],
    layout: 'Admindashboard',
    components: {
      Header,
      Nav,
      Breadcrumb
    },
    head: {
      title: 'Manage Packages - Fvis Nig'
    },
    computed: {
      menutoggle() {
        return this.$store.state.navigationmenu.toggle
      }
    },
    beforeMount() {
      this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
    }
  }
</script>
