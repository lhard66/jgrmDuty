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
  template: '<App/>',
  components: { App }
})
