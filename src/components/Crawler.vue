<template lang="html">
  <div>
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="row bg-title">
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <ul class="nav navbar-top-links navbar-left hidden-xs">
              <li>
                <form role="search" class="app-search hidden-xs" v-on:submit.prevent="search">
                    <input type="text" placeholder="Type URL..." class="form-control" id="category-search" v-model="searchUrl" @keyup.enter="search(searchUrl)">
                    <button type="submit" class="searchBtn" @click="search(searchUrl)"><i class="fa fa-search"></i></button>
                </form>
              </li>
            </ul>
          </div>

          <div class="col-md-3 col-sm-4 col-xs-6 pull-right">
            <select class="form-control pull-left row b-none" name="" @change="setLanguageCode(languageCode)" v-model="languageCode">
              <option value="" selected>Language</option>
              <option :value="language.code" v-for="language in languages">{{language.nativeName}}</option>
            </select>
            <button class="btn btn-default btn-outline btn-rounded btn-success pull-right" type="button" name="button" @click="saveArticle">Save</button>
          </div>
        </div>

        <div v-masonry transition-duration="0.3s" item-selector=".articleBox">
          <div class="articleBox" v-for="(article, index) in articles" v-masonry-tile>
            <div class="cancelBtn" @click="doDelete(index)"><i class="fa fa-times"></i></div>
            <div class="top">
              <div class="articlePicture" :style="'background-image: url(' + article.contents[0].reference + ')'"></div>
              <div class="bookbtn"><i class="fa fa-bookmark-o"></i></div>
            </div>
            <div class="middle">
              <h1 class="articleTitle">{{article.title.substr(0, 10)}}</h1>
              <span class="keyword">{{showKeywords(article.keywords)}}</span>
              <p>{{article.desc.substr(0, 40)}}...</p>
            </div>
            <div class="bottom">
              <div class="author" :style="'background-image: url(' + article.author_avatar + ')'"></div>
              <div class="authorName">{{article.author}}</div>
              <div class="authorTitle">{{article.from}}</div>
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


Vue.use(VueMasonryPlugin)

export default {
  computed: {
    ...mapGetters({
      articles: 'getArticles',
      languages: 'getLanguages'
    })
  },
  methods: {
    search(url) {
      if(url !== '') {
        this.$Progress.start()
        this.$store.dispatch('setArticle')
        this.$store.dispatch('getUrls', url)
        this.$Progress.finish()
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
      this.searchUrl = ''
    },
    showKeywords: function (keywords) {
      if(keywords === null) {
        return ''
      } else {
        return keywords.join(',').replace(/,/g, ' #').substr(0, 20)
      }
    }
  },
  data() {
    return {
      searchUrl: '',
      languageCode: ''
    }
  }
}

</script>

<style lang="sass" scoped>

$font-size: 18px
$line-height: 1.4
$lines-to-show: 3

@mixin crawler_box
  width: 30%
  background-color: white
  color: #4F4C4B
  border-radius: 5px
  margin: 30px 15px
  display: inline-block
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2)

@mixin cancel_box
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

@mixin crawler_picture
  width: 100%
  height: 100%
  position: absolute
  background-size: cover
  transition: 0.3s

@mixin book_button
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

@mixin crawler_article_title
  font-size: 18px
  line-height: 120%
  margin-top: 0
  margin-bottom: 5px

@mixin crawler_keywords
  color: grey
  font-size: 12px
  font-weight: bold

@mixin crawler_author_avatar
  width: 40px
  height: 40px
  position: absolute
  top: 50%
  left: 20px
  transform: translateY(-50%)
  border-radius: 50%
  background-size: cover
  border: 2px solid white
  z-index: 2

@mixin omit_description
  display: block
  display: -webkit-box
  max-width: 400px
  height: $font-size*$line-height*$lines-to-show
  font-size: $font-size
  line-height: $line-height
  -webkit-line-clamp: $lines-to-show
  -webkit-box-orient: vertical
  overflow: hidden
  text-overflow: ellipsis

@mixin omit_author
  display: inline-block
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
  width: calc(100% - 80px)
  text-align: left

@mixin crawler_bottom_bar
  height: 5px
  width: 100%
  position: absolute
  bottom: 0
  left: 0
  background-color: #10E096
  border-radius: 0 0 5px 5px

*
  position: relative
  vertical-align: middle

.articleBox
  +crawler_box
  &:hover
    .top .bookbtn
      bottom: 10px
    .top .articlePicture
      transform: scale(1.1)
    .cancelBtn
      display: block
  .cancelBtn
    +cancel_box
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
      +crawler_picture
    .bookbtn
      +book_button
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
    height: 100%
    padding: 15px
    border-bottom: 1px solid rgba(0,0,0,0.5)
    .articleTitle
      +crawler_article_title
    .keyword
      +crawler_keywords
    p
      margin-top: 5px
      +omit_description
  .bottom
    height: 100%
    padding: 40px
    .author
      +crawler_author_avatar
    .authorName
      position: absolute
      top: 20px
      left: 60px
      +omit_author
    .authorTitle
      position: absolute
      top: 40px
      left: 60px
      +omit_author
    .bottomBar
      +crawler_bottom_bar

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
</style>
