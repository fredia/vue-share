// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/theme/element-blue/index.css';

Vue.use(ElementUI)
var axios = require('axios')
axios.defaults.baseURL = "http://localhost:8081"
axios.defaults.withCredentials = true
Vue.prototype.$axios = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (!to.meta.needLogin||window.sessionStorage.login) {
    next()
  } else {
    next('/login')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
