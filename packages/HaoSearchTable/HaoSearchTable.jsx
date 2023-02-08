import HaoFilters from "../../packages/HaoFilters";
import { Table, Pagination } from "ant-design-vue";
import { filterTableColumns, filterSearchFields } from "./utils";
import { getOptionProps } from "ant-design-vue/lib/_util/props-util";

export default {
  name: "HSearchTable",
  props: {
    columns: { type: Array, default: () => [] },
    dataSource: { type: Array, default: () => [] },
    total: { type: Number, default: 0 },
    size: { type: String, default: "small" },
    filters: { type: Object, default: () => ({}) },
  },
  render() {
    const { columns, dataSource, total,filters } = this;
    const filterProps = {
      props: {
        feilds: filterSearchFields(columns),
        formData: filters,
      },
    };
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
        <Table {...tableProps} />
        <Pagination {...paginationProps} />
      </div>
    );
  },
};
