<template>
  <div class="container">
    <div class="login-page">
      <h3 style="text-align: center;">综合性资源共享平台登陆</h3>
      <el-form ref="form" :model="form" label-width="70px">
        <el-form-item label="用户ID">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="margin-left:15%" type="primary" @click="onSubmit">登陆</el-button>
          <el-button @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        id: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
       this.$axios
        .post("/login",this.form)
        .then(successResponse => {
          this.$router.push("/profile");
        })
        .catch(failResponse => {
        });
    },
    register(){
      this.$router.push("/register");
    }
  }
};
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css");
div.container {
  height: 100%;
  width: 100%;
  position:absolute;
  background: url("../../static/wallhaven-752185.jpg");
  background-repeat:no-repeat;
  background-size: 100%;
}
div.login-page {
  margin-left: auto;
  margin-right: auto;
  margin-top: 10%;
  width: 400px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  padding: 35px 35px 15px 15px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
