import Overview from './components/Overview.vue'
import AddMember from './components/AddMember.vue'
//定义懒加载方式
const Hello = resolve => require(['./components/Hello.vue'], resolve)

export default {
  routes: [
    { path: '/overview', component: Overview },
    { path: '/addmember', component: AddMember },
    { path: '/hello', component: Hello },
    { path: '*', redirect: '/hello' }
  ]
}
