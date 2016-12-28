<template>
  <div>
    <h3>值日预览</h3>
    <div class="panel panel-default" v-for="item in ['一','二','三','四','五','六']">
      <div class="panel-heading">周{{item}}</div>
      <div class="panel-body">
        Panel content
      </div>
    </div>
  </div>
</template>

<style>
#app .panel{
  width: 250px;
  height: 150px;
  float: left;
  margin-right: 10px;
}
</style>
