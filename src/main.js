import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import $ from 'jquery'

axios.defaults.baseURL = "http://127.0.0.1:2909/api/"

createApp(App).use(router).mount('#app')
