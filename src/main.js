import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixin from './mixin'
import ElementUI from 'element-ui'
import 'api/axios'

// css样式
import 'css/base/base.less'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.mixin(mixin)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
