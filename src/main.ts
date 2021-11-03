import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/main.css' // your custom styles here
import 'virtual:windi-utilities.css' // windicss utilities should be the last style import
import 'virtual:windi-devtools' // windicss devtools support (dev only)

createApp(App)
  .use(createPinia())
  .use(createRouter({ history: createWebHistory(), routes }))
  .mount('#app')
