import "./index.less";
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
      let showSpan = 6;
      const { formData, allAllowClear, collapsed } = this;
      return feilds.map((f) => {
        const T = FieldComponents[f.type];
        showSpan += 6;
        const itemProps = {
          props: {
            label: f.label,
            prop: f.prop,
            labelCol: { span: 6 },
            wrapperCol: { span: 16 },
          },
        };
        const fieldProps = {
          props: {
            placeholder: getPlacehoder(f),
            allowClear: allAllowClear,
          },
          style: { width: "100%" },
        };
        return T ? (
          <Col span={6} v-show={collapsed ? showSpan <= 24 : true}>
            <FormModel.Item {...itemProps}>
              <T {...fieldProps} v-model={formData[f.prop]} />
            </FormModel.Item>
          </Col>
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
        model: formData,
      },
      class: "hao-filters-form",
    };

    return (
      <FormModel {...formModelProps} ref="searchFormRef">
        <Row justify="start" type="flex">
          {this.renderFields(feilds)}
          <Col span={6} flex={1} align="right">
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
