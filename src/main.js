import Vue from 'vue'
import HaoUI from '../packages';
import App from './App.vue'
import 'ant-design-vue/dist/antd.css';
Vue.use(HaoUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
