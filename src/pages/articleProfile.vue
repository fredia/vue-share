<template>
  <div>
    <el-dialog title="编辑文章" :visible.sync="dialogTableVisible" width="80%">
      <el-input v-model="article.title" placeholder="标题"></el-input>
      <el-input v-model="article.abstract" placeholder="摘要"></el-input>
      <div class="edit_container">
        <quill-editor
          v-model="article.content"
          ref="myQuillEditor"
          :options="editorOption"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)"
        ></quill-editor>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitUpload()">确定</el-button>
      </span>
    </el-dialog>
    <el-row>
      <el-button type="text" @click="dialogTableVisible = true">发布新文章</el-button>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column label="序号" type="index" style="width:20%"></el-table-column>
        <el-table-column prop="title" label="文章标题" style="width:20%"></el-table-column>
        <el-table-column prop="publisher" label="发布者" style="width:20%"></el-table-column>
        <el-table-column prop="createdTime" label="发布日期" style="width:20%"></el-table-column>
        <el-table-column label="操作" style="width:20%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
export default {
  name: "articleProfile",
  components: { quillEditor },
  data() {
    return {
      article: {
        publisher: "",
        abstract: "",
        title: "",
        content: `<p></p><p><br></p><ol><li><strong><em>Or drag/paste an image here.</em></strong></li><li><strong><em>rerew</em></strong></li><li><strong><em>rtrete</em></strong></li><li><strong><em>tytrytr</em></strong></li><li><strong><em>uytu</em></strong></li></ol>`
      },
      dialogTableVisible: false,
      tableData: [],
      editorOption: {}
    };
  },
  created() {
    this.getList();
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  methods: {
    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    getList() {
      this.article.publisher = window.sessionStorage.login;
      console.log(this.article);
      this.$axios
        .get("/userArticles?user=" + window.sessionStorage.login)
        .then(successResponse => {
          this.tableData = successResponse.data;
        })
        .catch(failResponse => {});
    },
    submitUpload() {
      this.$axios
        .post(`/uploadArticle`, this.article)
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
