// https://vitepress.dev/guide/custom-theme
import { onMounted, watch, nextTick } from "vue";
import DefaultTheme from "vitepress/theme";
import "./styles/index.scss";
// 导入element-plus、全局组件
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import Test from "./components/Test.vue";
// 导入布局组件
import Layout from "./Layout.vue";
// mediumZoom图片缩放
import mediumZoom from "medium-zoom";
import { useRoute } from "vitepress";

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    // 注册全局icon图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
    // 注册全局vue组件
    app.component("Test", Test);
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },
};
