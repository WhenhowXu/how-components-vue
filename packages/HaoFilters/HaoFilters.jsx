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
    formData: {type: Object, default: ()=>({})}
  },
  methods: {
    renderFields(feilds = []) {
      if (!Array.isArray(feilds)) return "";
      return feilds.map((f) => {
        const T = FieldComponents[f.type];
        const itemProps = {props: {
          label: f.label
        }}
        const fieldProps = {
          props: {
            placeholder: `请输入${f.label}`
          }
        }
        return T ? (
          <FormModel.Item {...itemProps}>
            <T {...fieldProps} />
          </FormModel.Item>
        ) : (
          ""
        );
      });
    },
  },
  render() {
    const { feilds } = this;
    let formModelProps = {
      props: {
        layout: 'inline'
      }
    }
    return (
      <FormModel {...formModelProps}>{this.renderFields(feilds)}</FormModel>
    );
  },
};
