import {
  FormModel,
  Input,
  InputNumber,
  Select,
  Cascader,
  DatePicker,
} from "ant-design-vue";

export const FieldComponents = {
  Input,
  InputNumber,
  Cascader,
  Select,
  DatePicker,
};
export default {
  name: "HFilters",
  props: {
    feilds: { type: Array, default: () => [] },
  },
  methods: {
    renderFields(feilds = []) {
      if (!Array.isArray(feilds)) return "";
      return feilds.map((f) => {
        const T = FieldComponents[f.type];
        return T ? <T /> : "";
      });
    },
  },
  render(props) {
    const { feilds } = props;

    return (
      <FormModel>
        <FormModel.Item>{this.renderFields(feilds)}</FormModel.Item>
      </FormModel>
    );
  },
};
