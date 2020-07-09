<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Galleries</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/manageusers" class="redial-light">Galleries</NuxtLink>
          </li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav />
      <div id="content">
        <div class="row">
          <div class="col-12 col-sm-12">
            <div class="row mb-4">
              <div class="col-12 col-md-12">
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="card-body">
                    <h6 class="header-title pl-3 redial-relative">Galleries</h6>
                    <div v-if="$fetchState.pending">
                      <b-alert show variant="warning">Fetching Galleries...</b-alert>
                    </div>
                    <table
                      class="table table-hover mb-0 redial-font-weight-500 table-responsive d-md-table"
                    >
                      <thead class="redial-dark">
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">Subject</th>
                          <th sco pe="col">Date Posted</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="gallery in galleries" :key="gallery.id">
                          <th scope="row">{{ gallery.id }}</th>
                          <td>{{ gallery.title }}</td>
                          <td>{{ gallery.created_at | moment("dddd, MMMM Do YYYY, h:mm:ss a") }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-12 mb-4">
            <infinite-loading spinner="spiral" @infinite="infiniteScroll"></infinite-loading>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '~/components/admindash/Nav'
import Breadcrumb from '~/components/admindash/Breadcrumb'
export default {
  middleware: ['auth', 'admin'],
  layout: 'Admindashboard',
  components: {
    Nav,
    Breadcrumb
  },
  head: {
    title: 'Galleries - Fvis Nig'
  },
  computed: {
    menutoggle() {
      return this.$store.state.navigationmenu.toggle
    }
  },
  data() {
    return {
      galleries: [],
      next_page: undefined
    }
  },
  async fetch() {
    const galleries = await this.$axios.$get(
      'https://resource.fvisng.com/api/admin/galleries'
    )
    if (galleries.success == true) {
      this.galleries = galleries.data.data
      this.next_page = galleries.data.next_page_url
    }
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  },
  methods: {
    async infiniteScroll($state) {
      if (this.next_page == null) {
        $state.complete()
      } else {
        const check = await this.$axios.$get(this.next_page)
        check.data.data.forEach(item => this.galleries.push(item))
        $state.loaded()
        this.nextpage = check.data.next_page_url
      }
    }
  }
}
</script>

<style>
</style>