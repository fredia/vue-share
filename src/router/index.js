import Vue from 'vue'
import Router from 'vue-router'
import book from '@/pages/book.vue'
import about from '@/pages/about.vue'
import article from '@/pages/article.vue'
import slide from '@/pages/slide.vue'
import upload from '@/pages/upload.vue'
import login from '@/pages/login.vue'
import register from '@/pages/register.vue'
import profile from '@/pages/profile.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/book'
        },
        {
            path: '/book',
            name: 'book',
            component: book,
            meta:{
                needLogin: false
            }
        },
        {
            path: '/about',
            name: 'about',
            component: about,
            meta:{
                needLogin: false
            }
        },
        {
            path: '/article',
            name: 'article',
            component: article,
            meta:{
                needLogin: false
            }
        },
        {
            path: '/slide',
            name: 'slide',
            component: slide,
            meta:{
                needLogin: false
            }
        },
        {
            path: "/upload",
            name: "upload",
            component: upload
        },
        {
            path: "/login",
            name: "login",
            component: login
        },
        {
            path: "/register",
            name: "register",
            component: register
        },
        {
            path: "/profile",
            name: "profile",
            component: profile,
            meta:{
                needLogin: true
            }
        }
    ]
})