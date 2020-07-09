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
                <h1
                  class="text-custom-white lh-default fw-600"
                >COVID-19 Philanthropic exercise in Benin City, Edo State, Nigeria (Day 2)</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/news" class="text-custom-white">News</NuxtLink>
                  </li>
                  <li
                    class="text-custom-white text-white active"
                  >COVID-19 Philanthropic exercise in Benin City, Edo State, Nigeria (Day 2)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="section-padding bg-gray">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="blog-detail padding-20">
              <!-- article -->
              <article class="post">
                <div class="post-wrapper">
                  <div class="blog-img animate-img mb-xl-20">
                    <NuxtLink to="/news/1">
                      <img src="/news/phil.jpeg" class="image-fit" alt="img" />
                    </NuxtLink>
                  </div>
                  <div class="blog-meta">
                    <div class="post-meta-box">
                      <div class="post-meta mb-xl-20">
                        <div class="author-img">
                          <img src="/news/nophoto.jpg" class="rounded-circle" alt="image" />
                        </div>
                        <div class="author-meta">
                          <h6 class="no-margin">
                            <span class="text-custom-black">Admin</span>
                          </h6>
                          <p class="no-margin text-light-grey">
                            <NuxtLink to="/news" class="text-light-grey">News</NuxtLink>| 15 April, 2020
                          </p>
                        </div>
                      </div>
                    </div>
                    <p
                      class="text-light-white"
                    >On Wednesday 15th April 2020, Apst. (Dr.) Osas Johnson, the COO of FVIS Nigeria led his team again on another philanthropic exercise, as they visited 5 major areas in the rural axes with relief items which included; Rice, BEANS, GARRI, Palm Oil, Groundnut Oil, packs of Maggi seasoning Cubes, SACHET TOMATOES, Onion, Salt, Etcetera, all packed in polythene bags.</p>
                    <p
                      class="text-light-white"
                    >Strategic locations in the Benin Metropolis, where these items were distributed included; Ugbiyoko, Asoro, Ogida Qtrs, Siluko Road, Ogida Barracks and its environs. Residents in these areas were super-excited receiving those items and expressed their innermost gratitude, showering them with prayers and words of encouragement.</p>
                    <p
                      class="text-light-white"
                    >The team also made a stop at the Edo Correctional Facility, a.k.a OKOH Prison, where they were warmly received by some of the senior ranking officers, who received the items on behalf of the Officer-In-Charge and the entire inmates expressing their joy and appreciation for deeming it fit to remember them in such a critical season as this.</p>
                    <p
                      class="text-light-white"
                    >The exercise yielded great results than expected, as over 400 families were reached (in their streets, homes, vehicles, work place) etcetera. Nonetheless, there's still a wide-range of people in dire need of our support, who have not been reached, due to limited resources.</p>
                    <blockquote class="mb-xl-20">
                      <p
                        class="text-custom-black fw-600"
                      >"Corona Virus might be a deadly disease, but HUNGER and fear do not only distort the body, it destroys our economy and the future of a Nation."</p>
                    </blockquote>
                    <p
                      class="text-light-white"
                    >We understand and appreciate the fact that the Nigeria government is doing their best, pulling strings to eradicate the Covid-19 disease, however, we are using this medium to remind the authorities to have the less privileged, needy on their list.</p>
                    <p
                      class="text-light-white"
                    >Please know this that anything you can support with will be greatly appreciated and will serve a great purpose, even $1 can afford a meal for one of these less privileged.</p>
                    <p
                      class="text-light-white"
                    >Thus we call on Government entities, NGOs, well-meaning Nigerians at home and in diaspora, foreigners, and international bodies to join hands with us to provide to as many needy as possible, especially the less privileged, who we believe have suffered the most due to the COVID-19 PANDEMIC that has held the whole Nation to a standstill.</p>
                    <p
                      class="text-light-white"
                    >Once again on behalf the Team, our deepest gratitude goes to God for the privilege to serve humanity, and to FVIS and MPCNi for making this exercise a huge success.</p>
                    <p class="text-light-white">
                      For enquiries &amp; Sponsorship kindly CALL or WRITE:
                      <br />Cell:
                      <a href="tel:+2348129661647">+2348129661647</a>
                      <br />Email:
                      <a href="mailto:contact@fvisng.com">contact@fvisng.com</a>
                      <br />God bless FVIS and MPCNi.
                      <br />
                      <strong>May God bless the Federal Republic of Nigeria!</strong>
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>
<script>
import Header from '~/components/frontend/Header'
import Footer from '~/components/frontend/Footer'
export default {
  components: {
    Header,
    Footer
  },
  head() {
    return {
      title:
        'COVID-19 Philanthropic exercise in Benin City, Edo State, Nigeria (Day 2) - Fvis Nig',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'On Wednesday 15th April 2020, Apst. Johnson led his team again on another philanthropic exercise, as they visited 5 major areas in the rural axes with relief items'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
