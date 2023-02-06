<template>
  <div id="app">
    <p>KKKKKKKKKKKKKKKKKKKKKKkk</p>
    <h-search-table :columns="columns" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      columns: [{ title: "姓名", key: "c1" }],
    };
  },
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
