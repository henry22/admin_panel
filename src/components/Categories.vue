<template lang="html">
  <div class="category">
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <ul class="nav navbar-top-links navbar-left hidden-xs">
              <li>
                <form role="search" class="app-search hidden-xs">
                  <input type="text" placeholder="Search Category..." class="form-control" id="category-search">
                  <button type="submit" class="searchBtn"><i class="fa fa-search"></i></button>
                </form>
              </li>
            </ul>
          </div>
          <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12">
            <div type="button" class="add-button pull-right m-r-40 m-t-10 btn-rounded btn-outline waves-effect waves-light" data-target="#editCategoryModal" data-toggle="modal" @click="createCategory">
              <span class="plus-icon"></span>
            </div>
          </div>
        </div>
        <div class="row" v-masonry transition-duration="0.3s" item-selector=".item">
          <div class="col-md-3 col-xs-12 col-sm-6 item" v-for="(category, index) in categories" v-masonry-tile>
            <div class="white-box">
              <h4>{{category.name}}</h4>
              <p>
                <span>
                  <i class="ti-user"></i> Description: {{category.desc}}
                </span>
              </p>

              <img class="img-responsive" :src="baseUrl + '/photos/' + category.avatar + '/original'" alt="image" id="avatar">

              <button class="btn btn-primary btn-rounded waves-effect waves-light m-t-10" data-target="#editCategoryModal" data-toggle="modal" @click="editCategory(category)">
                <i class="ti-marker-alt"></i> Edit
              </button>
              <button class="btn btn-danger btn-rounded waves-effect waves-light m-t-10" @click="deleteCategory(category.id)">
                <i class="ti-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>

        <PopupDialog :category="editableCategory"></PopupDialog>
      </div>
    </div>
  </div>
</template>

<script>
import PopupDialog from './PopupDialog'
import {mapGetters} from 'vuex'
import {BASE_URL} from '../store/api_config.js'

import Vue from 'vue'
import VueMasonryPlugin from 'vue-masonry';

Vue.use(VueMasonryPlugin)

export default {
  components: {
    PopupDialog
  },
  computed: {
    ...mapGetters({
      categories: 'getCategory',
      getPhoto: 'getPhoto'
    })
  },
  created: function() {
    this.$store.dispatch('getCategories')
  },
  methods: {
    createCategory() {
      this.editableCategory = {}
    },
    editCategory(category) {
      this.editableCategory = category
    },
    deleteCategory(deleteId) {
      this.$store.dispatch('deleteCategories', deleteId)
    }
  },
  data() {
    return {
      baseUrl: BASE_URL,
      editableCategory: {}
    }
  }
}

</script>


<style lang="sass" scoped>

@mixin add_button
  display: block
  float: right
  width: 40px
  height: 40px
  background: #32ebc7
  border-radius: 50%
  cursor: pointer
  position: relative
  transition: transform .2s ease-in-out, background .2s ease-in-out

@mixin plus_icon
  display: block
  height: 2px
  width: 16px
  background: #fff
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

@mixin plus_icon_after
  content: ''
  display: block
  height: 16px
  width: 2px
  background: #fff
  position: absolute
  top: 50%
  left: 50%
  margin: -8px -1px

#avatar
  width: 40%
  height: 40%
  display: block
  margin: 0 auto

.bg-title
  line-height: 50px

#category-search
  border: 1px solid #4c5667
  margin-top: 0

#editButton
  background-color: #3498DB
  border: none
  color: #fff
  &:hover
    background-color: #2980B9

.plus-icon
  +plus_icon
  &:after
    +plus_icon_after

.add-button
  +add_button
  &:hover
    transform: scale(1.25)
  &:hover + .label
    opacity: 1
    visibilty: visible
    transform: translateX(0)
  &:active
    transform: scale(0.8)

.searchBtn
  position: absolute
  top: 0
  right: 0
  background: none
  border: 0

</style>
