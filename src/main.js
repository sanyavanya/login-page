import Vue from 'vue'
import VueRouter from 'vue-router'
import Vue2TouchEvents from 'vue2-touch-events'
import App from './App.vue'
import AppButton from './components/AppButton.vue'
import AppInput from './components/AppInput.vue'
import {store} from './store.js'
import {routes} from './routes.js'

Vue.use(VueRouter)
Vue.use(Vue2TouchEvents)
Vue.config.productionTip = false
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)

export const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (store.getters.userLoggedIn && to.path !=='/home') return next({path: '/home'})
  if (!store.getters.userLoggedIn && to.path === '/home') return next({path: '/'})
  next()
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
