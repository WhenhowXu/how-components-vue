import HaoFilters from "../../packages/HaoFilters";
import { Table, Pagination } from "ant-design-vue";
import { filterTableColumns, filterSearchFields } from "./utils";
import { getOptionProps } from "ant-design-vue/lib/_util/props-util";
import "./index.less";
export default {
  name: "HSearchTable",
  props: {
    columns: { type: Array, default: () => [] },
    loading: { type: Boolean, default: false },
    dataSource: { type: Array, default: () => [] },
    total: { type: Number, default: 0 },
    size: { type: String, default: "small" },
    filters: { type: Object, default: () => ({}) },
    orderable: { type: Boolean, default: false },
    emptyTag: { type: String, default: "--" }, // 单元格无数据占位符
    defaultColumnWdith: { type: Number, default: 70 },
  },
  methods: {
    onSizeChange(page, size) {
      this.$emit("pageChange", { page, size });
    },
  },
  render() {
    const {
      columns,
      dataSource,
      total,
      filters,
      $scopedSlots,
      $attrs,
      $listeners,
      defaultColumnWdith,
      orderable,
      onSizeChange,
    } = this;
    const filterProps = {
      props: {
        feilds: filterSearchFields(columns),
        formData: filters,
      },
      on: {
        search: $listeners.search,
        reset: $listeners.reset,
      },
    };
    let props = getOptionProps(this);
    const tableProps = {
      props: {
        ...props,
        columns: filterTableColumns(columns, { defaultColumnWdith, orderable }),
        rowKey: $attrs.rowKey,
        dataSource,
        pagination: false,
        scroll: { x: "max-content", y: "calc(100vh - 260px)" },
      },
      scopedSlots: $scopedSlots,
    };
    const paginationProps = {
      props: {
        total,
        showLessItems: false,
        showQuickJumper: true,
        showSizeChanger: true,
        showTotal: (total) => <span>共{total}条数据</span>,
        pageSizeOptions: ["50", "100", "400"],
      },
      on: {
        onSizeChange: onSizeChange,
        change: onSizeChange,
      },
    };
    return (
      <div class="hao-serach-table-wrapper">
        <HaoFilters {...filterProps} />
        <Table {...tableProps} />
        <div class="hao-pagination-wrapper">
          <Pagination
            {...paginationProps}
            v-model={filters.page}
            pageSize={filters.size}
          />
        </div>
      </div>
    );
  },
};
