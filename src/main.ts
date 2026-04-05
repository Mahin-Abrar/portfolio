import { createApp } from 'vue'
import { router } from './router'
import { initMotion } from './lib/motion'
import './styles/tailwind.css'
import App from './App.vue'

initMotion()
createApp(App).use(router).mount('#app')
