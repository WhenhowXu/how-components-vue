const isColumnSearchable = (record) => {
  return !!record.filterType;
};
export const filterSearchFields = (columns) => {
  if (!Array.isArray(columns)) return [];
  return columns
    .filter((c) => isColumnSearchable(c))
    .map((v) => {
      return {
        label: v.title,
        prop: v.dataIndex,
        type: v.filterType,
      };
    });
};

export const filterTableColumns = (
  columns,
  { orderable, defaultColumnWdith } = {}
) => {
  if (!Array.isArray(columns)) return [];
  let _columns = columns
    .filter((c) => !c.justInFilter)
    .map((v) => {
      v.width = v.width || defaultColumnWdith;
      return v;
    });
  if (orderable) {
    _columns.unshift({
      title: "序号",
      dataIndex: "ORDER",
      width: 70,
      ellipsis: true,
      customRender: (text, record, index) => index + 1,
    });
  }
  return _columns;
};
