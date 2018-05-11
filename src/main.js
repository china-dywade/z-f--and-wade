import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import axios from 'axios'
import store from './store/index'
import router from './router'
import reset from './assets/css/reset.css'
import indexcss from './assets/css/index.css'
Vue.use(ElementUI)
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
