<template>
  <div id="app">
    <div class="page-wrapper">
      <h-search-table :columns="columns" :dataSource="dataSource" :total="20">
        <h3 slot="title">表格标题</h3>
        <template slot="operations" slot-scope="text, record">
          <h-operation @click="onDelete(record)">删除</h-operation>
        </template>
      </h-search-table>
    </div>
  </div>
</template>

<script>
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
        { title: "月份", dataIndex: "month", filterType: "MonthPicker", justInFilter: true },
        { title: "年份", dataIndex: "year", filterType: "MonthPicker", justInFilter: true },
        { title: "星期", dataIndex: "week", filterType: "WeekPicker", justInFilter: true },
        {
          title: "操作",
          dataIndex: "operations",
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
  background-color: lemonchiffon;
}
</style>
