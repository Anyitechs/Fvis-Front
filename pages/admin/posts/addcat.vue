<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Add Category</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/posts/addCat" class="redial-light">Add Category</NuxtLink>
          </li>
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
                    <h6 class="header-title pl-3 redial-relative mb-4">Add Category</h6>
                    <form class="form-inline justify-content-center" @submit.prevent="submitpost">
                      <div class="input-group mb-2 mr-sm-2 mb-md-0">
                        <div class="input-group-addon">
                          <i class="far fa-plus-hexagon"></i>
                        </div>
                        <input
                          v-model="name"
                          type="text"
                          class="form-control"
                          placeholder="Enter Category Name"
                        />
                      </div>
                      <button class="btn btn-primary btn-sm mt-2">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-12 col-xl-12">
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="card-body">
                    <h6 class="header-title pl-3 redial-relative mb-4">Categories</h6>
                    <div class="table-inbox p-3">
                      <table class="table mb-0 table-responsive d-md-table">
                        <tbody>
                          <tr v-if="$fetchState.pending">
                            <td>
                              <b-alert show variant="secondary">Loading...</b-alert>
                            </td>
                          </tr>
                          <tr v-for="category in categories" :key="category.id" v-else>
                            <td>
                              <i class="fa fa-star"></i>
                            </td>
                            <td>{{ category.name }}</td>
                          </tr>
                        </tbody>
                      </table>
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
  head() {
    return {
      title: 'Create Category - Fvis Nig'
    }
  },
  data() {
    return {
      name: '',
      categories: []
    }
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  },
  async fetch() {
    const categories = await fetch('https://resource.fvisng.com/api/admin/listcat').then((res) => res.json())
    this.categories = this.categories.concat(categories.data)
  },
  // async fetch() {
  //   categories = await this.$axios.$get(
  //     `https://resource.fvisng.com/api/admin/listcat`
  //   )

  // },
  methods: {
    async submitpost() {
      const submitcat = await this.$axios.$post(
        'https://resource.fvisng.com/api/admin/addcategory',
        {
          name: this.name
        }
      )
      if (submitcat.success) {
        this.$fetch()
        this.$Toast('New Category', 'Category Added Successfully', 'success')
      }
    }
  }
}
</script>
