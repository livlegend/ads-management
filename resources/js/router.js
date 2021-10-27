import Vue from 'vue';
import VueRouter from 'vue-router';


// Containers
import TheContainer from "./layouts/TheContainer.vue" ;

// Views

Vue.use(VueRouter)

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
            name: 'home',
            //redirect: '/admin/file-upload',
            component:TheContainer,
            /*children: [
                {
                    path: 'file-upload',
                    name: 'File Upload',
                    component: FileUpload,
                }
            ]*/
        }

    ]
}
