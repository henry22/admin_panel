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
      <li>
        <a href="#" class="waves-effect active">
          <i class="linea-icon linea-basic fa-fw" data-icon="v"></i>
          <span class="hide-menu"> Category <span class="fa arrow"></span></span>
        </a>
      </li>
      <li>
        <a href="#" class="waves-effect">
          <i data-icon=")" class="linea-icon linea-basic fa-fw"></i>
          <span class="hide-menu"> Articles <span class="fa arrow"></span></span>
        </a>
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
