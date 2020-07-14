<template>
  <section class="section-padding loan-faqs-sec bg-light-white findrate-top">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-6 align-self-center">
          <div class="section-header">
            <div class="section-heading">
              <h3 class="text-custom-black fw-700">Our FAQs</h3>
              <div class="section-description">
                <p class="text-light-white no-margin">
                  Still have questions?
                  <br/>Our Client Success Team is always here to help
                </p>
              </div>
            </div>
          </div>
          <div class="loan-faqs-leftside mb-md-80">
            <div class="support-card mb-xl-20">
              <div class="support-user">
                <img src="assets/images/faq-user.png" class="image-fit" alt="img"/>
              </div>
              <div class="links text-center mb-xl-20">
                <a href="mailto:support@fvisng.com">support@fvisng.com</a>
                <a href="tel:+2348129661647">+234 812 966 1647</a>
                <a style="color: #0070ba" @click="tawkto">Chat with us</a>
              </div>
            </div>
            <button @click="tawkto" class="btn-first btn-submit-fill">Chat With Us</button>
          </div>
        </div>
        <div class="col-xl-7 col-lg-6 align-self-center">
          <div id="accordion" class="faqs-accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <button
                  @click="showfaq1"
                  :class="'collapsebtn ' + faq1class"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                >WHAT TYPE OF LOAN DO YOU OFFER?
                </button>
              </div>
              <div id="collapseOne" :class="faq1" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>We offer personal, corporate loans and Business loans for businesses that are already in
                        operation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <button
                  @click="showfaq2"
                  :class="'collapsebtn ' + faq2class"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                >WHAT ARE YOUR LOAN REQUIREMENTS?
                </button>
              </div>
              <div id="collapseTwo" :class="faq2" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white no-margin"
                  >
                    <strong>For Our personal loan</strong>
                    <ul>
                      <li>
                        You should be between 22 and 55 years.
                      </li>
                      <li>
                        Applicant must live and/or do business/work in Lagos, Ogun, Edo States & FCT.
                      </li>
                      <li>
                        You must have a verifiable monthly income or Be employed (for at least 6 months).
                      </li>
                      <li>
                        Have a good credit history.
                      </li>
                      <li>
                        Upto a certain amount does not require collateral but we will collect all the necessary
                        personal data.
                      </li>
                    </ul>
                    <strong>For Business Loan</strong>
                    <ul>
                      <li>
                        For our Business loan, you must have a business, the location must be within Lagos state, Ogun
                        state, Edo State and FCT Abuja
                      </li>
                      <li>
                        Your Business must have existed for atleast one year
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <button
                  @click="showfaq3"
                  :class="'collapsebtn ' + faq3class"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                >HOW MUCH CAN I BORROW?
                </button>
              </div>
              <div id="collapseThree" :class="faq3" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        Our minimum personal loan amount is N5,000 and a Maximum amount of N1,000,000.
                      </li>
                      <li>
                        How much you are personally borrow depends on your capacity to repay. We start with
                        a small loan and grow your loan offer over time as you build trust with our system.
                      </li>
                      <li>
                        Assessment is based on Credit Score, verifiable business inventory and other criteria.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFive">
                <button
                  @click="showfaq5"
                  :class="'collapsebtn ' + faq5class"
                  data-toggle="collapse"
                  data-target="#collapseFive"
                >WHAT IS YOUR INTEREST RATE?
                </button>
              </div>
              <div id="collapseFive" :class="faq5" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        Our interest rate differs depending on the loan amount. However, it is very competitive
                        <NuxtLink to="">(See the Loan Page).</NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingSix">
                <button
                  @click="showfaq6"
                  :class="'collapsebtn ' + faq6class"
                  data-toggle="collapse"
                  data-target="#collapseSix"
                >CAN I LIQUIDATE WHENEVER I WANT TO?
                </button>
              </div>
              <div id="collapseSix" :class="faq6" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        Yes, you can pay down/liquidate your existing facility at any time. The liquidation
                        amount consists of your outstanding principal, outstanding management fee and interest
                        accrued to date of liquidation.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingSeven">
                <button
                  @click="showfaq7"
                  :class="'collapsebtn ' + faq7class"
                  data-toggle="collapse"
                  data-target="#collapseSeven"
                >CAN I HAVE MORE THAN ONE LOAN RUNNING AT THE SAME TIME?
                </button>
              </div>
              <div id="collapseSeven" :class="faq7" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        No. You can only access one loan at a time.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingEight">
                <button
                  @click="showfaq8"
                  :class="'collapsebtn ' + faq8class"
                  data-toggle="collapse"
                  data-target="#collapseEight"
                >WHAT DO I NEED TO BE ELIGIBLE FOR YOUR LOANS?
                </button>
              </div>
              <div id="collapseEight" :class="faq8" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        Employment letter (Salary Earners).
                      </li>
                      <li>
                        Valid Employment ID Card (Salary Earners).
                      </li>
                      <li>
                        Verifiable source of income.
                      </li>
                      <li>
                        Bank statement for the last 6 months.
                      </li>
                      <li>
                        Good credit history.
                      </li>
                      <li>
                        One recent passport photograph.
                      </li>
                      <li>
                        Utility Bill (PHCN, Water bill, LAWMA bill OR Rent Agreement).
                      </li>
                      <li>
                        Valid Proof of Identification (current ECOWAS Passport, National Identification, Driver’s License or Voters ID).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingNine">
                <button
                  @click="showfaq9"
                  :class="'collapsebtn ' + faq9class"
                  data-toggle="collapse"
                  data-target="#collapseNine"
                >DO I NEED TO OPEN AN ACCOUNT BEFORE I CAN GET A LOAN
                </button>
              </div>
              <div id="collapseNine" :class="faq9" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        No fee or mandatory account opening is required before you can get a loan from us.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTen">
                <button
                  @click="showfaq10"
                  :class="'collapsebtn ' + faq10class"
                  data-toggle="collapse"
                  data-target="#collapseTen"
                >DO I NEED TO COME TO YOUR OFFICE TO APPLY?
                </button>
              </div>
              <div id="collapseTen" :class="faq10" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        No, your application can be made online via our secure portal. Afterwards, you will receive a mail from us confirmation receipt of your application. However, for certain amounts, you have to visit our office for approval.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingEleven">
                <button
                  @click="showfaq11"
                  :class="'collapsebtn ' + faq11class"
                  data-toggle="collapse"
                  data-target="#collapseEleven"
                >HOW DO I MAKE REPAYMENTS ON MY LOAN?
                </button>
              </div>
              <div id="collapseEleven" :class="faq11" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        Post-dated Cheques.
                      </li>
                      <li>
                        Direct Debit.
                      </li>
                      <li>
                        Standing Order/Instruction.
                      </li>
                      <li>
                        Point of Sale Terminal.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwelve">
                <button
                  @click="showfaq12"
                  :class="'collapsebtn ' + faq12class"
                  data-toggle="collapse"
                  data-target="#collapseTwelve"
                >WHAT IS THE PENALTY FOR DEFAULTING ON LOAN REPAYMENT?
                </button>
              </div>
              <div id="collapseTwelve" :class="faq12" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <strong>For us to be able to offer loans to more people, you must repay your loans when due. In the unfortunate event that you do not repay your loan on the due date, we will charge an additional default fee (5%). If you still do not repay, it will attract dire consequences including:</strong>
                    <ul>
                      <li>
                        Poor credit rating with the Credit Bureau agencies which will prevent you from ac- cessing loans from us and any other financial institution.
                      </li>
                      <li>
                        Suspension of your account on our platform which means you will no longer have access to our loan facility in the future.
                      </li>
                      <li>
                        Reporting you to State authorities.
                      </li>
                      <li>
                        Legal action: You may be charged to court for taking a loan and not wanting to pay
                        back after agreeing to the terms and conditions amongst other consequences.
                      </li>
                      <li>
                        Rather than paying late, a good option that preserves your loan history is partial repayment
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThirteen">
                <button
                  @click="showfaq13"
                  :class="'collapsebtn ' + faq13class"
                  data-toggle="collapse"
                  data-target="#collapsethirteen"
                >WHAT DO I DO IF MY SALARY IS DELAYED AND MY ACCOUNT <br>IS NOT FUNDED?
                </button>
              </div>
              <div id="collapseThirteen" :class="faq13" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        If you find that you can't make an upcoming payment, please contact us a week before your due date to work out a repayment plan.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFourteen">
                <button
                  @click="showfaq14"
                  :class="'collapsebtn ' + faq14class"
                  data-toggle="collapse"
                  data-target="#collapseFourteen"
                >IS MY DATA SAFE WITH YOU?
                </button>
              </div>
              <div id="collapseFourteen" :class="faq14" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        Yes. Your data are stored in an encrypted format and no one can have access to them
                        unless they are granted. We do not share with any other individual or institution
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingFifteen">
                <button
                  @click="showfaq15"
                  :class="'collapsebtn ' + faq15class"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                >WHY IS MY CARD INFORMATION REQUIRED?
                </button>
              </div>
              <div id="collapseFifteen" :class="faq15" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        Your card details make it easy for loan payment as we will automatically debit your card
                        when your loan is due. This method is safe because all cards come with an end to end
                        encryption this means that it cannot be accessed or decrypted by third party it can only be
                        stored. We understand that it is highly sensitive information and we have put all measures
                        in place to make our platform safe and secure.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingSixteen">
                <button
                  @click="showfaq16"
                  :class="'collapsebtn ' + faq16class"
                  data-toggle="collapse"
                  data-target="#collapseSixteen"
                >WHY IS MY BANK ACCOUNT & BVN REQUIRED?
                </button>
              </div>
              <div id="collapseSixteen" :class="faq16" data-parent="#accordion">
                <div class="card-body">
                  <div
                    class="text-light-white"
                  >
                    <ul>
                      <li>
                        Your bank account details are required for disbursal of your approved loan. Your BVN is needed for verification purposes and for certain security measures.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        faq1: 'collapse',
        faq2: 'collapse',
        faq3: 'collapse',
        faq4: 'collapse',
        faq5: 'collapse',
        faq6: 'collapse',
        faq7: 'collapse',
        faq8: 'collapse',
        faq9: 'collapse',
        faq10: 'collapse',
        faq11: 'collapse',
        faq12: 'collapse',
        faq13: 'collapse',
        faq14: 'collapse',
        faq15: 'collapse',
        faq16: 'collapse',
        faq1class: 'collapsed',
        faq2class: 'collapsed',
        faq3class: 'collapsed',
        faq4class: 'collapsed',
        faq5class: 'collapsed',
        faq6class: 'collapsed',
        faq7class: 'collapsed',
        faq8class: 'collapsed',
        faq9class: 'collapsed',
        faq10class: 'collapsed',
        faq11class: 'collapsed',
        faq12class: 'collapsed',
        faq13class: 'collapsed',
        faq14class: 'collapsed',
        faq15class: 'collapsed',
        faq16class: 'collapsed'
      }
    },
    methods: {
      tawkto() {
        window.Tawk_API.maximize()
      },
      showfaq1() {
        if (this.faq1 == 'collapse') {
          this.faq1 = 'collapse show'
          this.faq1class = ''
          this.faq2 = this.faq3 = this.faq4 = 'collapse'
        } else {
          this.faq1 = 'collapse'
          this.faq1class = 'collapsed'
        }
      },
      showfaq2() {
        if (this.faq2 == 'collapse') {
          this.faq2 = 'collapse show'
          this.faq2class = ''
          this.faq1 = this.faq3 = this.faq4 = 'collapse'
        } else {
          this.faq2 = 'collapse'
          this.faq2class = 'collapsed'
        }
      },
      showfaq3() {
        if (this.faq3 == 'collapse') {
          this.faq3 = 'collapse show'
          this.faq3class = ''
          this.faq1 = this.faq2 = this.faq4 = 'collapse'
        } else {
          this.faq3 = 'collapse'
          this.faq3class = 'collapsed'
        }
      },
      showfaq4() {
        if (this.faq4 == 'collapse') {
          this.faq4 = 'collapse show'
          this.faq4class = ''
          this.faq1 = this.faq2 = this.faq3 = 'collapse'
        } else {
          this.faq4 = 'collapse'
          this.faq4class = 'collapsed'
        }
      },
      showfaq5() {
        if (this.faq5 == 'collapse') {
          this.faq5 = 'collapse show'
          this.faq5class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq6 = this.faq7 = this.faq8 = this.faq9 = this.faq10 = this.faq11 = this.faq12 = this.faq13 = this.faq14 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq5 = 'collapse'
          this.faq5class = 'collapsed'
        }
      },
      showfaq6() {
        if (this.faq6 == 'collapse') {
          this.faq6 = 'collapse show'
          this.faq6class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq7 = this.faq8 = this.faq9 = this.faq10 = this.faq11 = this.faq12 = this.faq13 = this.faq14 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq6 = 'collapse'
          this.faq6class = 'collapsed'
        }
      },
      showfaq7() {
        if (this.faq7 == 'collapse') {
          this.faq7 = 'collapse show'
          this.faq7class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq8 = this.faq9 = this.faq10 = this.faq11 = this.faq12 = this.faq13 = this.faq14 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq7 = 'collapse'
          this.faq7class = 'collapsed'
        }
      },
      showfaq8() {
        if (this.faq8 == 'collapse') {
          this.faq8 = 'collapse show'
          this.faq8class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq7 = this.faq9 = this.faq10 = this.faq11 = this.faq12 = this.faq13 = this.faq14 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq8 = 'collapse'
          this.faq8class = 'collapsed'
        }
      },
      showfaq9() {
        if (this.faq9 == 'collapse') {
          this.faq9 = 'collapse show'
          this.faq9class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq7 = this.faq8 = this.faq10 = this.faq11 = this.faq12 = this.faq13 = this.faq14 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq9 = 'collapse'
          this.faq9class = 'collapsed'
        }
      },
      showfaq10() {
        if (this.faq10 == 'collapse') {
          this.faq10 = 'collapse show'
          this.faq10class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq7 = this.faq8 = this.faq9 = this.faq11 = this.faq12 = this.faq13 = this.faq14 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq10 = 'collapse'
          this.faq10class = 'collapsed'
        }
      },
      showfaq11() {
        if (this.faq11 == 'collapse') {
          this.faq11 = 'collapse show'
          this.faq11class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq7 = this.faq8 = this.faq9 = this.faq10 = this.faq12 = this.faq13 = this.faq14 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq11 = 'collapse'
          this.faq11class = 'collapsed'
        }
      },
      showfaq12() {
        if (this.faq12 == 'collapse') {
          this.faq12 = 'collapse show'
          this.faq12class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq7 = this.faq8 = this.faq9 = this.faq10 = this.faq11 = this.faq13 = this.faq14 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq12 = 'collapse'
          this.faq12class = 'collapsed'
        }
      },
      showfaq13() {
        if (this.faq13 == 'collapse') {
          this.faq13 = 'collapse show'
          this.faq13class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq7 = this.faq8 = this.faq9 = this.faq10 = this.faq11 = this.faq12 = this.faq14 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq13 = 'collapse'
          this.faq13class = 'collapsed'
        }
      },
      showfaq14() {
        if (this.faq14 == 'collapse') {
          this.faq14 = 'collapse show'
          this.faq14class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq7 = this.faq8 = this.faq9 = this.faq10 = this.faq11 = this.faq12 = this.faq13 = this.faq15 = this.faq16 = 'collapse'
        } else {
          this.faq14 = 'collapse'
          this.faq14class = 'collapsed'
        }
      },
      showfaq15() {
        if (this.faq15 == 'collapse') {
          this.faq15 = 'collapse show'
          this.faq15class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq7 = this.faq8 = this.faq9 = this.faq10 = this.faq11 = this.faq12 = this.faq13 = this.faq14 = this.faq16 = 'collapse'
        } else {
          this.faq15 = 'collapse'
          this.faq15class = 'collapsed'
        }
      },
      showfaq16() {
        if (this.faq16 == 'collapse') {
          this.faq16 = 'collapse show'
          this.faq16class = ''
          this.faq1 = this.faq2 = this.faq3 = this.faq4 = this.faq5 = this.faq6 = this.faq7 = this.faq8 = this.faq9 = this.faq10 = this.faq11 = this.faq12 = this.faq13 = this.faq14 = this.faq15 = 'collapse'
        } else {
          this.faq16 = 'collapse'
          this.faq16class = 'collapsed'
        }
      }


    }
  }
</script>

<style>
</style>
