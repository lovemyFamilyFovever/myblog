// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './custom.css'
import MyLayout from './MyLayout.vue'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

/** @type {import('vitepress').Theme} */
export default {
    extends: DefaultTheme,
    Layout: MyLayout
}