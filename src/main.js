import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import VueRouter from 'vue-router'

import App from './App.vue'
import Main from './Main.vue'
import Landing from './Landing.vue'

Vue.use(VueCarousel)
Vue.use(VueRouter)

const routes = [{
    path: '/:token',
    component: App
},
{
    path: '/',
    component: Landing
}]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(Main)
}).$mount('#app')