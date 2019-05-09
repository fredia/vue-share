<template>
  <div>
    <el-row style=" background-color:#1E90FF">
      <el-col :span="20">
        <el-menu
          :default-active="1"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#1E90FF"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">我的图书</el-menu-item>
          <el-menu-item index="2">我的课件</el-menu-item>
          <el-menu-item index="3">我的文章</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner">
            <img :src="this.sysUserAvatar">
            {{sysUserName}}
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-row>
      <el-table :data="tableData" height="250" border style="width: 100%">
        <el-table-column prop="name" label="图书名" width="180"></el-table-column>
        <el-table-column prop="user" label="发布者" width="180"></el-table-column>
        <el-table-column prop="date" label="发布日期" width="180"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "profile",
  data() {
    return {
      sysUserName: "komu",
      sysUserAvatar: require("@/assets/user.png"),
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          user: "上海",
        }
      ]
    };
  }
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.userinfo {
  text-align: right;
  line-height: 100%;
  float: right;
  padding-right: 35px;
}
.userinfo-inner {
  cursor: pointer;
  color: #fff;
}
img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 10px 0px 10px 10px;
  float: right;
}
</style>

