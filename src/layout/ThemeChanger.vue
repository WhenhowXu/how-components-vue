<template>
  <a-dropdown>
    <a-icon type="skin" />
    <a-menu slot="overlay" @click="onThemeChange">
      <a-menu-item v-for="item in themes" :key="item.value">
        {{ item.label }}
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: "ThemeChanger",
  data() {
    return {
      themeKey: "light",
      themes: [
        { label: "明亮", value: "light" },
        { label: "暗黑", value: "dark" },
      ],
    };
  },
  watch: {
    themeKey: {
      handler: function (val) {
        document.body.setAttribute('theme-mode', val)
      },
      immediate: true,
    },
  },
  methods: {
    onThemeChange({ key }) {
      this.themeKey = key;
    },
  },
};
</script>
