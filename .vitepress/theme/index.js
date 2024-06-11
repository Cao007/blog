// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
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
    app.use(ElementPlus)
    // 注册全局vue组件
    app.component('Test', Test)
  }
}
