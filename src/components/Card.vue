<template>
  <div class="card-container">
    <div class="card" v-for="product in products" :key="product.image">
      <div class="img-product">
        <img :src="product.image" alt="Product" />
      </div>
      <div class="detail">
        <div class="title">
          <div class="tag">
            <a v-for="tag in tags" :href="tag.link">
              <span>{{ tag.name }}</span>
            </a>
          </div>
          <h5>
            <a :href="product.link"
              >✨{{ product.name }}님의 <br />이용후기입니다✨</a
            >
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const tags = ref([
  {
    link: "#",
    name: "⭐⭐⭐⭐⭐",
  },
]);
const products = ref([
  {
    name: "Domino",
    image: "./image/cr/st_review01.jpg",
    link: "#",
  },
  {
    name: "Domino",
    image: "./image/cr/st_review02.jpg",
    link: "#",
  },
  {
    name: "Domino",
    image: "./image/cr/st_review03.jpg",
    link: "#",
  },
  {
    name: "Domino",
    image: "./image/cr/st_review03.jpg",
    link: "#",
  },
  {
    name: "Domino",
    image: "./image/cr/st_review03.jpg",
    link: "#",
  },
  {
    name: "Domino",
    image: "./image/cr/st_review03.jpg",
    link: "#",
  },
]);
</script>
<style>
.card {
  width: 200px;
  height: 300px;
  border: 1px solid #dedfdf;
  border-radius: 10px;
}
.card-container {
  width: 700px;
  display: flex; /* 가로 정렬 */
  justify-content: center; /* 가운데 정렬 */
  gap: 20px; /* 카드 사이 여백 */
  flex-wrap: wrap; /* 화면이 작아지면 줄바꿈 */
}
.card:hover {
  border: 2px solid #adaeae;
  box-shadow: 2px 2px #adaeae;
}
.card .img-product {
  height: 80%;
}
.card .img-product img {
  height: 100%;
  width: 100%;
}
.detail {
  height: 40%;
  display: flex;
}
.tag a {
  font-size: 12px;
  color: black;
  background-color: #dedfdf;
  border-radius: 20px;
  text-decoration: none;
}
.tag a:not(:first-child) {
  margin-left: 8px;
}
.detail a {
  color: black;
  text-decoration: none;
}
.detail .tag a:hover {
  color: #fff;
  background-color: #fc6969;
}
.detail .title h3:hover {
  color: #fc6969;
}
</style>
