require('./bootstrap');
import Vue from 'vue'
import router from './router'
import App from './layouts/TheContainer'

const app= new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    render: h => h(App)
   /* components: {
        App
    }*/
})
