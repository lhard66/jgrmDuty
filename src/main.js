// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routerConfig from './router.config.js'
import '../node_modules/animate.css/animate.css'

Vue.use(VueRouter)
const router = new VueRouter(routerConfig)
new Vue({
  el: '#app',
  router,
  //这个app标签是下行的components定义的组件。此处的用法相当于在，index.html页面内的#app元素下面定义一下<app/>标签
  template: '<App/>',
  //表示外界使用模板引用的模板名，此处是简写，全写是：'App':App，分号后的App指引入的App.vue文件。
  components: { App }
})
