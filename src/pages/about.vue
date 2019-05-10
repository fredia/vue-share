<template>
    <div>
        <blog-header></blog-header>
        <div class="container">
            <h1 style="  text-align: center">项目介绍</h1>
            本项目（综合性资源共享平台前端）是毕设（<i>基于c++的web轻量级框架的设计与实现</i>）的前端部分，毕设的重点部分在与web框架的设计与实现，综合性资源共享平台是对该框架可用性的一次实验验证。
            <br>
            平台登陆入口: http://101.200.60.173/#/login,登陆后可上传，删除（编辑）资源。
            <br>
            示例账户：(该账户是根管理员)
            <br>
            用户名：1000000，密码：123456
            <br>
            
        </div>
    </div>
</template>

<script>
import blogHeader from "@/components/header.vue";
export default {
    name: "slide",
    components: { blogHeader }
}
</script>
<style scoped>

div.container {
  margin-top: 5%;
  margin-left: 25%;
  margin-right: 15%;
  width: 60%;
}
</style>
