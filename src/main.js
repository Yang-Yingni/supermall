import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.prototype.$bus = new Vue()
//给vue添加一个$bus原型，用新的Vue实例，做事件总线发射和监听事件

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
