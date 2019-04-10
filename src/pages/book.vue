<template>
  <div>
    <blog-header></blog-header>
    <div class="container">
      <div class="kuang" v-for="entity in list" v-bind:key="entity.id">
        <div class="img">
          <a target="_blank" :href="entity.pdf">
            <img :src="entity.src" :alt="entity.title" width="300" height="200">
          </a>
          <div class="desc">这里添加图片NXJXNJASNSAXN文本描述</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogHeader from "@/components/header.vue";
export default {
  name: "home",
  components: { blogHeader },
  data() {
    return {
      list: [
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        },
        {
          id: 1,
          src: require("../assets/ver.png"),
          pdf:
            "http://localhost:8081/public/static/72f0c345dad04bb299706a76b0d16ee9.pdf",
          title: "看我",
          publishTime: "2018-09-23"
        }
      ]
    };
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
  width: 100%;
  height: auto;
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
  padding:20px;
}

div.container {
  margin-left: 25%;
  margin-right: 15%;
  width: 60%;
}
</style>
