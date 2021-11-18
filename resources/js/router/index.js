import Vue from 'vue';
import Router from 'vue-router';


// Containers
import TheContainer from "../layouts/TheContainer.vue" ;

// Pages

import Mail from "../pages/Mail.vue";
import Home from "../pages/Home.vue";
import Marketing from "../pages/Marketing.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    scrollBehavior: () => ({ y: 0 }),
    routes: configRoutes()
})

function configRoutes () {
    return [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
        },
        {
            path: '/mail',
            name: 'mail',
            component: Mail,
        },
        {
            path: '/marketing',
            name: 'marketing',
            component: Marketing,
        }

    ]
}
