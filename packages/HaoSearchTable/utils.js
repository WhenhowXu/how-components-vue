const isColumnSearchable = (record) => {
  return !!record.fieldType;
};
export const transformColumnsToFields = (columns) => {
  if (!Array.isArray(columns)) return [];
  return columns
    .filter((c) => isColumnSearchable(c))
    .map((v) => {
      return {
        label: v.title,
      };
    });
};

export const filterTableColumns = (columns) => {
  if (!Array.isArray(columns)) return [];
  return columns.map((v) => {
    return v
  });
};
