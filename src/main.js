import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'  // Import style global

createApp(App).use(router).mount('#app')
