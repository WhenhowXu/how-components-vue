import {
  FormModel,
  Input,
  InputNumber,
  Select,
  Cascader,
  DatePicker,
  Button,
  Space,
  Row,
  Col,
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
    labelWidth: { type: Number, default: 70 },
    fieldWidth: { type: Number, default: 240 },
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    renderFields(feilds = []) {
      if (!Array.isArray(feilds)) return "";
      const { formData, allAllowClear, labelWidth } = this;
      return feilds.map((f) => {
        const T = FieldComponents[f.type];
        const itemProps = {
          props: {
            label: () => (
              <span
                style={{
                  display: "inline-block",
                  width: (f.labelWidth || labelWidth) + "px",
                }}
              >
                {f.label}
              </span>
            ),
            prop: f.prop,
          },
        };
        const fieldProps = {
          props: {
            placeholder: getPlacehoder(f),
            allowClear: allAllowClear,
            style: { width: "100%" },
          },
        };
        return T ? (
          <FormModel.Item {...itemProps}>
            <T {...fieldProps} v-model={formData[f.prop]} />
          </FormModel.Item>
        ) : (
          ""
        );
      });
    },
    onSearch() {
      this.$emit("search", this.formData);
    },
    onReset() {
      this.$refs.searchFormRef.resetFields();
      this.$emit("reset", this.formData);
    },
  },
  render() {
    let { feilds, formData, onSearch, onReset } = this;
    let formModelProps = {
      props: {
        layout: "inline",
        model: formData,
      },
    };

    return (
      <FormModel {...formModelProps} ref="searchFormRef">
        <Row justify="start">
          {this.renderFields(feilds)}
          <Col>
            <FormModel.Item>
              <Space>
                <Button icon="search" type="primary" onClick={onSearch}>
                  查询
                </Button>
                <Button icon="redo" onClick={onReset}>
                  重置
                </Button>
                <HaoFoldButton v-model={this.collapsed} />
              </Space>
            </FormModel.Item>
          </Col>
        </Row>
      </FormModel>
    );
  },
};
