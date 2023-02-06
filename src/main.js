import Vue from 'vue'
import HaoUI from '../packages';
import App from './App.vue'

Vue.use(HaoUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
