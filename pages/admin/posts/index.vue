<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Posts</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/manageusers" class="redial-light">Posts</NuxtLink>
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
                <b-alert v-if="$fetchState.pending" show variant="warning">Loading Posts...</b-alert>
                <div class="card redial-border-light redial-shadow mb-4">
                  <div class="card-body">
                    <h6 class="header-title pl-3 redial-relative">Posts</h6>
                    <table
                      class="table table-bordered mb-0 redial-font-weight-500 table-responsive d-md-table"
                    >
                      <thead class="redial-dark">
                        <tr>
                          <th scope="col">id</th>
                          <th scope="col">Title</th>
                          <th scope="col">Category</th>
                          <th scope="col">Author</th>
                          <th scope="col">Date Created</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="post in posts" :key="post.id">
                          <th scope="row">{{ post.id }}</th>
                          <td>{{ post.title }}</td>
                          <td>{{ post.category.name }}</td>
                          <td>{{ post.user.first_name + ' ' + post.user.last_name }}</td>
                          <td>{{ post.created_at | moment("from", "now") }}</td>
                          <td>
                            <NuxtLink :to="`/admin/posts/editpost/${post.id}`">
                              <i class="fal fa-edit"></i>
                            </NuxtLink>
                            <a style="cursor: pointer">
                              <i class="fas fa-trash-alt"></i>
                            </a>
                          </td>
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
      title: 'Posts - Fvis Nig'
    }
  },
  data() {
    return {
      posts: []
    }
  },
  async fetch() {
    const posts = await this.$axios.$get(
      `https://resource.fvisng.com/api/admin/getposts/15`
    )
    this.posts = posts.data.data
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  }
}
</script>

<style>
</style>