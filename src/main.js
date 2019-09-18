// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
/* 引入element start */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* end 引入element */
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
/*使用ElementUI*/
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
