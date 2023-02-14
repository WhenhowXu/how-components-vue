import { FilterTypes } from "./enums";
export const isSelect = (type) =>
  ["picker", "select", "cascader"].some(
    (k) => type && type.toLowerCase().indexOf(k) > -1
  );
export const getPlacehoder = (config = {}) =>
  `请${isSelect(config.type) ? "选择" : "输入"}${config.label}`;
function filterOption(input, option) {
  return (
    option.componentOptions.children[0].text
      .toLowerCase()
      .indexOf(input.toLowerCase()) >= 0
  );
}
export const getFieldProps = (
  config,
  { allowClear, selectSearchable, optionsObj }
) => {
  console.log(selectSearchable, optionsObj);
  let _props = {
    props: { allowClear, placeholder: getPlacehoder(config) },
    style: { width: "100%" },
  };
  switch (config.type) {
    case FilterTypes.Input:
      break;
    case FilterTypes.Select:
      _props.props.options = config.options || optionsObj[config.prop] || [];
      if (config.selectSearchable || selectSearchable) {
        _props.props.filterOption = filterOption;
        _props.props.optionFilterProp = "label";
        _props.props.showSearch = true;
      }
      break;
    case FilterTypes.Cascader:
      _props.props.options = config.options || optionsObj[config.prop] || [];
      break;
    default:
      break;
  }
  return _props;
};
