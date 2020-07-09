<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Profile</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/user/dashboard" class="redial-light">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active">Profile</li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav />
      <div id="content">
        <div class="row">
          <div class="col-sm-12">
            <div class="redial-relative redial-grediant grediant-tb profile-header">
              <div class="background-image-maker py-5"></div>
              <div class="holder-image">
                <!-- <img src="dist/images/profile-cover.jpg" alt class="img-fluid d-none" /> -->
              </div>
              <div class="redial-relative pl-md-3 pt-5">
                <div class="media d-md-flex d-block">
                  <img
                    :src="$auth.user.profile_img"
                    width="250"
                    :alt="$auth.user.first_name+ ' ' + $auth.user.last_name"
                    class="d-md-flex img-fluid rounded border redial-border-width-8 border-white redial-relative profile-avatar ml-md-0 ml-4 mb-md-0 mb-3"
                  />

                  <div class="media-body align-self-end pt-4">
                    <div class="pl-4">
                      <h1
                        class="display-4 text-uppercase text-white mb-0 redial-font-weight-900"
                      >{{ $auth.user.first_name + ' ' + $auth.user.last_name }}</h1>
                      <h6 class="text-uppercase text-white mb-0 redial-font-weight-700">
                        <i class="fas fa-star"></i> PRIMARY MEMBER
                      </h6>
                    </div>
                    <div
                      class="profile-menu mt-4 bg-white border border-left-0 border-right-0 redial-border-light"
                    >
                      <div class="clearfix">
                        <div class="float-xl-left float-none">
                          <ul
                            class="nav nav-pills flex-column flex-sm-row redial-font-weight-700"
                            id="myTab"
                            role="tablist"
                          >
                            <li class="nav-item ml-0">
                              <button
                                class="nav-link redial-dark py-2 px-3 px-lg-4 redial-relative"
                                @click="lauchuploader"
                              >Upload Photo/Passport</button>
                            </li>
                          </ul>
                          <input
                            @change="onImageUpload"
                            ref="imageUploader"
                            type="file"
                            style="display: none"
                          />
                        </div>
                        <div class="float-xl-right float-none">
                          <ul class="list-inline mb-0 page-social my-2 mr-xl-3 mr-0 ml-3 ml-xl-0">
                            <!-- <li class="list-inline-item text-center">
                              <a href="#" class="text-white">
                                <i
                                  class="redial-bg-fb redial-rounded-circle-50 redial-line-height-2 fa fa-facebook"
                                ></i>
                              </a>
                            </li>
                            <li class="list-inline-item text-center">
                              <a href="#" class="text-white">
                                <i
                                  class="redial-bg-twi redial-rounded-circle-50 redial-line-height-2 fa fa-twitter"
                                ></i>
                              </a>
                            </li>
                            <li class="list-inline-item text-center">
                              <a href="#" class="text-white">
                                <i
                                  class="redial-bg-link redial-rounded-circle-50 redial-line-height-2 fa fa-linkedin"
                                ></i>
                              </a>
                            </li>
                            <li class="list-inline-item text-center">
                              <a href="#" class="text-white">
                                <i
                                  class="redial-bg-goog redial-rounded-circle-50 redial-line-height-2 fa fa-google"
                                ></i>
                              </a>
                            </li> -->
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row profile-bottom">
          <div class="col-12 col-md-9 ml-auto mt-2">
            <ul
              class="list-inline mb-0 float-xl-right float-none text-xl-center text-left mr-xl-3 mr-0"
            >
              <li
                class="list-inline-item redial-brd-right pr-sm-3 pr-0 mr-0 d-sm-inline-block d-block mb-3 mb-sm-0"
              >
                <p class="mb-0 text-uppercase redial-font-weight-700 counter_number"></p>
              </li>
              <li
                class="list-inline-item redial-brd-right px-sm-3 px-0 mr-0 d-sm-inline-block d-block mb-3 mb-sm-0"
              >
                <p class="mb-0 text-uppercase redial-font-weight-700 counter_number"></p>
              </li>
              <li class="list-inline-item pl-sm-3 pl-0 mr-0 d-sm-inline-block d-block mb-3 mb-sm-0">
                <p class="mb-0 text-uppercase redial-font-weight-700 counter_number"></p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-xl-12 mt-4">
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade active show">
              <div class="card redial-border-light redial-shadow">
                <div class="card-body">
                  <h6 class="header-title pl-3 redial-relative">Edit Profile</h6>
                  <div class="row">
                    <div class="col-xl-8 offset-xl-2">
                      <form @submit.prevent="onSubmit">
                        <div class="row">
                          <div class="col-6">
                            <div class="form-group">
                              <label class="redial-font-weight-600">First Name</label>
                              <input
                                type="text"
                                v-model="form.first_name"
                                class="form-control"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label class="redial-font-weight-600">Last Name</label>
                              <input
                                type="text"
                                v-model="form.last_name"
                                class="form-control"
                                placeholder="Last Name"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <div class="form-group">
                              <label class="redial-font-weight-600">Email</label>
                              <input
                                type="text"
                                v-model="form.email"
                                class="form-control"
                                placeholder="Enter Email"
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label class="redial-font-weight-600">Phone Number</label>
                              <input
                                type="text"
                                v-model="form.phone_number"
                                class="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <label class="redial-font-weight-600">Nationality</label>
                            <country-select
                              v-model="form.country"
                              :countryName="country.countryName"
                              :country="form.country"
                              topCountry="NG"
                              :whiteList="country.whiteList"
                              class="form-control"
                            />
                          </div>
                          <div class="col-6">
                            <label class="redial-font-weight-600">State of Origin</label>
                            <region-select
                              v-model="form.region"
                              :countryName="country.countryName"
                              :regionName="country.countryName"
                              :country="form.country"
                              :region="form.region"
                              placeholder="State"
                              class="form-control"
                            />
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="redial-font-weight-600">Date of Birth</label>
                          <div class="input-group form-group">
                            <datepicker
                              v-model="form.dob"
                              placeholder="Select Date"
                              input-class="form-control"
                              style="width: 100%"
                            ></datepicker>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="redial-font-weight-600">Local Government of Origin</label>
                          <input
                            v-model="form.lgaoforigin"
                            type="text"
                            class="form-control"
                            placeholder="Local Government of Origin"
                          />
                        </div>
                        <div class="form-group">
                          <label class="redial-font-weight-600">Local Government of Residence</label>
                          <input
                          v-model="form.lgaofresidence"
                          type="text"
                          class="form-control"
                          placeholder="Local Government of Residence"
                          />
                        </div>
                        <div class="row">
                          <div class="col-6">
                            <div class="form-group">
                              <label class="redial-font-weight-600">State of Residence</label>
                              <region-select
                                v-model="form.stateofresidence"
                                :countryName="country.countryName"
                                :regionName="country.countryName"
                                :country="form.country"
                                :region="form.stateofresidence"
                                class="form-control"
                              />
                            </div>
                          </div>
                          <div class="col-6">
                            <div class="form-group">
                              <label class="redial-font-weight-600">Marital Status</label>
                              <select v-model="form.marital_status" class="form-control">
                                <option value disabled selected>-- SELECT</option>
                                <option value="Single">Single</option>
                                <option value="Married">Married</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <label class="redial-font-weight-600">Residential Address</label>
                          <input
                            v-model="form.residential_address"
                            type="text"
                            class="form-control"
                            placeholder="Residential Address"
                          />
                        </div>

                        <div class="redial-divider my-4"></div>
                        <div class="d-flex flex-column justify-content-center">
                          <button class="btn btn-primary btn-xs">{{ form.submitbutton }}</button>
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
  </div>
</template>

<script>
import Nav from '~/components/userdash/Nav'
import Breadcrumb from '~/components/userdash/Breadcrumb'

export default {
  middleware: 'user',
  layout: 'userdashboard',
  components: {
    Nav,
    Breadcrumb
  },
  beforeMount() {
    this.form.first_name = this.$auth.user.first_name
    this.form.last_name = this.$auth.user.last_name
    this.form.email = this.$auth.user.email
    this.form.phone_number = this.$auth.user.phone_number
    this.form.region = this.$auth.user.state_of_origin
    this.form.lgaoforigin = this.$auth.user.lga_of_origin
    this.form.lgaofresidence = this.$auth.user.lga_of_residence
    this.form.stateofresidence = this.$auth.user.state_of_residence
    this.form.residential_address = this.$auth.user.residential_address
    this.form.marital_status = this.$auth.user.marital_status
    this.form.dob = this.$auth.user.dob
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        country: 'Nigeria',
        region: '',
        lgaoforigin: '',
        lgaofresidence: '',
        stateofresidence: '',
        residential_address: '',
        marital_status: '',
        dob: '',
        submitbutton: 'Update Profile'
      },
      country: {
        countryName: true,
        regionName: true,
        whiteList: ['NG']
      },
      show: false
    }
  },
  computed: {
    mom() {
      if (this.$moment(this.form.dob)._d == 'Invalid Date') {
        return ''
      } else {
        return this.$moment(this.form.dob).format('dddd, MMMM Do YYYY')
      }
    }
  },
  methods: {
    async onSubmit() {
        this.form.submitbutton = 'Updating Profile...'
      const profilesub = await this.$axios.$post(
        'https://resource.fvisng.com/api/user/subprofile',
        {
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          email: this.form.email,
          phone_number: this.form.phone_number,
          nationality: this.form.country,
          state: this.form.region,
          lgaoforigin: this.form.lgaoforigin,
          lgaofresidence: this.form.lgaofresidence,
          stateofresidence: this.form.stateofresidence,
          residential_address: this.form.residential_address,
          marital_status: this.form.marital_status,
          dob: this.mom
        }
      )
      if (profilesub.success) {
          this.form.submitbutton = 'Update Profile'
        this.$Toast(
          'Profile Update',
          'Your profile has been updated successfully',
          'success'
        )
      } else {
          this.form.submitbutton = 'Update Profile'
        this.$Toast(
          'Profile Update',
          'An error occured while trying to update your profile, kindly try again.'
        )
      }
    },
    async onImageUpload(event) {
      if (event.target.files.length) {
        let image = event.target.files[0]

        const postData = new FormData()
        postData.append('image', image)
        const upload = await this.$axios.$post(
          'https://resource.fvisng.com/api/user/profilepic',
          postData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        if (upload.success) {
          this.$auth.fetchUser()
          this.$Toast(
            'Profile Picture',
            'Your profile picture has been successfully updated',
            'success'
          )
        } else {
          this.$Toast(
            'Profile Picture',
            'An error occured while trying to update your profile picture, kindly try again.'
          )
        }
      }
    },
    async lauchuploader() {
      this.$refs.imageUploader.click()
    }
  }
}
</script>

<style>
.redial-font-weight-900 {
  font-weight: 900 !important;
}
.form-control {
  width: 100% !important
    ;
}
</style>