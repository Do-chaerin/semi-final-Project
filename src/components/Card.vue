<template>
  <div class="st_bottom">
    <div class="card-container">
      <div
        class="card"
        v-for="product in paginatedProducts"
        :key="product.image">
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
            <h4>✨{{ product.name }}✨님의 이용후기입니다</h4>
          </div>
        </div>
      </div>
    </div>

    <!-- 페이지네이션 버튼 -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">이전</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        다음
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 태그 정보
const tags = ref([{ name: " ⭐⭐⭐⭐⭐ " }]);

// 상품 목록
const products = ref([
  { name: "Domino", image: "./image/cr/st_review01.jpg" },
  { name: "Domino", image: "./image/cr/st_review02.jpg" },
  { name: "Domino", image: "./image/cr/st_review03.jpg" },
  { name: "Domino", image: "./image/cr/st_review04.jpg" },
  { name: "Domino", image: "./image/cr/st_review05.jpg" },
  { name: "Domino", image: "./image/cr/st_review06.jpg" },
  { name: "Domino", image: "./image/cr/st_review07.jpg" },
  { name: "Domino", image: "./image/cr/st_review08.jpg" },
  { name: "Domino", image: "./image/cr/st_review09.jpg" },
  { name: "Domino", image: "./image/cr/st_review10.jpg" },
  { name: "Domino", image: "./image/cr/st_review11.jpg" },
  { name: "Domino", image: "./image/cr/st_review12.jpg" },
]);

// 페이지네이션 상태
const currentPage = ref(1);
const itemsPerPage = 8; // 한 페이지당 3개 상품 표시

// 총 페이지 수 계산
const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

// 현재 페이지에 맞는 상품 목록 반환
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return products.value.slice(start, end);
});

// 페이지 이동 함수
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<style>
.card-container {
  width: 700px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.card {
  width: 150px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.card:hover {
  border: 2px solid #adaeae;
  box-shadow: 2px 2px #adaeae;
}

.card .img-product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
}

.card .img-product img {
  height: 90%;
  width: 90%;
  border-radius: 10px;
}

.detail {
  height: 20%;
  padding-left: 10px;
}

.title {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tag a {
  font-size: 12px;
  color: black;
  background-color: #dedfdf;
  border-radius: 20px;
  text-decoration: none;
}

/* 페이지네이션 스타일 */
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.pagination button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
