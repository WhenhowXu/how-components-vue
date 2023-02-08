<template>
  <div id="app">
    <div class="page-wrapper">
      <h-search-table :columns="columns" :dataSource="dataSource" :total="20">
        <h3 slot="title">表格标题</h3>
        <template slot="operations" slot-scope="text, record">
          <h-Operation @click="onDelete(record)">删除</h-Operation>
        </template>
      </h-search-table>
      <h-Operation>删除</h-Operation>
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
        { title: "年龄", dataIndex: "age" },
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
