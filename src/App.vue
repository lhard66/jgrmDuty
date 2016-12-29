<template>
  <div id="app">
    <transition enter-active-class="animated fadeInRightBig" leave-active-class="hide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .hide{
    display: none;
  }
</style>
