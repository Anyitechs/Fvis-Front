<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Create Gallery</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/manageusers" class="redial-light">Create Gallery</NuxtLink>
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
                    <h6 class="header-title pl-3 redial-relative">Create Gallery</h6>
                    <form @submit.prevent="store">
                      <div class="form-group">
                        <label class="redial-font-weight-600">Title</label>
                        <input
                          v-model="formData.title"
                          type="text"
                          class="form-control"
                          placeholder="Enter Title"
                        />
                      </div>
                      <div class="form-group">
                        <client-only>
                          <file-pond
                            ref="pond"
                            label-idle="Drop files here..."
                            v-bind:allow-multiple="true"
                            accepted-file-types="image/jpeg, image/png, image/gif, image/svg+xml"
                            v-bind:instantUpload="instantupload"
                            v-bind:files="myFiles"
                            v-on:init="handleFilePondInit"
                            v-on:updatefiles="handleFilePondUpdateFile"
                          />
                        </client-only>
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
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
import Nav from '~/components/admindash/Nav'
import Breadcrumb from '~/components/admindash/Breadcrumb'
import vueFilePond, { setOptions } from 'vue-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import 'filepond/dist/filepond.min.css'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
)
export default {
  components: {
    Nav,
    Breadcrumb,
    FilePond
  },
  middleware: ['auth', 'admin'],
  layout: 'Admindashboard',
  data() {
    return {
      myFiles: [],
      formData: {
        title: ''
      },
      instantupload: false
    }
  },
  methods: {
    handleFilePondInit: function() {
      console.log('FilePond has initialized')

      // FilePond instance methods are available on `this.$refs.pond`
    },
    handleFilePondUpdateFile(files) {
      this.myFiles = files.map(files => files.file)
    },
    async store() {
      const formData = new FormData()
      formData.append('title', this.formData.title)

      //Set all files to formData
      for (var i = 0; i < this.myFiles.length; i++) {
        let file = this.myFiles[i]
        formData.append('files[' + i + ']', file)
      }

      const config = {
        headers: { 'content-type': 'multipart/form-data' }
      }

      const gallery = await this.$axios.$post(
        'https://resource.fvisng.com/api/admin/savegallery',
        formData,
        config
      )
      if (gallery.success) {
        this.$Toast('New Gallery', 'Post Created Successfully', 'success')
        setTimeout(() => this.$router.push('/admin/gallery/listgallery'), 5000)
      } else {
        this.$Toast(
          'New Gallery',
          'An error occured while trying to submit your post, kindly try again.'
        )
      }
    }
  }
}
</script>

<style>
</style>