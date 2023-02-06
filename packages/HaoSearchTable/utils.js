export const transformColumnsToFields = (columns) => {
  if (!Array.isArray(columns)) return [];
  return columns.map((v) => {
    return {
      label: v.title,
    };
  });
};

export const toTableColumns = (columns) => {
  if (!Array.isArray(columns)) return [];
  return columns.map((v) => {
    return {
      title: v.title,
      dataIndex: v.key,
    };
  });
};
