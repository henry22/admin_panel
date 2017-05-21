<template lang="html">
  <!-- Navigation -->
  <nav class="navbar navbar-default navbar-static-top m-b-0">
    <div class="navbar-header">
      <a class="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse"><i class="ti-menu"></i>
      </a>
      <div class="top-left-part">
        <a class="logo" href="/">
          <b><img src="../../static/plugins/images/eliteadmin-logo.png" alt="home" /></b>
        </a>
      </div>
      <ul class="nav navbar-top-links navbar-left hidden-xs">
        <li><a href="javascript:void(0)" class="open-close hidden-xs waves-effect waves-light"><i class="icon-arrow-left-circle ti-menu"></i></a></li>
      </ul>
      <ul class="nav navbar-top-links navbar-right pull-right">
        <li class="dropdown">
          <a class="dropdown-toggle profile-pic" data-toggle="dropdown" href="#">
            <img src="../../static/plugins/images/users/1.jpg" alt="user-img" width="36" class="img-circle"><b class="hidden-xs">Steave</b>
          </a>
          <ul class="dropdown-menu dropdown-user animated flipInY">
            <li><a href="#"><i class="ti-user"></i> My Profile</a></li>
            <li><a href="#"><i class="ti-wallet"></i> My Balance</a></li>
            <li><a href="#"><i class="ti-email"></i> Inbox</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#"><i class="ti-settings"></i> Account Setting</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#" @click="logout"><i class="fa fa-power-off"></i> Logout</a></li>
          </ul>
          <!-- /.dropdown-user -->
        </li>
      </ul>
    </div>
    <!-- /.navbar-header -->
    <!-- /.navbar-top-links -->
  </nav>

</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions({
      logout: 'logout'
    })
  }
}
</script>

<style lang="css">
  .top-left-part {
    background-color: #01C0C8;
  }
</style>
