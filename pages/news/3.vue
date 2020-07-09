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
                >Third Edition of philanthropic Exercise</h1>
                <ul class="custom">
                  <li>
                    <NuxtLink to="/news" class="text-custom-white">News</NuxtLink>
                  </li>
                  <li
                    class="text-custom-white text-white active"
                  >Third Edition of philanthropic Exercise</li>
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
                      <img src="/news/pandemic.jpeg" class="image-fit" alt="img" />
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
                            <NuxtLink to="/news" class="text-light-grey">News</NuxtLink>| 26 April, 2020
                          </p>
                        </div>
                      </div>
                    </div>
                    <p
                      class="text-light-white"
                    >Amidst the <strong>COVID 19 PANDEMIC,</strong> the global death increase, and the fear it spreads in the hearts of the people; my team and I once again defiled the odds and came out on <strong>SUNDAY 19TH APRIL 2020</strong> to reach out to the most vulnerable in the Land, finds it difficult not only to cope but to feed their families during this crises.</p>
                    <p class="text-light-white">
                      On this very philanthropic exercise, it became necessary to touch other key areas in the Benin Metropolis, based on the demands we had coming from residents in such locations via our <strong>social media accounts.</strong>
                      Food packs of over four hundred(400) containing RICE, BEANS, GARRI, SACHET TOMATOES, SALT PACKS, &amp; ONION, where distributed to families in dare need in these key areas; <strong>Akpata (EGOR), St. Saviour (Upper Sakponba), Umelu Community (Upper), GIWA AMU (GRA), Iyekogba (Airport Road), Ekosodin (Behind UNIBEN, Ugbowo), Ovbiogie Community, Ekiadolor Community (After Benin Bypass), Mela Motel Qtrs (Uselu), Upper Lawani (NEW BENIN), Akpakpava, Etcetera.</strong>
                    </p>
                    <p class="text-light-white">
                      Again, we are glad that we are able to put smiles on the faces of people at this time whose means of livelihood have been grossly affected by the lockdown.
                      We urge all well meaning Nigerians, corporate organisations and the organized private sector to "be our brothers keeper." These are perilous times and a little kindness will do.
                      It is said that a little drop’s of water makes a mighty ocean.
                    </p>
                    <p class="text-light-white">
                      We urge you all to stay safe, maintain personal hygiene, avoid crowded places, seek medical attention if you feel sick even if it a slight cough or fever, take responsibility. This too shall pass!
                      Once again on behalf of my TEAM and I, my deepest gratitude is to God Almighty, FVIS and MPCNi, for making this exercise a huge success.
                    </p>
                    <p class="text-light-white">
                      For enquiries &amp; Sponsorship kindly CALL/TEXT:
                      <br />Cell:
                      <a href="tel:+2348129661647">+2348129661647</a>
                      <br />Email:
                      <a href="mailto:contact@fvisng.com">contact@fvisng.com</a>
                      <br />FACEBOOK:
                      <a
                        href="https://facebook.com/peter.ozeze"
                        target="_blank"
                      >FVIS Investment Ltd</a>
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
        'Third Edition of philanthropic Exercise - Fvis Nig',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Amidst the COVID 19 PANDEMIC, the global death increase, and the fear it spreads in the hearts of the people'
        }
      ]
    }
  },
  beforeMount() {
    this.$store.commit('frontmenu/RESET_MENU_TOGGLE')
  }
}
</script>
