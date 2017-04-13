<template lang="html">
  <div>
    <div id="page-wrapper">
      <div class="container-fluid">
        <div class="classes" v-masonry transition-duration="0.3s" item-selector=".classbox">
          <div class="classbox" v-for="cls in classes" v-masonry-tile>
            <div class="teacher" :style="'background-image: url(' + cls.owner.profileImageUrl + ')'"></div>
            <div class="top">
              <div class="classpicture" :style="'background-image: url(' + cls.coverImage.url + ')'"></div>
              <div class="tag">募資中</div>
              <div class="bookbtn"><i class="fa fa-bookmark-o"></i></div>
            </div>
            <div class="bottom">
              <h1 class="classtitle">{{cls.title}}</h1>
              <div class="orangebar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import {mapGetters} from 'vuex'

import Vue from 'vue'
import VueMasonryPlugin from 'vue-masonry';

Vue.use(VueMasonryPlugin)

export default {
  computed: {
    ...mapGetters({
      classes: 'getClasses'
    })
  }
}
</script>

<style lang="css">
* {
  position: relative;
  vertical-align: middle;
}

.classbox {
  width: 260px;
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
  height: 184px;
  padding: 15px;
}
.classbox .bottom .classtitle {
  font-size: 25px;
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


</style>
