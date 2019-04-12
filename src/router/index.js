import Vue from 'vue'
import Router from 'vue-router'
import book from '@/pages/book.vue'
import about from '@/pages/about.vue'
import article from '@/pages/article.vue'
import slide from '@/pages/slide.vue'
import upload from '@/pages/upload.vue'
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
            component: book
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/article',
            name: 'article',
            component: article
        },
        {
            path: '/slide',
            name: 'slide',
            component: slide
        },
        {
            path: "/upload",
            name: "upload",
            component: upload
        }
    ]
})