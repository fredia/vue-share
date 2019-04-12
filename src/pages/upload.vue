<template>
  <div>
    <blog-header></blog-header>

    <div class="container">
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
    </div>
  </div>
</template>

<script>
import blogHeader from "@/components/header.vue";
export default {
  name: "upload",
  components: { blogHeader },
  data() {
    return {
      loginInfo: {
        username: "",
        password: ""
      },
      responseRes: [],
      pdfName: "",
      imagName: "",
      files: []
    };
  },
  methods: {
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
          `/upload_book` + "?name=" + this.pdfName,
          fileFormData,
          requestConfig
        )
        .then(res => {
          if (data && data.code === 0) {
            this.$message({
              message: "操作成功",
              type: "success",
              duration: 1500,
              onClose: () => {
                this.visible = false;
                this.$emit("refreshDataList");
              }
            });
          } else {
            this.$message.error(data.msg);
          }
        });
    }
  }
};
</script>

<style scope>
input[type="file"] {
  display: none;
}
div.container {
  margin-top: 5%;
  margin-left: 25%;
  margin-right: 15%;
  width: 60%;
}
</style>

