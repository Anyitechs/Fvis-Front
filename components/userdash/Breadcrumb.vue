<template>
  <div class="redial-relative mt-80">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-2 align-self-center my-3 my-lg-0">
          <h6 class="text-uppercase redial-font-weight-700 redial-light mb-0 pl-2"><slot name="pagetitle"></slot></h6>
        </div>
        <div class="col-12 col-md-4 align-self-center">
          <div class="float-sm-left float-none mb-4 mb-sm-0">
            <slot name="breadlinks"></slot>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="clearfix d-none d-md-inline">
            <div class="float-sm-right float-none">
              <ul class="list-inline mb-0">
                <li class="list-inline-item h4 mb-0 redial-brd-right py-3 px-3 mr-0">
                  <a href="#" class="redial-dark">
                    <span class="lnr lnr-move"></span>
                  </a>
                </li>
                <li class="list-inline-item h4 mb-0 redial-brd-right py-3 px-3 mr-0">
                  <a href="#" class="redial-dark">
                    <span class="lnr lnr-sync"></span>
                  </a>
                </li>
                <li class="list-inline-item px-3 mr-0">
                  <small class="font-weight-bold">Language :</small>
                </li>
                <li class="list-inline-item mr-0 bg-transparent">
                  <select class="form-control">
                    <option>English</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>