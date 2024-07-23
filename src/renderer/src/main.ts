import '@renderer/assets/global.scss'
import '@renderer/assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
