import { createApp, defineComponent, h } from 'vue'
import './style.css'
import { App } from './app'

import { darkTheme } from 'naive-ui'
import { NConfigProvider } from 'naive-ui'

createApp(defineComponent({
  setup() {
    return () => h(NConfigProvider, {
      theme: darkTheme
    }, { default: () => h(App) })
  }
})).mount('#app')
