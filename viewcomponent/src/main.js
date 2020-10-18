// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import Loading from './components/loading'
import * as iView from './index';
import locale from './locale/lang/zh-CN';
// 这时需要 use(Loading)，如果不写 Vue.use()的话，浏览器会报错，大家可以试一下
Vue.use(iView,{
  locale
});
Vue.use(Loading, "3333")

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
