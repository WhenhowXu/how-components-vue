import HaoFilters from "./HaoFilters";
import HaoSearchTable from "./HaoSearchTable";
import HaoOperation from "./HaoOperation";
const components = [HaoFilters, HaoSearchTable, HaoOperation];

const install = (Vue) => {
  if (install.installed) return Vue;
  components.forEach((c) => {
    Vue.component(c.name, c);
  });
  return Vue;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  HaoFilters,
  HaoSearchTable,
};
