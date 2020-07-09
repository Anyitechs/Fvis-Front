<template>
  <section class="download-app bg-white">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-padding-top">
            <h3 class="text-dark fw-700 text-center">Get Faster Access From Any Device, Anywhere.</h3>
          </div>
          <div class="app-img d-flex justify-content-center">
            <a href="#">
              <img src="/assets/images/android-soon.webp" class="img-fluid" alt="app" />
            </a>
            <a href="#">
              <img src="/assets/images/ios-soon.webp" class="img-fluid" alt="app" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.download-app {
  background-image: none;
}
.download-app:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: none !important;
  top: 0;
  left: 0;
  bottom: 0;
  opacity: 0.5;
}
</style>

