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
    orderable: { type: Boolean, default: false },
    emptyTag: { type: String, default: "--" }, // 单元格无数据占位符
  },
  render() {
    const { columns, dataSource, total, filters, $scopedSlots } = this;
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
      scopedSlots: $scopedSlots,
    };
    const paginationProps = {
      props: { total },
    };
    return (
      <div>
        <HaoFilters {...filterProps} />
        <Table {...tableProps} />
        <div style={{ textAlign: "right" }}>
          <Pagination {...paginationProps} />
        </div>
      </div>
    );
  },
};
