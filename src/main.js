import Vue from "vue";
import HaoUI from "../packages";
import App from "./App.vue";
import AntUI from "ant-design-vue";

import "ant-design-vue/dist/antd.css";
Vue.use(HaoUI).use(AntUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
