import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "vant";
import "vant/lib/index.css";
import FastClick from 'fastclick'

// 引入vue的懒加载
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(Vant);
// 使用vue的懒加载
Vue.use(VueLazyLoad, {
  // 未加载的占位图片
  loading: require("@/assets/img/common/placeholder.png")
});
// 解决移动端的点击延迟
FastClick.attach(document.body)

Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
