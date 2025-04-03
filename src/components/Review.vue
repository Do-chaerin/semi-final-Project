<script setup>
import { ref, computed } from "vue";

// 태그 정보
const tags = ref([{ name: "⭐⭐⭐⭐⭐" }]);

// 상품 목록
const products = ref([
  { name: "김철수", image: "./image/cr/st_review01.jpg" },
  { name: "이영희", image: "./image/cr/st_review02.jpg" },
  { name: "박지훈", image: "./image/cr/st_review03.jpg" },
  { name: "최민수", image: "./image/cr/st_review04.jpg" },
  { name: "장서연", image: "./image/cr/st_review05.jpg" },
  { name: "한가은", image: "./image/cr/st_review06.jpg" },
  { name: "정우성", image: "./image/cr/st_review07.jpg" },
  { name: "손예진", image: "./image/cr/st_review08.jpg" },
  { name: "유재석", image: "./image/cr/st_review09.jpg" },
  { name: "강호동", image: "./image/cr/st_review10.jpg" },
  { name: "신동엽", image: "./image/cr/st_review11.jpg" },
  { name: "이효리", image: "./image/cr/st_review12.jpg" },
  { name: "홍길동", image: "./image/cr/st_review13.jpg" },
  { name: "이수리", image: "./image/cr/st_review14.jpg" },
  { name: "박정식", image: "./image/cr/st_review15.jpg" },
  { name: "최가을", image: "./image/cr/st_review16.jpg" },
  { name: "장성규", image: "./image/cr/st_review17.jpg" },
  { name: "한동준", image: "./image/cr/st_review18.jpg" },
  { name: "정유리", image: "./image/cr/st_review19.jpg" },
  { name: "손석구", image: "./image/cr/st_review20.jpg" },
  { name: "이미정", image: "./image/cr/st_review21.jpg" },
  { name: "강동식", image: "./image/cr/st_review22.jpg" },
  { name: "신나라", image: "./image/cr/st_review23.jpg" },
  { name: "이아정", image: "./image/cr/st_review24.jpg" },
]);

// 이름 마스킹 (ex: 홍길동 → 홍**)
const maskedName = (name) => name.charAt(0) + "*".repeat(name.length - 1);

// 페이지네이션 상태
const currentPage = ref(1);
const itemsPerPage = 8; // 한 페이지당 8개 상품 표시

// 총 페이지 수 계산
const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

// 현재 페이지에 맞는 상품 목록 반환
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return products.value.slice(start, start + itemsPerPage);
});

// 페이지 이동 함수
const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<template>
  <div class="st_wrap">
    <p>이용후기</p>

    <!-- 리뷰 배너 -->
    <div class="st_reviewbanner">
      <img src="/image/cr/st_reviewbanner.jpg" alt="리뷰이벤트" />
    </div>

    <div class="st_bottom">
      <div class="st_card-container">
        <div
          class="st_card"
          v-for="product in paginatedProducts"
          :key="product.image">
          <div class="st_img-product">
            <img :src="product.image" alt="Product" />
          </div>
          <div class="st_detail">
            <div class="st_title">
              <div class="st_tag">
                <a v-for="tag in tags" :href="tag.link" :key="tag.name">
                  <span>{{ tag.name }}</span>
                </a>
              </div>
              <h4>
                ✨{{ maskedName(product.name) }}✨님의<br />이용후기입니다
              </h4>
            </div>
          </div>
        </div>
      </div>

      <!-- 페이지네이션 버튼 -->
      <div class="st_pagination">
        <button @click="prevPage" :disabled="currentPage === 1">이전</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">
          다음
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

.st_wrap {
  width: 700px;
  margin: $margin-titletopbottom auto $margin-m;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: $font-family;
}

p {
  font-size: $title-font-size-s;
  font-family: $font-family;
  margin-bottom: $margin-m;
  padding-left: $padding-sss;
  border-left: 5px solid $main-color;
}

// 리뷰 배너
.st_reviewbanner {
  justify-content: center;
  margin-bottom: $margin-L;
}

img {
  width: 90%;
  height: 90%;
}

// 리뷰 카드
.st_card-container {
  width: 800px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.st_card {
  width: 180px;
  height: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
}

.st_card:hover {
  border: 2px solid #adaeae;
  box-shadow: 2px 2px #adaeae;
  transform: scale(1.1);
}

.st_card .st_img-product {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
}

.st_card .st_img-product img {
  height: 90%;
  width: 90%;
  border-radius: 10px;
}

.st_detail {
  height: 30%;
  padding-left: 5px;
}

.st_title {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
}

h4 {
  margin-top: 10px;
}

.st_tag a {
  padding: 5px auto;
  font-size: 12px;
  color: black;
  background-color: #dedfdf;
  border-radius: 20px;
  text-decoration: none;
}

/* 페이지네이션 스타일 */
.st_pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.st_pagination button {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.st_pagination button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
