export const isSelect = (type) =>
  ["picker", "select", "cascader"].some(
    (k) => type && type.toLowerCase().indexOf(k) > -1
  );
export const getPlacehoder = (config = {}) =>
  `请${isSelect(config.type) ? "选择" : "输入"}${config.label}`;
