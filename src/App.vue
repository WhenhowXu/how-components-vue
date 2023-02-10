<template>
  <div id="app">
    <a-config-provider :locale="localZh">
      <div class="page-wrapper">
        <h-search-table
          rowKey="id"
          orderable
          :loading="loading"
          :filters="filters"
          :columns="columns"
          :dataSource="dataSource"
          :total="20"
          :defaultColumnWdith="100"
        >
          <div slot="title" class="hao-search-table-title">
            <h3 :style="{ fontWeight: 'bold' }">学生列表</h3>
            <a-button type="primary">TEST</a-button>
          </div>
          <template slot="operations" slot-scope="text, record">
            <h-operation @click="onDelete(record)"
              >编辑</h-operation
            >
            <h-operation @click="onDelete(record)">删除</h-operation>
          </template>
        </h-search-table>
      </div>
    </a-config-provider>
  </div>
</template>

<script>
import localZh from "ant-design-vue/lib/locale/zh_CN";
import { getChildrens } from "@/api/list";

const customColumns = Array.from({ length: 10 }).map((v, i) => ({
  title: "COLUMN" + i + 1,
  dataIndex: "COLUMN" + i + 1,
}));
export default {
  name: "App",
  data() {
    return {
      localZh,
      loading: false,
      filters: {
        page: 1,
        size: 50,
      },
      columns: [
        { title: "姓名", dataIndex: "name", filterType: "Input" },
        { title: "年龄", dataIndex: "age", filterType: "InputNumber" },
        { title: "生日", dataIndex: "bothDate", filterType: "DatePicker" },
        { title: "城市", dataIndex: "city", filterType: "Select" },
        {
          title: "班级",
          dataIndex: "class",
          width: 120,
          filterType: "Cascader",
        },
        {
          title: "月份",
          dataIndex: "month",
          filterType: "MonthPicker",
          justInFilter: true,
        },
        {
          title: "年份",
          dataIndex: "year",
          filterType: "MonthPicker",
          justInFilter: true,
        },
        {
          title: "星期",
          dataIndex: "week",
          filterType: "WeekPicker",
          justInFilter: true,
        },
        ...customColumns,
        {
          title: "操作",
          dataIndex: "operations",
          width: 200,
          fixed: "right",
          scopedSlots: { customRender: "operations" },
        },
      ],
      dataSource: [],
    };
  },
  components: {},
  methods: {
    updateFildters(changeFilters) {
      Object.assign(this.filters, changeFilters);
      this.loading = true;
      getChildrens(this.filters)
        .then((res) => {
          this.dataSource = res.data;
          this.total = res.total;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    onDelete() {},
  },
  mounted() {
    this.updateFildters();
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 12px;
}
.hao-search-table-title {
  display: flex;
  justify-content: space-between;
}
</style>
