<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Add Post</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin" class="redial-light">Dashboard</NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <NuxtLink to="/admin/manageusers" class="redial-light">Add Post</NuxtLink>
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
                        <label class="redial-font-weight-600">Category</label>
                        <span v-if="$fetchState.pending">Loading Categories...</span>
                        <select
                          v-else
                          v-for="category in categories.data"
                          :key="category.id"
                          class="form-control"
                          v-model="post.category"
                        >
                          <option value selected disabled>-- SELECT</option>
                          <option :value="category.id">{{ category.name }}</option>
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
                        <button class="btn btn-primary btn-xs">{{ post.submitbutton }}</button>
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
      categories: [],
      post: {
        title: '',
        body: '',
        category: '',
        submitbutton: 'Publish'
      },
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
      },
      value: 0,
      max: 100,
      show: false
    }
  },
  async fetch() {
    this.categories = await this.$axios.$get(
      'https://resource.fvisng.com/api/admin/getcat'
    )
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
          category: this.post.category
        }
      )
      if (postnews.success == true) {
        this.post.submitbutton = 'Publish'
        this.$Toast('New Post', 'Post published successfully', 'success')
        setTimeout(() => this.$router.push('/admin/posts'), 5000)
      } else {
        this.post.submitbutton = 'Publish'
        this.$Toast(
          'New Post',
          'An error occured while publishing your post kindly try again',
          'danger'
        )
      }
    }
  }
}
</script>
