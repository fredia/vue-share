<template>
  <div>
    <blog-header></blog-header>
    <div class="container">
      <div class="kuang" v-for="entity in list" v-bind:key="entity.id">
        <div class="img">
          <a target="_blank" :href="entity.path">
            <img :src="entity.imag" :alt="entity.name" width="300" height="200">
          </a>
          <div class="desc">{{entity.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import blogHeader from "@/components/header.vue";
export default {
  name: "slide",
  components: { blogHeader },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
    
      this.$axios
        .get("/slides")
        .then(successResponse => {
          this.list = successResponse.data;
        })
        .catch(failResponse => {
        });
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
