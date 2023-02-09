import { Button } from "ant-design-vue";

const HaoFoldButtton = {
  name: "HFoldButtton",
  props: {
    defaultFold: { type: Boolean, default: false },
  },
  data() {
    return {
      fold: this.defaultFold,
    };
  },
  methods: {
    toggelFold() {
      this.fold = !this.fold;
    },
  },
  render() {
    const { fold, toggelFold } = this;
    return (
      <Button
        icon={!fold ? "down" : "up"}
        type="link"
        onClick={toggelFold}
        style={{ padding: 0 }}
      >
        {fold ? "收起" : "展开"}
      </Button>
    );
  },
};

export default HaoFoldButtton;
