<template lang="html">
  <div class="navbar-default sidebar" role="navigation">
    <div class="sidebar-nav navbar-collapse slimscrollsidebar">
    <ul class="nav in" id="side-menu">
      <li class="sidebar-search hidden-sm hidden-md hidden-lg">
        <!-- input-group -->
        <div class="input-group custom-search-form">
          <input type="text" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button>
          </span>
        </div>
        <!-- /input-group -->
      </li>
      <!-- <li>
        <router-link to="/upload" class="waves-effect active">
          <i class="linea-icon linea-basic fa-fw" data-icon="v"></i>
          <span class="hide-menu"> Upload Article <span class="fa arrow"></span></span>
        </router-link>
      </li> -->
      <li>
        <router-link to="/articles" class="waves-effect active">
          <i class="linea-icon linea-basic fa-fw" data-icon=")"></i>
          <span class="hide-menu"> Articles <span class="fa arrow"></span></span>
        </router-link>
      </li>
      <li>
        <router-link to="/crawler" class="waves-effect active">
          <i class="linea-icon linea-basic fa-fw" data-icon=""></i>
          <span class="hide-menu"> Crawler <span class="fa arrow"></span></span>
        </router-link>
      </li>
      <li>
        <router-link to="/categories" class="waves-effect active">
          <i class="linea-icon linea-basic fa-fw" data-icon=""></i>
          <span class="hide-menu"> Category <span class="fa arrow"></span></span>
        </router-link>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

</style>
