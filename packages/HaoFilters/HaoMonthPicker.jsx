import { DatePicker } from "ant-design-vue";
const HaoMonthPicker = {
  name: "HMonthPicker",
  render() {
    return <DatePicker type="month" />;
  },
};
HaoMonthPicker.install = function (Vue) {
  Vue.component(HaoMonthPicker.name, HaoMonthPicker);
};
export default HaoMonthPicker;
