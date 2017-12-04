import Vue from 'vue'
import VueCarousel from 'vue-carousel'
import VueRouter from 'vue-router'

import App from './App.vue'
import Main from './Main.vue'

Vue.use(VueCarousel)
Vue.use(VueRouter)

const routes = [{
    path: '/:token',
    component: App
}]

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(Main)
}).$mount('#app')