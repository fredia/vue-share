<template>
    <header id="header" :class="'header bg-white' + headerClass">
        <div class="navbar-container">
            <router-link to="/" class="navbar-logo">
                <span  style="font-size:16px;color:cadetblue">综合性资源共享平台</span>
            </router-link>
            <div class="navbar-menu">
                <router-link to="/book">图书</router-link>
                <router-link to="/slide">课件</router-link>
                <router-link to="/article">文章</router-link>
                <router-link to="/about">项目介绍</router-link>
            </div>
        </div>
    </header>
</template>

<script>

    export default {
        name: "Header",
        data() {
            return {
                qu: null,

                offsetTop: 0,   // 触发bar浮动的阈值
                headerClass: '', //给Header设置样式
            }
        },
        mounted() {
            // 设置bar浮动阈值为 #fixedBar 至页面顶部的距离
            this.offsetTop = document.querySelector('#header').offsetHeight;

            // 开启滚动监听
            window.addEventListener('scroll', this.handleScroll);
        },
        methods: {

            search() {
                if (this.qu != null) {
                    this.$router.push('/search/' + this.qu);
                }
            },

            // 滚动监听  滚动触发的效果写在这里
            handleScroll() {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                var scroll = scrollTop - this.offsetTop;
                this.offsetTop = scrollTop;
                if (scroll < 0) {
                    this.headerClass = ' animated headroom--not-bottom slideDown headroom--top';
                } else {
                    this.headerClass = ' animated headroom--not-bottom headroom--not-top slideUp';
                }
            }
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll); // 离开页面 关闭监听 不然会报错
        }
    }
</script>

<style scoped>
    @import '../styles/site.css';
.span {
    color: cadetblue;
    font-size: medium
}

</style>