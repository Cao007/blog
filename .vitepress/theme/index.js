// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Test from './components/Test.vue'
import Comment from './components/Comment.vue'

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
  }
}
