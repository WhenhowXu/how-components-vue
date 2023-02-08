import { Button } from "ant-design-vue";
import { getListeners } from "ant-design-vue/lib/_util/props-util";
function noop() {}
const HaoOperation = {
  name: "HOperation",
  props: {
    type: { type: String, default: "link" },
    operate: { type: Function, default: noop },
  },
  data() {
    return { loading: false };
  },
  render() {
    const { type, $slots, $attrs } = this;
    const bProps = {
      props: { ...$attrs, type },
      on: getListeners(this),
    };
    return <Button {...bProps}>{$slots.default}</Button>;
  },
};

HaoOperation.install = function (Vue) {
  Vue.componet(HaoOperation.name, HaoOperation);
};

export default HaoOperation;
