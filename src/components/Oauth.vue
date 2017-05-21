<template lang="html">
  <div>
    hello
  </div>
</template>

<script>
export default {
  created: function() {
    window.localStorage.setItem('test', 123)
    
    //this.$route.query.access_token
  }
}

</script>

<script>
  console.log('aaaaaaa')
</script>

<style lang="css">
</style>
