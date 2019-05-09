<template>
  <div>
    <el-dialog title="上传图书" :visible.sync="dialogTableVisible">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="doUpload"
        accept="application/pdf"
        :limit="1"
        :before-upload="beforeUploadPdf"
      >
        <el-button slot="trigger" size="small" type="primary">上传pdf</el-button>
        <div slot="tip" class="el-upload-list__item-name">{{pdfName}}</div>
      </el-upload>

      <el-upload
        class="upload-demo"
        ref="upload"
        action="doUpload"
        accept="image/jpeg, image/gif, image/png"
        :limit="1"
        :before-upload="beforeUploadImag"
      >
        <el-button slot="trigger" size="small" type="primary">上传图片</el-button>
        <div slot="tip" class="el-upload-list__item-name">{{imagName}}</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="submitUpload()">确定</el-button>
      </span>
    </el-dialog>
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
      <el-button type="text" @click="dialogTableVisible = true">点击上传图书</el-button>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="图书名称" style="width:25%"></el-table-column>
        <el-table-column prop="publisher" label="发布者" style="width:25%"></el-table-column>
        <el-table-column prop="createdTime" label="发布日期" style="width:25%"></el-table-column>
        <el-table-column label="操作" style="width:25%">
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
      dialogTableVisible: false,
      sysUserName: "komu",
      sysUserAvatar: require("@/assets/user.png"),
      tableData: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios
        .get("/userBooks?user=" + window.sessionStorage.login)
        .then(successResponse => {
          this.tableData = successResponse.data;
        })
        .catch(failResponse => {});
    }
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
.el-dialog {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 !important;
    transform: translate(-50%, -50%);
    max-height: calc(100% - 30px);
    max-width: calc(100% - 30px);
    display: flex;
    flex-direction: column;
}

</style>

