<template>
    <div class="app-wrapper">
        <div class="app-header">
            <h3>TEST</h3>
            <a-space>
                <ThemeChanger/>
            </a-space>
        </div>
        <div class="app-main">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import ThemeChanger from './ThemeChanger.vue';

export default {
    name: "AppLayout",
    components: {
        ThemeChanger
    }
};
</script>

<style lang="less" scoped>
.app-wrapper {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    .app-header {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        height: 50px;
        align-items: center;
        padding: 0 12px;
        // background-color: lightcoral;
    }
    .app-main {
        flex: 1;
    }
}
</style>