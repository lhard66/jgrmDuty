<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <li v-for="item in list">
            <router-link :to="item.link">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <transition enter-active-class="animated fadeInRightBig" leave-active-class="hide">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [{
        'id': 1,
        'name': '值日管理',
        'link': 'overview'
      }, {
        'id': 2,
        'name': '成员管理',
        'link': 'addmember'
      }, {
        'id': 3,
        'name': '系统设置',
        'link': 'systemset'
      }]
    }
  }
}
</script>
<style>
.router-link-active {
  background-color: red;
}
</style>
