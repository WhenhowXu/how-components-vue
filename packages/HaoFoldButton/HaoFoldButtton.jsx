import { Button } from "ant-design-vue";

const HaoFoldButtton = {
  name: "HFoldButtton",
  props: {
    value: Boolean,
  },
  model: {
    prop: "value",
    event: "update",
  },
  methods: {
    toggelFold() {
      this.$emit("update", !this.value);
    },
  },
  render() {
    let { toggelFold, value } = this;
    return (
      <Button
        icon={!value ? "down" : "up"}
        type="link"
        onClick={toggelFold}
        style={{ padding: 0 }}
      >
        {value ? "收起" : "展开"}
      </Button>
    );
  },
};

export default HaoFoldButtton;
