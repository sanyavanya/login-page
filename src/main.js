import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {store} from './store.js'
import {routes} from './routes.js'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
