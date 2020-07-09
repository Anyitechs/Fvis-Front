<template>
  <div>
    <Breadcrumb>
      <template v-slot:pagetitle>Packages</template>
      <template v-slot:breadlinks>
        <ol class="breadcrumb mb-0 bg-transparent redial-light">
          <li class="breadcrumb-item">
            <NuxtLink to="/user/dashboard" class="redial-light">Home</NuxtLink>
          </li>
          <li class="breadcrumb-item active">Packages</li>
        </ol>
      </template>
    </Breadcrumb>
    <div class="wrapper">
      <Nav />
      <div id="content">
        <div class="row">
          <div class="col-12 col-sm-12">
            <div class="row mb-5">
              <div class="col-12 col-sm-6 col-xl-4 mb-4">
                <div class="card redial-border-light redial-shadow">
                  <div class="card-body" :class="[$auth.user.member_id == 1 ? 'border border-primary' : '']">
                    <h4 class="card-title text-center">PRIMARY MEMBER <span v-if="$auth.user.member_id == 1" class="text-success"><i class="fas fa-check-square"></i></span></h4>
                    <ul class="list-unstyled redial-font-weight-600 text-center">
                      <li>
                        Free: Open to all
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-xl-4 mb-4">
                <div class="card redial-border-light redial-shadow">
                  <div class="card-body" :class="[$auth.user.member_id == 2 ? 'border border-primary' : '']">
                    <h4 class="card-title text-center">BRONZE MEMBER</h4>
                    <ul class="list-unstyled redial-font-weight-600 text-center">
                      <li>
                        Invest and Earn
                        <hr />
                      </li>
                      <li>
                        Real Estate Development Project Award
                        <hr />
                      </li>
                      <li>
                        Apply for Business Loan
                        <hr />
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                    <div class="d-flex justify-content-center" style="margin-top: 9rem" v-if="$auth.user.member_id == 2">
                      <button class="btn btn-success">ACTIVE</button>
                    </div>
                    <div class="d-flex justify-content-center" style="margin-top: 9rem" v-else-if="$auth.user.member_id < 2">
                      <button class="btn btn-primary">UPGRADE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-xl-4 mb-4">
                <div class="card redial-border-light redial-shadow">
                  <div class="card-body" :class="[$auth.user.member_id == 3 ? 'border border-primary' : '']">
                    <h4 class="card-title text-center">SILVER MEMBER</h4>
                    <ul class="list-unstyled redial-font-weight-600 text-center">
                      <li>
                        Invest and Earn
                        <hr />
                      </li>
                      <li>
                        Real Estate Development Project Award
                        <hr />
                      </li>
                      <li>
                        Apply for Business Loan
                        <hr />
                      </li>
                      <li>Free Credit Score Check</li>
                    </ul>
                    <div class="clearfix"></div>
                    <div class="d-flex justify-content-center" style="margin-top: 8rem" v-if="$auth.user.member_id == 3">
                      <button class="btn btn-success">ACTIVE</button>
                    </div>
                    <div class="d-flex justify-content-center" style="margin-top: 8rem" v-else-if="$auth.user.member_id < 3">
                      <button class="btn btn-primary">UPGRADE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-xl-4 mb-4 mb-md-0">
                <div class="card redial-border-light redial-shadow">
                  <div class="card-body" :class="[$auth.user.member_id == 4 ? 'border border-primary' : '']">
                    <h4 class="card-title text-center">GOLD MEMBER</h4>
                    <ul class="list-unstyled redial-font-weight-600 text-center">
                      <li>
                        Discount on loan √ interest rates
                        <hr />
                      </li>
                      <li>
                        Apply for a business loan
                        <hr />
                      </li>
                      <li>
                        Real Estates Development Project Award
                        <hr />
                      </li>
                      <li>Talent Development</li>
                      <li>Free Credit Score Check</li>
                    </ul>
                    <div class="clearfix"></div>
                    <div class="d-flex justify-content-center" style="margin-top: 8rem" v-if="$auth.user.member_id == 4">
                      <button class="btn btn-success">ACTIVE</button>
                    </div>
                    <div class="d-flex justify-content-center" style="margin-top: 8rem" v-else-if="$auth.user.member_id < 4">
                      <button class="btn btn-primary">UPGRADE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-xl-4 mb-4 mb-sm-0">
                <div class="card redial-border-light redial-shadow">
                  <div class="card-body" :class="[$auth.user.member_id == 5 ? 'border border-primary' : '']">
                    <h4 class="card-title text-center">DIAMOND MEMBER</h4>
                    <ul class="list-unstyled redial-font-weight-600 text-center">
                      <li>
                        Invest and Earn
                        <hr />
                      </li>
                      <li>
                        Operate the FVIS business as a proxy globally
                        <hr />
                      </li>
                      <li>
                        Apply for a business loan
                        <hr />
                      </li>
                      <li>Free project inspection <hr /></li>
                      <li>Real Estates Development Project Award <hr /></li>
                      <li>Talent Development <hr /></li>
                      <li>Free Credit Score Check <hr /></li>
                    </ul>
                    <div class="clearfix"></div>
                    <div class="d-flex justify-content-center" v-if="$auth.user.member_id == 5">
                      <button class="btn btn-success">ACTIVE</button>
                    </div>
                    <div class="d-flex justify-content-center" v-else-if="$auth.user.member_id < 5">
                      <button class="btn btn-primary">UPGRADE</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-sm-6 col-xl-4">
                <div class="card redial-border-light redial-shadow">
                  <div class="card-body" :class="[$auth.user.member_id == 6 ? 'border border-primary' : '']">
                    <h4 class="card-title text-center">PLATINUM MEMBER</h4>
                    <ul class="list-unstyled redial-font-weight-600 text-center">
                      <li>Fixed Income Investment <hr /></li>
                      <li>Project Financing(1,000,000 and Above) <hr /></li>
                      <li>Personal Loans <hr /></li>
                      <li>Loan Facility (501,000 to 2,000,000) <hr /></li>
                      <li>Advert Placement on our platforms <hr /></li>
                      <li>Talent Development <hr /></li>
                      <li>Free Credit Score Check <hr /></li>
                    </ul>
                    <div class="clearfix"></div>
                    <div class="d-flex justify-content-center" v-if="$auth.user.member_id == 6">
                      <button class="btn btn-success">ACTIVE</button>
                    </div>
                    <div class="d-flex justify-content-center" v-else-if="$auth.user.member_id < 6">
                      <button class="btn btn-primary">UPGRADE</button>
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
import Header from '~/components/userdash/Header'
import Nav from '~/components/userdash/Nav'
import Breadcrumb from '~/components/userdash/Breadcrumb'
export default {
  layout: 'userdashboard',
  components: {
    Header,
    Nav,
    Breadcrumb
  },
  beforeMount() {
    this.$store.commit('navigationmenu/RESET_MENU_TOGGLE')
  }
}
</script>

<style scoped>
.card-body {
  flex: 1 1 auto;
  min-height: 450px !important;
  padding: 1.25rem;
}
</style>