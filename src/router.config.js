import Overview from './components/Overview.vue'
import AddMember from './components/AddMember.vue'
import Hello from './components/Hello.vue'

export default {
  routes: [
    { path: '/overview', component: Overview },
    { path: '/addmember', component: AddMember },
    { path: '/hello', component: Hello },
    { path: '*', redirect: '/hello' }
  ]
}
