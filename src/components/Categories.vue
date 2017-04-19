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
            <div class="add-button pull-right m-r-40 m-t-10 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light" data-target="#exampleModal" data-toggle="modal">
              <span class="plus-icon"></span>
            </div>
          </div>
        </div>
        <div class="row" v-masonry transition-duration="0.3s" item-selector=".item">
          <div class="col-md-3 col-xs-12 col-sm-6 item" v-for="(category, index) in categories" v-masonry-tile>
            <img class="img-responsive" alt="user">
            <div class="white-box">
              <h4>{{category.name}}</h4>
              <!-- <p>
                <span>
                  <i class="ti-alarm-clock"></i> Duration:
                </span>
              </p> -->
              <p>
                <span>
                  <i class="ti-user"></i> Description: {{category.desc}}
                </span>
              </p>
              <!-- <p>
                <span>
                  <i class="fa fa-graduation-cap"></i> Students:
                </span>
              </p> -->
              <!-- <button class="btn btn-success btn-rounded waves-effect waves-light m-t-10">More Details</button> -->
              <button class="btn btn-primary btn-rounded waves-effect waves-light m-t-10" data-target="#exampleModal" data-toggle="modal" @click="editCategory">
                <i class="ti-marker-alt"></i> Edit
              </button>
              <button class="btn btn-danger btn-rounded waves-effect waves-light m-t-10" @click="deleteCategory(category.id)">
                <i class="ti-trash"></i> Delete
              </button>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      <h4 class="modal-title" id="exampleModalLabel1">New category</h4>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="recipient-name" class="control-label">Title</label>
                          <input type="text" class="form-control" id="recipient-name1">
                        </div>
                        <div class="form-group">
                          <label for="message-text" class="control-label">Description:</label>
                          <textarea class="form-control" id="message-text1"></textarea>
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
                      <button type="button" class="btn btn-primary">Save Category</button>
                    </div>
                  </div>
                </div>
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
import {mapGetters} from 'vuex'

import Vue from 'vue'
import VueMasonryPlugin from 'vue-masonry';

Vue.use(VueMasonryPlugin)

export default {
  components: {
    ImageUpload
  },
  computed: {
    ...mapGetters({
      categories: 'getCategory'
    })
  },
  created: function() {
    this.$store.dispatch('getCategories')
  },
  methods: {
    editCategory(e) {
      this.$store.dispatch('patchCategories', e)
    },
    deleteCategory(id) {
      this.$store.dispatch('deleteCategories', id)
    }
  }
}
</script>

<style lang="css">
  #category-search {
    border: 1px solid #4c5667;
  }
  #editButton {
    background-color: #3498DB;
    border: none;
    color: #fff;
  }
  #editButton:hover {
    background-color: #2980B9;
  }

  .plus-icon {
    display: block;
    height: 2px;
    width: 16px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1px -8px;
  }
  .plus-icon:after {
    content: '';
    display: block;
    height: 16px;
    width: 2px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -8px -1px;
  }
  .add-button {
    display: block;
    width: 40px;
    height: 40px;
    background: #32ebc7;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    transition: transform .2s ease-in-out, background .2s ease-in-out;
  }
  .add-button:hover {
    transform: scale(1.25);
  }
  .add-button:hover + .label {
    opacity: 1;
    visibilty: visible;
    transform: translateX(0);
  }
  .add-button:active {
    transform: scale(0.8);
  }

  .searchBtn {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: 0;
  }
</style>
