import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import VueMoment from 'vue-moment'
import AppPosts from './pages/AppPosts.vue'
import SinglePost from './pages/SinglePost.vue'
import AddPost from './pages/AddPost.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
// Vue.use(require('vue-moment'));

const routes = [

    {path: '/', redirect: '/posts'},
    {path: '/posts', component: AppPosts, name: 'posts'},
    {path: '/posts/:id', component: SinglePost, name: 'single-post'},
    {path: '/add', component: AddPost, name: 'add-post'},
    {path: '/edit', component: AddPost, name: 'edit-post'}

]

const router = new VueRouter({

    routes,
    mode: 'history'

});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
