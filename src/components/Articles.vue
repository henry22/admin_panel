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
        </div>

        <div class="classes" v-masonry transition-duration="0.3s" item-selector=".classbox">
          <div class="classbox" v-for="article in articles" v-masonry-tile>
            <!-- <div class="teacher" :style="'background-image: url(' + article.image + ')'"></div> -->
            <div class="top">
              <div class="classpicture" :style="'background-image: url(' + article.image + ')'"></div>
              <div class="tag">募資中</div>
              <div class="bookbtn"><i class="fa fa-bookmark-o"></i></div>
            </div>
            <div class="bottom">
              <h1 class="classtitle">{{article.title}}</h1>
              <p>{{article.description}}</p>
              <div class="orangebar"></div>
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
import VueMasonryPlugin from 'vue-masonry';

Vue.use(VueMasonryPlugin)

export default {
  computed: {
    ...mapGetters({
      articles: 'getArticles'
    })
  },
  methods: {
    search(url) {
      if(url !== '') {
        this.$store.dispatch('getUrls', url)
      }
    }
  },
  data() {
    return {
      searchUrl: ''
    }
  }
}
</script>

<style lang="css" scoped>
* {
  position: relative;
  vertical-align: middle;
}

.classbox {
  width: 270px;
  background-color: white;
  color: #4F4C4B;
  border-radius: 5px;
  margin: 30px 15px;
  display: inline-block;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
}
.classbox:hover .top .bookbtn {
  bottom: 10px;
}
.classbox:hover .top .classpicture {
  transform: scale(1.13);
}
.classbox:hover .bottom .texts .progressbar .valuebar {
  width: 200px;
}
.classbox .teacher {
  width: 55px;
  height: 55px;
  position: absolute;
  left: 15px;
  top: -27.5px;
  border-radius: 50%;
  background-image: url("https://hahow.in/images/57ab3d5585b097070042067a");
  background-size: cover;
  border: 2px solid white;
  z-index: 9;
}
.classbox .top {
  height: 160px;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
}
.classbox .top .classpicture {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("https://hahow.in/images/574fab4f206cd60900c52a67?width=300");
  background-size: cover;
  transition: 0.3s;
}
.classbox .top .tag {
  width: 100%;
  text-align: center;
  transform: translateX(95px) translateY(15px) rotate(45deg);
  padding: 5px 0;
  background-color: #EB5E00;
  color: white;
  font-weight: 700;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
}
.classbox .top .bookbtn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: absolute;
  left: 15px;
  bottom: -50px;
  background-color: #fff;
  color: #EB5E00;
  cursor: pointer;
  transition: bottom 0.3s;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
}
.classbox .top .bookbtn:hover {
  background-color: #EB5E00;
  color: white;
}
.classbox .top .bookbtn i {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 22px;
}
.classbox .bottom {
  height: 250px;
  padding: 15px;
}
.classbox .bottom .classtitle {
  font-size: 18px;
  line-height: 120%;
  margin-top: 0;
}

.classbox .bottom .orangebar {
  height: 5px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #EB5E00;
  border-radius: 0 0 5px 5px;
}

#category-search {
  margin-top: 0;
}

.searchBtn {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: 0;
}

</style>
