<template lang="html">
  <div class="white-box">
    <label for="input-file-now">Your so fresh input file — Default version</label>
    <!-- <div class="dropify-wrapper">
      <div class="dropify-message">
        <span class="file-icon"></span>
        <p>Drag and drop a file here or click</p>
        <p class="dropify-error">Ooops, something wrong appended</p>
      </div>
      <div class="dropify-loader"></div>
      <div class="dropify-errors-container">
        <ul></ul>
      </div>
      <input type="file" id="input-file-now" class="dropify" />
      <button type="button" class="dropify-clear">Remove</button>
      <div class="dropify-preview">
        <span class="dropify-render"></span>
        <div class="dropify-infos">
          <div class="dropify-infos-inner">
            <p class="dropify-filename">
              <span class="file-icon"></span>
              <span class="dropify-filename-inner"></span>
            </p>
            <p class="dropify-infos-message">Drag and drop or click to replace</p>
          </div>
        </div>
      </div>
    </div> -->
    <input type="file" id="input-file-now" class="dropify" />
  </div>
</template>

<script>
export default {
}
</script>

<script>
  $(document).ready(function(){
    // Basic
    $('.dropify').dropify();

    // Translated
    // $('.dropify-fr').dropify({
    //     messages: {
    //         default: 'Glissez-déposez un fichier ici ou cliquez',
    //         replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
    //         remove:  'Supprimer',
    //         error:   'Désolé, le fichier trop volumineux'
    //     }
    // });

    // Used events
    // var drEvent = $('#input-file-events').dropify();
    //
    // drEvent.on('dropify.beforeClear', function(event, element){
    //     return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
    // });
    //
    // drEvent.on('dropify.afterClear', function(event, element){
    //     alert('File deleted');
    // });
    //
    // drEvent.on('dropify.errors', function(event, element){
    //     console.log('Has Errors');
    // });
    //
    // var drDestroy = $('#input-file-to-destroy').dropify();
    // drDestroy = drDestroy.data('dropify')
    // $('#toggleDropify').on('click', function(e){
    //     e.preventDefault();
    //     if (drDestroy.isDropified()) {
    //         drDestroy.destroy();
    //     } else {
    //         drDestroy.init();
    //     }
    // })
  });
</script>

<style lang="css">
</style>
