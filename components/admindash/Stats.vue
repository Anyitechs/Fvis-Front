<template>
  <div class="card redial-border-light redial-shadow mb-4">
    <div class="card-body d-lg-flex justify-content-center d-block">
      <div
        class="media d-block d-lg-flex redial-brd-right mr-xl-4 mr-0 text-center text-lg-left mb-4 mb-lg-0"
      >
        <div class="d-lg-flex h1 mb-0 redial-primary align-self-center">
          <i class="fad fa-stream"></i>
        </div>
        <div class="media-body mx-xl-5 mx-lg-4 mx-0">
          <div class="chart sparkline spark1"></div>
          <p class="mb-0">
            <strong class="redial-dark">{{ numPending }}</strong> Total Pending Loan
          </p>
        </div>
      </div>
      <div
        class="media d-block d-lg-flex redial-brd-right mr-xl-4 mr-0 text-center text-lg-left mb-4 mb-lg-0"
      >
        <div class="d-lg-flex h1 mb-0 redial-cyan align-self-center">
          <i class="fas fa-badge-check"></i>
        </div>
        <div class="media-body mx-xl-5 mx-lg-4 mx-0">
          <div class="chart sparkline spark2"></div>
          <p class="mb-0">
            <strong class="redial-dark">{{ numActive }}</strong> Total Active Loan
          </p>
        </div>
      </div>
      <div class="media d-block d-lg-flex text-center text-lg-left">
        <div class="d-lg-flex h1 mb-0 redial-drank align-self-center">
          <i class="fas fa-users"></i>
        </div>
        <div class="media-body mx-xl-5 mx-lg-4 mx-0">
          <div class="chart sparkline spark3"></div>
          <p class="mb-0">
            <strong class="redial-dark">{{ users }}</strong> Total Number of Users
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numPending: '',
      numActive: '',
      users: '',
      loans: ''
    }
  },
  async fetch() {
    const statistics = await this.$axios.$get(
      'https://resource.fvisng.com/api/admin/stats/5'
    )
    if (statistics.success == true) {
      this.numPending = statistics.numPending
      this.numActive = statistics.numActive
      this.users = statistics.users
      this.loans = statistics.loans.data
    }
  }
}
</script>
