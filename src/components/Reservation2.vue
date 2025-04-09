<template>
  <div class="st_wrap">
    <p class="st_header">사전예약</p>
    <div class="st_top">
      <p class="st_section-title">예약자 정보</p>
      <div class="st_user">
        <input type="text" placeholder="이름" v-model="name" />
        <input type="tel" placeholder="전화번호" v-model="phone" />
      </div>
      <div class="st_time">
        <p class="st_section-title">이용 날짜 및 시간</p>
        <div class="st_date">
          <input type="date" class="st_date" v-model="selectedDate" />
          <div class="st_select-time">
            <select v-model="selectedHour">
              <option>--</option>
              <option v-for="hour in 24" :key="hour">
                {{ hour === 24 ? "00" : String(hour).padStart(2, "0") }}
              </option>
            </select>
            <span>시</span>
            <select v-model="selectedMinute">
              <option>--</option>
              <option v-for="minute in [0, 10, 20, 30, 40, 50]" :key="minute">
                {{ String(minute).padStart(2, "0") }}
              </option>
            </select>
            <span>분</span>
          </div>
        </div>
        <div class="st_middle">
          <p class="st_section-title">출발 장소</p>
          <div class="st_start">
            <button
              v-for="(place, index) in startPlaces"
              :key="'start-' + index"
              class="st_place"
              :class="{ active: selectedStart === place }"
              @click="selectedStart = place">
              {{ place }}
            </button>
          </div>
          <p class="st_section-title">도착 장소</p>
          <div class="st_stop">
            <button
              v-for="(place, index) in stopPlaces"
              :key="'stop-' + index"
              class="st_place"
              :class="{ active: selectedStop === place }"
              @click="selectedStop = place">
              {{ place }}
            </button>
          </div>
          <p class="st_section-title">여행가방 종류 및 수량</p>
          <div class="st_price">
            <div class="st_size" v-for="(item, index) in sizes" :key="index">
              <div class="st_text">
                <p class="st_label">{{ item.label }}</p>
                <p class="st_tag">{{ item.tag }}</p>
              </div>
              <div class="st_pm">
                <div class="st_counter">
                  <button @click="item.count++">+</button>
                  <span>{{ item.count }}</span>
                  <button @click="item.count > 0 && item.count--">-</button>
                </div>
                <span class="st_price"
                  >{{ formatCurrency(item.count * item.price) }}원</span
                >
              </div>
            </div>
            <div class="st_total">
              총 <strong>{{ formatCurrency(totalPrice) }}원</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/yeyak3">
      <button class="st_reserve-btn">예약하기</button>
    </router-link>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
//출발, 도착장소
const startPlaces = ["공항", "동대구역", "숙소", "기타"];
const stopPlaces = ["공항", "동대구역", "숙소", "기타"];

const name = ref("");
const phone = ref("");
const selectedDate = ref("");
const selectedHour = ref("--");
const selectedMinute = ref("--");

const selectedStart = ref(null);
const selectedStop = ref(null);

// 사이즈 정보와 가격 정의
const sizes = reactive([
  {
    label: "S사이즈",
    tag: "기내용 캐리어,소형 배낭 등",
    count: 0,
    price: 10000,
  },
  {
    label: "M사이즈",
    tag: "화물용 캐리어, 등산 가방 등",
    count: 0,
    price: 14000,
  },
  {
    label: "L사이즈",
    tag: "대형 캐리어, 배낭, 골프백 등",
    count: 0,
    price: 16000,
  },
  {
    label: "기타사이즈",
    tag: "기타 물품 및 표시 외 사이즈",
    count: 0,
    price: 20000,
  },
]);

// 총합 계산
const totalPrice = computed(() =>
  sizes.reduce((sum, item) => sum + item.count * item.price, 0)
);
const formatCurrency = (amount) => {
  return new Intl.NumberFormat("ko-KR", {
    currency: "KRW", //대한민국 원으로 표시
  }).format(amount); // 숫자를 읽기 쉬운 문자열로 바꿔줌
};
</script>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

.st_wrap {
  width: 700px;
  margin-top: $margin-titletopbottom;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: $margin-m;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: $font-family;
}

.st_header {
  text-align: center;
  font-size: $title-font-size-s;
  margin-bottom: $margin-m;
  padding-left: $padding-sss;
  border-left: 5px solid $main-color;
}
.st_top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 20px;
  background-color: $background-maincolor;
  border-radius: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
}
.st_section-title {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 15px auto;
  font-weight: bold;
  font-size: 1.1rem;
}
.st_user input {
  width: 70%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.st_time {
  padding: 10px;
  margin: 8px 0;
  width: 70%;
}

.st_date {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  gap: 10px;
}

.st_time input {
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
}
select {
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
}

label {
  padding: 10px;
  margin: 8px 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.st_select-time {
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.st_place {
  padding: 10px 15px;
  margin: 8px 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  transition: all 0.3s ease;
}
.st_place.active {
  background-color: $sub-color;
  color: #fff;
  border-color: $sub-color;
}
.st_price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
}
.st_size {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  background-color: #fff;
  margin: 8px 0;
}
.st_text {
  display: flex;
  flex-direction: column;
}
.st_label {
  font-size: $basic-font-size-L;
}
.st_tag {
  color: #7b7b7b;
  font-size: $basic-font-size-s;
}
.st_pm {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.st_price{
  width: 70%;
}
.st_counter,
.st_price {
  margin: 5px;
  padding: 5px;
}
.st_counter button {
  padding: 5px 10px;
  margin: 0 5px;
  border-radius: 5px;
  border: none;
  background-color: $imgsub-color;
  color: white;
  font-weight: bold;
  font-size: 15px;
}
.st_counter button:active {
  background-color: $point-color;
}
.st_total {
  background-color: #fff;
  width: 70%;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 0;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 15px;
}
.st_reserve-btn {
  margin-top: 20px;
  padding: 12px 30px;
  background-color: $main-color;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.st_reserve-btn:hover {
  background-color: $hover;
}
</style>
