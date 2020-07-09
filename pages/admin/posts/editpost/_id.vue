<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Edit Post</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/manageusers" class="redial-light">Edit Post</NuxtLink>
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
                    <span v-if="$fetchState.pending">Loading Post...</span>
                    <form @submit.prevent="submitpost" v-else>
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
                        <label class="redial-font-weight-600">Category</label>
                        <select class="form-control" v-model="post.category.id">
                          <option
                            :value="post.category.id"
                            selected
                            disabled
                          >{{ post.category.name }}</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label class="redial-font-weight-600">Content</label>
                        <editor v-model="post.body" api-key="no-api-key" :init="init" />

                        <input
                          @change="onImageUpload"
                          ref="imageUploader"
                          type="file"
                          style="display: none"
                        />
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <button class="btn btn-primary btn-xs">{{ submitbutton }}</button>
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
  </div>
</template>

<script>
import Header from '~/components/admindash/Header'
import Nav from '~/components/admindash/Nav'
import Breadcrumb from '~/components/admindash/Breadcrumb'
import Editor from '@tinymce/tinymce-vue'
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
      title: 'Edit Post - Fvis Nig'
    }
  },
  data() {
    const self = this
    return {
      post: [],
      submitbutton: 'Update',
      init: {
        paste_data_images: true,
        height: 500,
        menubar: false,
        image_advtab: true,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount imagetools'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            table media image  | \
                            bullist numlist outdent indent | removeformat | help',
        file_picker_callback: (callback, value, meta) => {
          if (meta.filetype === 'image') {
            // set imageUploaderCallback to this callback
            imageUploaderCallback = callback
            // Open file picker
            self.$refs.imageUploader.click()
          }
        }
      }
    }
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async fetch() {
    const post = await this.$axios.$get(
      `https://resource.fvisng.com/api/admin/getsinglepost/${this.$route.params.id}`
    )
    this.post = post.data
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  },
  methods: {
    async onImageUpload(event) {
      if (event.target.files.length) {
        let image = event.target.files[0]

        const postData = new FormData()
        postData.append('image', image)

        // callback('myimage.jpg', { alt: 'My alt text' })
        this.show = true
        // Get selected file
        const upload = await this.$axios.$post(
          'https://resource.fvisng.com/api/admin/savepost_image',
          postData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: function(progressEvent) {
              this.value = parseInt(
                Math.round((progressEvent.loaded / progressEvent.total) * 100)
              )
            }.bind(this)
          }
        )
        if (upload.success == true) {
          imageUploaderCallback(
            'https://fvisng.com/fv-contents/' + upload.data,
            { alt: '' }
          )
        } else {
          alert(upload.data)
        }
      }
    },
    async submitpost() {
      this.post.submitbutton = 'Publishing...'
      const postnews = await this.$axios.$post(
        'https://resource.fvisng.com/api/admin/addpost',
        {
          title: this.post.title,
          body: this.post.body,
          category: this.post.category,
          post_id: this.$route.params.id
        }
      )
      if (postnews.success == true) {
        this.post.submitbutton = 'Publish'
        this.$Toast('Post Update', 'Post updated successfully', 'success')
        setTimeout(() => this.$router.push('/admin/posts'), 5000)
      } else {
        this.post.submitbutton = 'Update'
        this.$Toast(
          'Post Update',
          'An error occured while updating your post kindly try again',
          'danger'
        )
      }
    }
  }
}
</script>

<style>
</style>