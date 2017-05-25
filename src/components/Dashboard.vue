<template lang="html">
  <div class="dashboard">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <router-view></router-view>
    <router-view name="upload"></router-view>
    <router-view name="articles"></router-view>
    <router-view name="crawler"></router-view>
    <router-view name="categories"></router-view>
    <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="sass" scoped>
.sidebar
  height: auto
</style>
