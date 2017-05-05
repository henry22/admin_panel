<template lang="html">
  <div>
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <ul class="nav navbar-top-links navbar-left hidden-xs">
              <li>
                <form role="search" class="app-search hidden-xs" v-on:submit.prevent="search">
                    <input type="text" placeholder="Search Category..." class="form-control" id="category-search" v-model="searchUrl" @keyup.enter="search(searchUrl)">
                    <button type="submit" class="searchBtn" @click="search(searchUrl)"><i class="fa fa-search"></i></button>
                </form>
              </li>
            </ul>
          </div>

          <div class="col-md-3 col-sm-4 col-xs-6 pull-right">
            <select class="form-control pull-left row b-none" name="" @change="setLanguageCode(languageCode)" v-model="languageCode">
              <option value="">Language</option>
              <option :value="language.code" v-for="language in languages">{{language.nativeName}}</option>
            </select>
            <button class="btn btn-default btn-outline btn-rounded btn-success pull-right" type="button" name="button" @click="saveArticle">Save</button>
          </div>
        </div>

        <!-- <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader> -->
        <!-- <ring-loader :loading="loading" :color="color" :size="size"></ring-loader> -->

        <div v-masonry transition-duration="0.3s" item-selector=".articleBox">
          <ring-loader :loading="loading"></ring-loader>
          <div class="articleBox" v-for="(article, index) in articles" v-masonry-tile>
            <div class="cancelBtn" @click="doDelete(index)"><i class="fa fa-times"></i></div>
            <div class="top">
              <div class="articlePicture" :style="'background-image: url(' + article.contents[0].reference + ')'"></div>
              <div class="bookbtn"><i class="fa fa-bookmark-o"></i></div>
            </div>
            <div class="middle">
              <h1 class="classtitle">{{article.title.substr(0, 10)}}</h1>
              <span class="keyword">{{article.keywords[0].replace(/,/g, ' #')}}</span>
              <p>{{article.desc.substr(0, 40)}}...</p>
            </div>
            <div class="bottom">
              <div class="author" :style="'background-image: url(' + article.author_avatar + ')'">
                <div class="authorName">
                  {{article.author}}
                  <div class="authorTitle"></div>
                </div>
              </div>
              <div class="bottomBar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'

import Vue from 'vue'
import VueMasonryPlugin from 'vue-masonry'

// import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import RingLoader from 'vue-spinner/src/RingLoader.vue'


Vue.use(VueMasonryPlugin)

export default {
  components: {
    // PulseLoader
    RingLoader
  },
  computed: {
    ...mapGetters({
      articles: 'getArticles',
      languages: 'getLanguages'
    })
  },
  methods: {
    search(url) {
      if(url !== '') {
        this.loading = true
        this.$store.dispatch('setArticle')
        this.$store.dispatch('getUrls', url)
        //this.loading = false
      }

    },
    doDelete(index) {
      this.$store.dispatch('deleteArticle', index)
    },
    setLanguageCode(code) {
      this.$store.dispatch('setLocale', code)
    },
    saveArticle() {
      var store = this.$store
      var articles = this.articles
      articles.forEach(function(article) {
        store.dispatch('postArticles', article)
      })
    }
  },
  data() {
    return {
      searchUrl: '',
      languageCode: '',
      loading: false
    }
  }
}

</script>

<style lang="css" scoped>
</style>

<style lang="sass" scoped>
*
  position: relative
  vertical-align: middle

.articleBox
  width: 35%
  background-color: white
  color: #4F4C4B
  border-radius: 5px
  margin: 30px 15px
  display: inline-block
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2)
  &:hover
    .top .bookbtn
      bottom: 10px
    .top .articlePicture
      transform: scale(1.1)
    .cancelBtn
      display: block
  .cancelBtn
    display: none
    position: absolute
    top: -15px
    right: -15px
    width: 30px
    height: 30px
    background-color: #fff
    border-radius: 50%
    cursor: pointer
    transition: display 0.5s
    z-index: 10
    box-shadow: 0 0 5px 0 #000
    i
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
  .top
    height: 160px
    overflow: hidden
    border-radius: 5px 5px 0 0
    .articlePicture
      width: 100%
      height: 100%
      position: absolute
      background-size: cover
      transition: 0.3s
    .bookbtn
      width: 42px
      height: 42px
      border-radius: 50%
      position: absolute
      left: 15px
      bottom: -50px
      background-color: #fff
      color: #EB5E00
      cursor: pointer
      transition: bottom 0.3s
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.2)
      &:hover
        background-color: #EB5E00
        color: white
      i
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        font-size: 22px
  .middle
    height: 150px
    padding: 15px
    border-bottom: 1px solid rgba(0,0,0,0.5)
    .classtitle
      font-size: 18px
      line-height: 120%
      margin-top: 0
      margin-bottom: 5px
    .keyword
      color: grey
      font-size: 12px
      margin-bottom: 5px
  .bottom
    height: 80px
    .author
      width: 40px
      height: 40px
      position: absolute
      top: 50%
      left: 20px
      transform: translateY(-50%)
      border-radius: 50%
      background-size: cover
      border: 2px solid white
      z-index: 9
    .authorName
      position: absolute
      top: 0
      left: 40px
    .authorTitle
      position: absolute
      top: 20px
    .bottomBar
      height: 5px
      width: 100%
      position: absolute
      bottom: 0
      left: 0
      background-color: #FB9678
      border-radius: 0 0 5px 5px

#category-search
  margin-top: 0

.searchBtn
  position: absolute
  top: 0
  right: 0
  background: none
  border: 0

.form-control
  width: 70%
  margin-right: 10px

.btn
  border: 1px solid #00c292

.v-spinner
  position: absolute
  left: 50%
  top: 50%
</style>
