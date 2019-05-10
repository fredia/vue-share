<template>
  <div>
    <el-dialog title="上传课件" :visible.sync="dialogTableVisible" width="30%">
      <el-upload
        class="upload-demo"
        ref="upload"
        action="doUpload"
        accept="application/pdf"
        :limit="1"
        :before-upload="beforeUploadPdf"
      >
        <el-button slot="trigger" size="small" type="primary">上传课件</el-button>
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
        <el-button slot="trigger" size="small" type="primary">上传课件封面</el-button>
        <div slot="tip" class="el-upload-list__item-name">{{imagName}}</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="submitUpload()">确定</el-button>
      </span>
    </el-dialog>
    <el-row>
      <el-button type="text" @click="dialogTableVisible = true">点击上传课件</el-button>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="序号" type="index" style="width:20%"></el-table-column>
        <el-table-column prop="name" label="课件名称" style="width:20%"></el-table-column>
        <el-table-column prop="publisher" label="发布者" style="width:20%"></el-table-column>
        <el-table-column prop="createdTime" label="发布日期" style="width:20%"></el-table-column>
        <el-table-column label="操作" style="width:20%">
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
  name: "slideProfile",
  data() {
    return {
      dialogTableVisible: false,
      tableData: [],
      responseRes: [],
      pdfName: "",
      imagName: "",
      files: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios
        .get("/userSlides?user=" + window.sessionStorage.login)
        .then(successResponse => {
          this.tableData = successResponse.data;
        })
        .catch(failResponse => {});
    },
    beforeUploadPdf(file) {
      this.files.push(file);
      const isLt100M = file.size / 1024 / 1024 < 100;
      if (!isLt100M) {
        this.$message.warning("上传模板大小不能超过 100MB!");
        return;
      }
      this.pdfName = file.name;
      return false; // 返回false不会自动上传
    },

    beforeUploadImag(file) {
      this.files.push(file);
      const isLt10M = file.size / 1024 / 1024 < 10;
      if (!isLt10M) {
        this.$message.warning("上传模板大小不能超过 5MB!");
        return;
      }
      this.imagName = file.name;
      return false; // 返回false不会自动上传
    },
    submitUpload() {
      console.log("上传" + this.files.length);
      if (this.imagName == "" || this.pdfName == "") {
        this.$message.warning("请选择要上传的文件！");
        return false;
      }
      let fileFormData = new FormData();
      fileFormData.append("file", this.files[0], this.pdfName); //filename是键，file是值，就是要传的文件，test.zip是要传的文件名
      fileFormData.append("file", this.files[1], this.imgName);
      let requestConfig = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      this.$axios
        .post(
          `/uploadSlide` + "?name=" + this.pdfName + "&user="+window.sessionStorage.login,
          fileFormData,
          requestConfig
        )
        .then(res => {
          this.$message({
            message: "操作成功",
            type: "success",
            duration: 1500,
            onClose: () => {
              this.getList();
            }
          });
        })
        .catch(failRes => {
          this.$message.error(failRes.msg);
        });
    }
  }
};
</script>
<style scoped>
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
