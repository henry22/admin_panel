<template lang="html">
  <div id="page-wrapper">
    <div class="container-fluid">
      <div class="row bg-title">
        <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
          <ul class="nav navbar-top-links navbar-left hidden-xs">
            <li>
              <form role="search" class="app-search hidden-xs" v-on:submit.prevent="search">
                <input type="text" placeholder="Search Article..." class="form-control" id="articles-search" v-model="keywords" @keyup.enter="search(keywords)">
                <button type="submit" class="searchBtn" @click="search(keywords)"><i class="fa fa-search"></i></button>
              </form>
            </li>
          </ul>
        </div>
      </div>
      <div class="articles">
        <div v-masonry transition-duration="0.5s" item-selector=".articleBox" column-width=".articleBox">
          <div class="articleBox" v-for="(article, index) in articles" v-masonry-tile>
            <div class="cancelBtn" @click="deleteArticle(article.id)"><i class="fa fa-times"></i></div>
            <div class="top">
              <div class="articlePicture" :style="'background-image: url(' + article.contents[0].reference + ')'"></div>
            </div>
            <div class="middle">
              <h1 class="articleTitle">{{article.title.substr(0, 40)}}</h1>
              <span class="keyword">{{article.keywords.join(',').replace(/,/g, ' #').substr(0, 20)}}</span>
              <p>{{article.desc.substr(0, 60)}}...</p>
            </div>
            <div class="bottom">
              <div class="author" :style="'background-image: url(' + article.author_avatar + ')'">
                <div class="authorName">
                  {{article.author}}
                  <div class="authorTitle"></div>
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
import { mapGetters } from 'vuex'
import Vue from 'vue'
import VueMasonryPlugin from 'vue-masonry'

Vue.use(VueMasonryPlugin)

export default {
  computed: {
    ...mapGetters({
      articles: 'showArticles'
    })
  },
  created: function () {
    this.$store.dispatch('takeArticles')
  },
  methods: {
    deleteArticle (deleteId) {
      this.$store.dispatch('deleteArticles', deleteId)
    },
    search (keywords) {
      let filterKeywords = keywords.split(/[#,\s]/g)
      console.log(filterKeywords)
      if(filterKeywords.length == 0) {
        filterKeywords.push('旅遊')
      }
      this.$store.dispatch('takeArticles', filterKeywords)
    }
  },
  data () {
    return {
      keywords: ''
    }
  }
}
</script>

<style lang="sass" scoped>

$font-size: 18px
$line-height: 1.4
$lines-to-show: 3

@mixin articles_box
  width: 30%
  background-color: white
  color: #4F4C4B
  border-radius: 5px
  margin: 20px 10px
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2)
  text-align: left

@mixin cancel_button
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
  z-index: 2
  box-shadow: 0 0 5px 0 #000

@mixin article_picture
  width: 100%
  height: 100%
  position: absolute
  background-size: cover
  transition: 0.3s

@mixin article_title
  font-size: 18px
  line-height: 120%
  margin-top: 0
  margin-bottom: 5px

@mixin article_keywords
  color: grey
  font-size: 12px
  font-weight: bold

@mixin author_avatar
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

@mixin omit_author_name
  display: inline-block
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
  width: 100px

#articles-search
  border: 1px solid #4c5667
  margin-top: 0

.searchBtn
  position: absolute
  top: 0
  right: 0
  background: none
  border: 0

.articles
  background-color: #EEEEEE

*
  position: relative
  vertical-align: middle

.articleBox
  +articles_box
  &:hover
    .top .lovebtn
      bottom: 10px
    .top .articlePicture
      transform: scale(1.1)
    .cancelBtn
      display: block
  .cancelBtn
    +cancel_button
    i
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
  .top
    height: 200px
    overflow: hidden
    border-radius: 5px 5px 0 0
    .articlePicture
      +article_picture

  .middle
    height: 100%
    padding: 15px
    border-bottom: 1px solid rgba(0,0,0,0.1)
    .articleTitle
      +article_title
    .keyword
      +article_keywords
    p
      margin-top: 5px
      +omit_description
  .bottom
    height: 100%
    padding: 30px
    background-color: #F9F9F9
    border-radius: 0 0 5px 5px
    .author
      +author_avatar
    .authorName
      position: absolute
      top: 0
      left: 40px
      +omit_author_name
    .authorTitle
      position: absolute
      top: 20px

</style>
