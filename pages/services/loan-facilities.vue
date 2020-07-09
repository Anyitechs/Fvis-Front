<template>
  <div>
    <Header />
    <div class="sub-header p-relative">
      <div class="overlay overlay-bg-black"></div>
      <div class="pattern"></div>
      <div class="section-padding">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="sub-header-content p-relative">
                <h1 class="text-custom-white lh-default fw-600">Loan Facilities</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/" class="text-custom-white">Home</NuxtLink>
                  </li>
                  <li class="text-custom-white">Services |&nbsp;</li>
                  <li class="text-custom-white active">Loan Facilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding bg-gray our-articles">
      <div class="container">
        <div class="row">
          <ServicesAside />
          <div class="col-lg-8">
            <div class="blog-detail padding-20">
              <!-- article -->
              <div class="post-wrapper">
                <div class="blog-meta">
                  <div class="section-header">
                    <div class="section-heading">
                      <h3 class="text-custom-black fw-700">Personal Loan</h3>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-4 col-sm-12">
                      <div class="main-services-box p-relative mb-xl-30">
                        <div class="main-service-wrapper padding-20">
                          <h5 class="fw-700 mt-4 text-center">
                            <a class="text-dark">FAST CASH</a>
                          </h5>
                          <p class="text-light-white no-margin">
                            Access up to 100k in 10mins, without collateral or Bank Statement.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                          </p>
                          <div class="col-lg-12 text-center">
                            <button v-b-modal.fastcash class="btn-first btn-submit-fill">PROCEED</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-12">
                      <div class="main-services-box p-relative mb-xl-30">
                        <div class="main-service-wrapper padding-20">
                          <h5 class="fw-700 mt-4 text-center">
                            <a class="text-dark">SALARY EARNERS</a>
                          </h5>
                          <p class="text-light-white no-margin">
                            Can access up to 500k in 48hrs.
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                          </p>
                          <div class="col-lg-12 text-center">
                            <button
                              v-b-modal.salaryearners
                              class="btn-first btn-submit-fill"
                            >PROCEED</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-sm-12">
                      <div class="main-services-box p-relative mb-xl-30">
                        <div class="main-service-wrapper padding-20">
                          <h5 class="fw-700 mt-4 text-center">
                            <a class="text-dark">SME LOAN (STRICTLY FOR BUSINESS OWNERS)</a>
                          </h5>
                          <p class="text-light-white no-margin">
                            Need some quick loan to boost your business? You can access up to 2million Naira in 5-10 working days.
                            <strong>T &amp; C</strong> apply!
                          </p>
                          <div class="col-lg-12 text-center">
                            <button v-b-modal.smeloan class="btn-first btn-submit-fill">PROCEED</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <div class="section-header mt-3">
                    <div class="section-heading">
                      <h3 class="text-custom-black fw-700">FVIS Corporate Loan Solutions</h3>
                    </div>
                  </div>
                  <p class="text-light-white">
                    At FVIS, we provide the right corporate loans solutions, which can make all the difference in your business
                    We understand business trends and provide financial solutions to help businesses focus on growth, generate more revenue and overcome short-term and long-term financial hurdles. We devote ourselves to providing global investors and businesses with all-round sustainable financial services including Corporate Loans.
                  </p>
                  <p
                    class="text-light-white"
                  >No matter what your business needs to transform and grow, the right financing makes all the difference. Our Corporate loans can help your business expansions, meet your day-to-day expenses, fund your working capital requirement, cover unexpected business expenses, help in your employees training, as part of Human Capital development and ultimately help your business to grow and succeed.</p>
                  <p class="text-light-white">How You can benefit from our Corporate Loans</p>
                  <ul>
                    <li>funds a new branch of your business in a choice location</li>
                    <li>Increase your staff strength and improve employee development</li>
                    <li>Increase your supplies or inventory to upscale your sales goals</li>
                    <li>Cover unexpected repairs of damaged work machines or equipment</li>
                    <li>Set up employees’ rewards program to boost morals and motivate them</li>
                    <li>Upgrade to new technologies for business growth</li>
                    <li>Invest in marketing and advertising campaigns to reach new customers</li>
                    <li>Much more.</li>
                  </ul>
                  <h5 class="fw-700 mt-4 text-center">
                    <a class="text-dark">How to Apply</a>
                  </h5>

                  <p
                    class="text-light-white"
                  >As a trailblazer in business funding in over 8 countries and still counting, we simplify the application and approval processes. Apply online and our team of experts will reach out to you to guide and recommend what will best suit your business need.</p>
                  <div class="col-lg-12 text-center">
                    <NuxtLink to="/register">
                      <button class="btn-first btn-submit-fill">APPLY NOW</button>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    <b-modal id="fastcash" title="Fast Cash Loan" hide-footer>
      <p class="my-4">Requirements: BVN, Contact Information, Passport Photograph</p>
      <ul>
        <li>Requires: Online Screening (ONLY).</li>
        <li>Interest rate: 8 - 15%.</li>
        <li>Loan tenure: 5 to 28 days.</li>
        <li>Duration of Loan Approval: If approved loan can be disbursed within 24 hours of application.</li>
        <li>Early Repayment: 2% bonus.</li>
        <li>Late Penalty Fee: Attracts 5% charge Daily after due date.</li>
        <li>Repayment channels: Direct debit, Quick teller, Cash &amp; Online Transfer.</li>
      </ul>
      <div class="col-lg-12 text-center">
        <NuxtLink to="/register">
          <button class="btn-first btn-submit-fill">APPLY NOW</button>
        </NuxtLink>
      </div>
    </b-modal>
    <b-modal id="salaryearners" title="Salary Earners" hide-footer>
      <p class="my-4">Requirements: BVN, Contact Information, Passport Photograph</p>
      <ul>
        <li>Other Basic Requirements: Employment letter, salary account, pension account or tax ID, Valid ID, Utility bill and 3 months bank statement, signed and sealed by the applicant’s bank.</li>
        <li>Requires: Online &amp; Onsite Screening.</li>
        <li>Estimated Time of Loan Processing: 48-72hours</li>
        <li>Interest rate: 15 - 25%.</li>
        <li>Loan tenure: 14 to 2 months.</li>
        <li>Mode of Payment: Payment can be accepted on 3 Instalment</li>
        <li>Early Repayment: 2% bonus.</li>
        <li>Late Penalty Fee: Attracts 5% charge Daily after due date.</li>
        <li>Repayment channels: Direct debit, Quick teller, Cash &amp; Online Transfer.</li>
      </ul>
      <div class="col-lg-12 text-center">
        <NuxtLink to="/register">
          <button class="btn-first btn-submit-fill">APPLY NOW</button>
        </NuxtLink>
      </div>
    </b-modal>
    <b-modal id="smeloan" title="Salary Earners" hide-footer>
      <p class="my-4">Requirements: BVN, Contact Information, Passport Photograph</p>
      <ul>
        Requirements: BVN, Contact Information, Passport Photograph
        <li>Other Basic Requirements: Employment letter, salary account, pension account or tax ID, Valid ID, Utility bill and 3 months bank statement, signed and sealed by the applicant’s bank.</li>
        <li>Collateral Needed: 150% of the loan applied for.</li>
        <li>Platform: Internet &amp; Mobile App.</li>
        <li>Requires: Online &amp; Onsite Screening.</li>
        <li>Estimated Time of Loan Processing: 7 – 14 days.</li>
        <li>Collateral Needed: 200% of the loan applied for.</li>
        <li>Interest rate: 18 - 30%.</li>
        <li>Loan tenure: 1 to 5 Months.</li>
        <li>Mode of Payment: Payment can be accepted on 5 Instalment.</li>
        <li>Late Penalty Fee: Attracts 5% charge Daily after due date.</li>
        <li>Early Repayment 2% bonus.</li>
        <li>Repayment channels: Direct debit, Quick teller, Cash &amp; Online Transfer.</li>
        <li>Other TERMS &amp; CONDITIONS applies also.</li>
      </ul>
      <div class="col-lg-12 text-center">
        <NuxtLink to="/register">
          <button class="btn-first btn-submit-fill">APPLY NOW</button>
        </NuxtLink>
      </div>
    </b-modal>
  </div>
</template>

<script>
import Header from '~/components/frontend/Header'
import Footer from '~/components/frontend/Footer'
import ServicesAside from '~/components/frontend/ServicesAside.vue'

export default {
  components: {
    Header,
    Footer,
    ServicesAside
  },
  head() {
    return {
      title: 'Loan Facilities - Services',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'We open up a world of loan facilities to satisfy your specific requirements. Whether you need committed facilities, retail credit accounts, revolving credit, term loans, or letters of credit, FVIS INVESTMENT LTD provides it all.'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
<style scoped>
.main-services-box:hover .main-service-wrapper p,
.main-services-box:hover .main-service-wrapper h5 a {
  color: #ffffff !important;
}
</style>