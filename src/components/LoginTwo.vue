<template lang="html">
<section id="wrapper" class="login-register">
  <div class="login-box">
    <div class="white-box">
      <form class="form-horizontal form-material" enctype="multipart/form-data" id="loginform" v-on:submit.prevent="actionLogin()">
        <h3 class="box-title m-b-20">Sign In</h3>
        <div class="form-group ">
          <div class="col-xs-12">
            <input class="form-control" type="text" placeholder="Username"  value="account" required v-model="account">
          </div>
        </div>
        <div class="form-group">
          <div class="col-xs-12">
            <input class="form-control" type="password" placeholder="Password"  value="password" required v-model="password">
          </div>
        </div>
        <div class="form-group">
          <div class="col-md-12">
            <div class="checkbox checkbox-primary pull-left p-t-0">
              <input id="checkbox-signup" type="checkbox">
              <label for="checkbox-signup"> Remember me </label>
            </div>
            <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right">
              <i class="fa fa-lock m-r-5"></i> Forgot password?
            </a>
          </div>
        </div>
        <div class="form-group text-center m-t-20">
          <div class="col-xs-12">
            <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Log In
            </button>
          </div>
        </div>
        <div class="form-group m-b-0">
          <div class="col-sm-12 text-center">
            <p>Don't have an account? <a href="register.html" class="text-primary m-l-5"><b>Sign Up</b></a></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  // methods: {
  //   loginAction(o) {
  //     this.$store.dispatch('postLogin', o)
  //   }
  // },
  methods: {
    ...mapActions({
      actionLogin: 'postLogin'
    })
  },
  computed: {
    account: {
      get() {
        return this.$store.getters.getAccount
      },
      set(value) {
        this.$store.dispatch('setAccount', value)
      }
    },
    password: {
      get() {
        return this.$store.getters.getPassword
      },
      set(value) {
        this.$store.dispatch('setPassword', value)
      }
    }
  }
}
</script>

<style lang="css">

</style>
