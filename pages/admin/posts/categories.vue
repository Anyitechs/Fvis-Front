<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Manage Loans</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/manageusers" class="redial-light">Manage Loans</NuxtLink>
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
                    <h6 class="header-title pl-3 redial-relative">Create Post</h6>
                    <form @submit.prevent="submitpost">
                      <div class="form-group">
                        <label class="redial-font-weight-600">Title</label>
                        <input
                          v-model="post.title"
                          type="text"
                          class="form-control"
                          placeholder="Enter Title"
                        />
                      </div>
                      <div class="form-group">
                        <label class="redial-font-weight-600">Title</label>
                        <input
                          v-model="post.title"
                          type="text"
                          class="form-control"
                          placeholder="Enter Title"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-toast id="my-toast" variant="warning" :visible="show" static no-auto-hide solid>
      <template v-slot:toast-title>
        <div class="d-flex flex-grow-1 align-items-baseline">
          <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
          <strong class="mr-auto">Uploading Image!</strong>
          <small class="text-muted mr-2">0 seconds ago</small>
        </div>
      </template>
      <b-progress :value="value" :max="max" show-progress animated></b-progress>
    </b-toast>
  </div>
</template>

<script>
import Header from '~/components/admindash/Header'
import Nav from '~/components/admindash/Nav'
import Breadcrumb from '~/components/admindash/Breadcrumb'
import Editor from '@tinymce/tinymce-vue'
import jQuery from 'jquery'

let imageUploaderCallback = () => false
export default {
  middleware: ['auth', 'admin'],
  layout: 'Admindashboard',
  components: {
    Header,
    Nav,
    Breadcrumb,
    editor: Editor
  },
  head() {
    return {
      title: 'Create Post - Fvis Nig'
    }
  },
  data() {
    const self = this
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  }
  
}
</script>
