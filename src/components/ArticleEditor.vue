<template lang="html">
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-info">
            <div class="panel-wrapper collapse in" aria-expanded="true">
              <div class="panel-body">
                <form action="#">
                  <div class="form-body">
                    <h3 class="box-title">Article</h3>
                    <hr>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="control-label">Title</label>
                          <input type="text" id="firstName" class="form-control" placeholder="Article title">
                        </div>
                      </div>
                    </div>

                    <h3 class="box-title m-t-40">Description</h3>

                    <div class="row">
                      <div class="col-md-12 ">
                        <div class="form-group">
                          <textarea class="form-control" rows="4">Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. but the majority have suffered alteration in some form, by injected humour
                          </textarea>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <h3 class="box-title m-t-20">Upload Image</h3>
                        <ImageUpload></ImageUpload>
                      </div>
                    </div>
                    <hr>
                  </div>

                  <div class="form-actions m-t-40">
                    <button type="submit" class="btn btn-success"> <i class="fa fa-check"></i> Save</button>
                    <button type="button" class="btn btn-default">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageUpload from './ImageUpload'

export default {
  components: {
    ImageUpload
  }
}
</script>

<style lang="sass" scoped>
.panel-blue .panel-heading,
.panel-info .panel-heading
  background-color: #01c65d
</style>
