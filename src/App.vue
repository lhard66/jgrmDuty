<template>
  <div>
    <transition enter-active-class="animated fadeInRightBig" leave-active-class="hide">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import '../node_modules/animate.css/animate.css'
export default {
  name: 'app'
}
</script>
<style>
.hide {
  display: none;
}
</style>
