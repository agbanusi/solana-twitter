// CSS.
import './main.css'

mport { createApp } from 'vue'
import App from './App.vue'

// Routing.
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).mount('#app')
