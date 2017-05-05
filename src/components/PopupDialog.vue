<template lang="html">
  <div class="modal fade" id="editCategoryModal" tabindex="-1" role="dialog" aria-labelledby="editCategoryModalLabel1" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 class="modal-title" id="editCategoryModalLabel1">New category</h4>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label class="control-label">Image</label>
              <img class="img-responsive" :src="baseUrl + '/photos/' + avatar + '/original'" alt="image" id="avatar">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="control-label">Title</label>
              <input type="text" class="form-control" id="recipient-name1" v-model="name">
            </div>
            <div class="form-group">
              <label for="message-text" class="control-label">Description:</label>
              <textarea class="form-control" id="message-text1" v-model="desc"></textarea>
            </div>

            <div class="row">
              <div class="col-md-12">
                <h3 class="box-title m-t-20">Upload Image</h3>
                <ImageUpload></ImageUpload>
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary" data-dismiss="modal" @click="saveCategory({name, desc, avatar, id})">Save Category</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Categories from './Categories'
import ImageUpload from './ImageUpload'
import {BASE_URL} from '../store/api_config.js'

export default {
  watch: {
    category: function() {
      console.log(this.category)
      this.id = this.category.id
      this.name = this.category.name
      this.desc = this.category.desc
      this.avatar = this.category.avatar
    }
  },
  props: {
    category: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    ImageUpload
  },
  methods: {
    saveCategory(editedCategory) {
      console.log(editedCategory)
      if(typeof editedCategory.id === 'undefined') {
        this.$store.dispatch('postCategories', editedCategory)
        // this.name = ''
        // this.desc = ''
        // this.avatar = ''
      } else {
        this.$store.dispatch('patchCategories', editedCategory)
        // this.name = ''
        // this.desc = ''
        // this.avatar = ''
      }
    }
  },
  data: function() {
    return {
      id: this.category.id,
      name: this.category.name,
      desc: this.category.desc,
      avatar: this.category.avatar,
      baseUrl: BASE_URL
    }
  }
}
</script>

<style lang="css">
</style>
