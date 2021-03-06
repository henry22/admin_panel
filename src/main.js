// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import store from './store'

import { sync } from 'vuex-router-sync'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(VueProgressBar, {
  color: 'rgb(17, 244, 252)',
  failedColor: 'red',
  height: '3px'
})

export const router = new VueRouter({
  mode: 'history',
  routes
})

sync(store, router)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.loggedIn) {
      next({
        path: '/console/login'
      })
      NProgress.done()
    } else {
      next()
      NProgress.done()
    }
  } else {
    next() // 确保一定要调用 next()
    NProgress.done()
  }
})

router.afterEach(transition => {
  NProgress.start()
})

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
