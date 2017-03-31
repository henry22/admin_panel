<template lang="html">
  <div class="category">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Imageupload></Imageupload>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Imageupload from './Imageupload'

export default {
  components: {
    Navbar,
    Sidebar,
    Imageupload
  }
}
</script>

<style lang="css">
</style>
