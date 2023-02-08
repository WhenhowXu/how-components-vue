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
        type: v.filterType
      };
    });
};

export const filterTableColumns = (columns) => {
  if (!Array.isArray(columns)) return [];
  return columns.map((v) => {
    return v
  });
};
