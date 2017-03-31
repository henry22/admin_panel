<template lang="html">
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 ol-md-6 col-xs-12">
            <div class="white-box">
              <h3 class="box-title">File Upload1</h3>
              <label for="input-file-now">Your so fresh input file — Default version</label>
              <input type="file" id="input-file-now" class="dropify" />
            </div>
        </div>
      </div>
    </div>
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
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove:  'Supprimer',
            error:   'Désolé, le fichier trop volumineux'
        }
    });

    // Used events
    var drEvent = $('#input-file-events').dropify();

    drEvent.on('dropify.beforeClear', function(event, element){
        return confirm("Do you really want to delete \"" + element.file.name + "\" ?");
    });

    drEvent.on('dropify.afterClear', function(event, element){
        alert('File deleted');
    });

    drEvent.on('dropify.errors', function(event, element){
        console.log('Has Errors');
    });

    var drDestroy = $('#input-file-to-destroy').dropify();
    drDestroy = drDestroy.data('dropify')
    $('#toggleDropify').on('click', function(e){
        e.preventDefault();
        if (drDestroy.isDropified()) {
            drDestroy.destroy();
        } else {
            drDestroy.init();
        }
    })
  });
</script>

<style lang="css">

</style>
