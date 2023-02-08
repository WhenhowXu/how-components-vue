import HaoFilters from "../../packages/HaoFilters";
import { Table, Pagination } from "ant-design-vue";
import { filterTableColumns } from "./utils";
import { getOptionProps } from "ant-design-vue/lib/_util/props-util";

export default {
  name: "HSearchTable",
  props: {
    columns: { type: Array, default: () => [] },
    dataSource: { type: Array, default: () => [] },
    total: { type: Number, default: 0 },
    size: { type: String, default: "small" },
  },
  render() {
    const { columns, dataSource, total, $slots } = this;
    const filterProps = {};
    let props = getOptionProps(this);
    const tableProps = {
      props: {
        ...props,
        columns: filterTableColumns(columns),
        dataSource,
        pagination: false,
      },
    };
    const paginationProps = {
      props: { total },
    };
    return (
      <div>
        <HaoFilters {...filterProps} />
        <Table {...tableProps}>{$slots.default}</Table>
        <Pagination {...paginationProps} />
      </div>
    );
  },
};
