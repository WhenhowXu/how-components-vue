import HaoSearchTable from "./HaoSearchTable";
import HaoOperation from '../HaoOperation';

HaoSearchTable.install = function (Vue) {
  Vue.component(HaoOperation.name, HaoOperation)
  Vue.component(HaoSearchTable.name, HaoSearchTable);
  return Vue;
};
HaoSearchTable.HaoOperation = HaoOperation;

export default HaoSearchTable;
