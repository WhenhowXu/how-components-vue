<template>
  <div id="app">
    <div class="page-wrapper">
      <h-search-table :columns="columns" :dataSource="dataSource" :total="20">
        <div slot="title" class="hao-search-table-title">
          <h3 :style="{ fontWeight: 'bold' }">学生列表</h3>
          <a-button type="primary">TEST</a-button>
        </div>
        <template slot="operations" slot-scope="text, record">
          <h-operation @click="onDelete(record)">编辑</h-operation>
          <h-operation @click="onDelete(record)">删除</h-operation>
        </template>
      </h-search-table>
    </div>
  </div>
</template>

<script>
const customColumns = Array.from({ length: 10 }).map((v, i) => ({
  title: "COLUMN" + i + 1,
  dataIndex: "COLUMN" + i + 1,
}));
export default {
  name: "App",
  data() {
    return {
      columns: [
        { title: "姓名", dataIndex: "name", filterType: "Input" },
        { title: "年龄", dataIndex: "age", filterType: "InputNumber" },
        { title: "生日", dataIndex: "bothDate", filterType: "DatePicker" },
        { title: "城市", dataIndex: "city", filterType: "Select" },
        { title: "班级", dataIndex: "class", filterType: "Cascader" },
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
      dataSource: Array.from({ length: 10 }).map((v, i) => {
        return {
          id: i,
          name: "张三" + i,
          age: 3,
          bothDate: "1990-01-01",
          city: i % 2 ? "武汉" : "北京",
          class: "三年级（2）班",
        };
      }),
    };
  },
  components: {},
  methods: {
    onDelete() {},
  },
};
</script>

<style>
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
