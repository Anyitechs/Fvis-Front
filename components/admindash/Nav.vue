<template>
  <nav id="sidebar" :class="'card redial-border-light px-2 mb-4 ' + menutoggle">
    <div class="sidebar-scrollarea">
      <ul class="metismenu list-unstyled mb-0" id="menu">
        <li>
          <NuxtLink to="/admin">
            <i class="fa fa-dashboard pr-1"></i> Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/packages">
            <i class="icofont icofont-package pr-1"></i> Packages
          </NuxtLink>
        </li>
        <li :class="loanactive">
          <a
            class="has-arrow"
            style="cursor: pointer"
            @click="loansdrop"
            data-toggle="collapse"
            :aria-expanded="loanactive == 'active' ? true : false">
            <i class="icofont icofont-pay pr-1"></i> Loans
          </a>
          <ul :class="loanstyle" :aria-expanded="loanactive == 'active' ? true : false">
            <li>
              <NuxtLink to="/admin/loans">All Loans</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/loans/active">Active Loans</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/loans/pending">Pending Loans</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/loans/overdue">Overdue Loans</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/loans/paid">Paid Loans</NuxtLink>
            </li>
          </ul>
        </li>
        <li :class="active">
          <a
            class="has-arrow"
            style="cursor: pointer"
            @click="realdrop"
            data-toggle="collapse"
            :aria-expanded="aria"
          >
            <i class="icofont icofont-ebook pr-1"></i> Posts
          </a>
          <ul :class="stylein" :aria-expanded="aria">
            <li>
              <NuxtLink to="/admin/posts/create">Add Post</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/posts/addCat">Add Category</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/posts">List Posts</NuxtLink>
            </li>
          </ul>
        </li>
        <li :class="galleryactive">
          <a
            class="has-arrow"
            style="cursor: pointer"
            @click="galleryrealdrop"
            data-toggle="collapse"
            :aria-expanded="galleryactive == 'active' ? true : false"
          >
            <i class="icofont icofont-camera-alt pr-1"></i> Gallery
          </a>
          <ul :class="gallerystylein" :aria-expanded="galleryactive == 'active' ? true : false">
            <li>
              <NuxtLink to="/admin/gallery/create">Add Gallery</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/admin/gallery/listgallery">List Galleries</NuxtLink>
            </li>
          </ul>
        </li>
        <li>
          <NuxtLink to="/admin/manageusers">
            <i class="icofont icofont-users pr-1"></i> Manage Users
          </NuxtLink>
        </li>
        <hr />
        <li>
          <a @click="logout" style="cursor: pointer">
            <i class="icofont icofont-sign-out pr-1"></i> Logout
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      active: '',
      stylein: 'list-unstyled collapse',
      aria: false,
      galleryactive: '',
      gallerystylein: 'list-unstyled collapse',
      loanactive: '',
      loanstyle: 'list-unstyled collapse'
    }
  },
  computed: {
    menutoggle() {
      return this.$store.state.navigationmenu.toggle
    }
  },
  methods: {
    realdrop() {
      if (this.active == 'active') {
        this.active = ''
        this.stylein = 'list-unstyled collapse'
        this.aria = false
      } else if (this.active == '') {
        this.active = 'active'
        this.stylein = 'list-unstyled collapse in'
        this.aria = true
      }
    },
    galleryrealdrop() {
      if (this.galleryactive == 'active') {
        this.galleryactive = ''
        this.gallerystylein = 'list-unstyled collapse'
      } else if (this.galleryactive == '') {
        this.galleryactive = 'active'
        this.gallerystylein = 'list-unstyled collapse in'
      }
    },
    loansdrop() {
      if (this.loanactive == 'active') {
        this.loanactive = ''
        this.loanstyle = 'list-unstyled collapse'
      } else if (this.loanactive == '') {
        this.loanactive = 'active'
        this.loanstyle = 'list-unstyled collapse in'
      }
    },
    async logout() {
      this.$auth.logout()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>