<template>
  <div>
    <blog-header></blog-header>
    <div class="container">
      <div class="kuang" v-for="entity in list" v-bind:key="entity.id">
        <h1>
          <strong>{{entity.title}}</strong>
        </h1>
        <h2>摘要:{{entity.abstract}}</h2>
        <div v-html="entity.content" class="ql-editor" v-show="isActive">{{entity.content}}</div>
        <el-button type="text" @click="onClick(isActive)">{{msg}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import blogHeader from "@/components/header.vue";
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  name: "home",
  components: { blogHeader, quillEditor },
  data() {
    return {
      isActive: false,
      msg:"展开正文",
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios
        .get("/articles")
        .then(successResponse => {
          this.list = successResponse.data;
        })
        .catch(failResponse => {});
    },
    onClick(isActive){
        if(isActive==true){
            this.msg="展开正文";
            this.isActive = false;
        }else{
            this.msg="收起正文";
            this.isActive = true;
        }
    }
  }
};
</script>

<style scoped>
@import "/../styles/site.css";
.archives-container {
  background-color: #f7f7f7;
}

div.img {
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 180px;
}

div.img:hover {
  border: 1px solid #777;
}

div.img img {
  width: 180px;
  height: 200px;
}

div.desc {
  padding: 15px;
  width: 180px;
  height: 50px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

div.kuang {
  float: left;
  padding: 20px;
}

div.container {
  margin-top: 5%;
  margin-left: 25%;
  margin-right: 15%;
  width: 60%;
}
</style>
