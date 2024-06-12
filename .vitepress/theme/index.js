// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick} from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Test from './components/Test.vue'
import Comment from './components/Comment.vue'
// mediumZoom图片缩放
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'
import './index.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after': () => h(Comment)
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 注册全局icon图标
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    // 注册全局vue组件
    app.component('Test', Test)
  },
  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  }
}
