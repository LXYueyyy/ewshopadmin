import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from './views/Home.vue'
import Login from './views/Login.vue'

const routes = [
    {path:'/',component: Home},
    {path:'/login',component: Login}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
