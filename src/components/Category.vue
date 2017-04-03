<template lang="html">
  <div class="category">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <Cardedit></Cardedit>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Cardedit from './Cardedit'

export default {
  components: {
    Navbar,
    Sidebar,
    Cardedit
  }
}
</script>

<style lang="css">
</style>
