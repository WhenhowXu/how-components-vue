import {
  FormModel,
  Input,
  InputNumber,
  Select,
  Cascader,
  DatePicker,
  Button,
  Space,
} from "ant-design-vue";
import { FilterTypes } from "./enums";
import HaoFoldButton from "../HaoFoldButton";
import { getPlacehoder } from "./utils";

const { MonthPicker, WeekPicker } = DatePicker;
export const FieldComponents = {
  [FilterTypes.Input]: Input,
  [FilterTypes.InputNumber]: InputNumber,
  [FilterTypes.Cascader]: Cascader,
  [FilterTypes.Select]: Select,
  [FilterTypes.DatePicker]: DatePicker,
  [FilterTypes.MonthPicker]: MonthPicker,
  [FilterTypes.WeekPicker]: WeekPicker,
};
export default {
  name: "HFilters",
  props: {
    feilds: { type: Array, default: () => [] },
    formData: { type: Object, default: () => ({}) },
    allAllowClear: { type: Boolean, default: true },
  },
  methods: {
    renderFields(feilds = []) {
      if (!Array.isArray(feilds)) return "";
      const { formData, allAllowClear } = this;
      return feilds.map((f) => {
        const T = FieldComponents[f.type];
        const itemProps = {
          props: {
            label: f.label,
            value: formData[f.name],
          },
        };
        const fieldProps = {
          props: {
            placeholder: getPlacehoder(f),
            allowClear: allAllowClear,
          },
        };
        return T ? (
          <FormModel.Item {...itemProps}>
            <T {...fieldProps} />
          </FormModel.Item>
        ) : (
          ""
        );
      });
    },
    onSearch() {
      console.log(this.formData, "2kkkkkkkkkkk");
    },
    onReset() {
      console.log(this.formData, "1kkkkkkkkkkk");
    },
  },
  render() {
    const { feilds, formData, onSearch, onReset } = this;
    let formModelProps = {
      props: {
        layout: "inline",
        model: formData,
      },
    };

    return (
      <FormModel {...formModelProps}>
        {this.renderFields(feilds)}
        <FormModel.Item>
          <Space>
            <Button onClick={onReset}>重置</Button>
            <Button type="primary" onClick={onSearch}>
              搜索
            </Button>
            <HaoFoldButton />
          </Space>
        </FormModel.Item>
      </FormModel>
    );
  },
};
