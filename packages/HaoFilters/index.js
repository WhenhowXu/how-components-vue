import HaoFilters from "./HaoFilters";
import { FilterTypes } from "./enums";
HaoFilters.install = function (Vue) {
  Vue.component(HaoFilters.name, HaoFilters);
};
export { FilterTypes };
export default HaoFilters;
