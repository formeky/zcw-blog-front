import Vue from 'vue'
import App from './App.vue'
import zHeader from './components/z-header'
import zFooter from './components/z-footer'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routes from './routers'
import i18n from './i18n/i18n'
import './assets/style.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.component("z-header",zHeader)
Vue.component("z-footer",zFooter)

const router =new VueRouter({
  routes,
  // mode: 'history'
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
