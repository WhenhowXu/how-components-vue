import HaoFilters from "../../packages/HaoFilters";
import { Table } from "ant-design-vue";
import { transformColumnsToFields, toTableColumns } from "./utils";

const toFiltersProps = (props) => {
  return {
    feilds: transformColumnsToFields(props.columns),
  };
};
const toTableProps = (props) => {
  return {
    ...props,
    columns: toTableColumns(props.columns),
  };
};
export default {
  name: "HSearchTable",
  props: {
    columns: { type: Array, default: () => [] },
  },
  render() {
    const { $props } = this;
    const filterProps = toFiltersProps($props),
      tableProps = { attrs: toTableProps($props) };
    return (
      <div>
        <HaoFilters {...filterProps} />
        <Table {...tableProps} />
      </div>
    );
  },
};
