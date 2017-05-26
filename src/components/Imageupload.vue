<template lang="html">
  <div class="white-box">
    <label for="input-file-now">Your so fresh input file — Default version</label>
    <input type="file" id="input-file-now" class="dropify" @change="processFile($event)">
  </div>
</template>

<script>

export default {
  methods: {
    processFile(event) {
      //this.$store.dispatch('postPhotos', event.target.files[0])
      this.$store.dispatch('saveLocalFile', event.target.files[0])
    }
  }
}

$(document).ready(function(){
  $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Dropify/0.2.2/css/dropify.min.css" type="text/css" />');
  $('.dropify').dropify();
});
</script>

<style lang="css" scoped>

</style>
