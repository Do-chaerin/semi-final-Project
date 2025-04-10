<template>
  <div class="st_wrap">
    <p class="st_header">당일예약</p>
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
    <button class="st_reserve-btn" @click="submitReservation">예약하기</button>
  </div>
</template>

<script setup>
import { useReservationStore } from "@/views/yeyak/reservationStore";
const reservationStore = useReservationStore();
import { useRouter } from "vue-router";
const router = useRouter();
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
    price: 12000,
  },
  {
    label: "M사이즈",
    tag: "화물용 캐리어, 등산 가방 등",
    count: 0,
    price: 16000,
  },
  {
    label: "L사이즈",
    tag: "대형 캐리어, 배낭, 골프백 등",
    count: 0,
    price: 18000,
  },
  {
    label: "기타사이즈",
    tag: "기타 물품 및 표시 외 사이즈",
    count: 0,
    price: 25000,
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
// 예약 저장 및 이동
function submitReservation() {
  reservationStore.setReservation({
    name: name.value,
    phone: phone.value,
    selectedDate: selectedDate.value,
    selectedHour: selectedHour.value,
    selectedMinute: selectedMinute.value,
    selectedStart: selectedStart.value,
    selectedStop: selectedStop.value,
    sizes: sizes.map((item) => ({ ...item })), // 깊은 복사
    totalPrice: totalPrice.value,
  });

  router.push("/yeyak4");
}
</script>

<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

// 공통 너비 변수
$base-width: 350px;

.st_wrap {
  width: 100%;
  max-width: 700px;
  margin: 0 auto $margin-m auto;
  padding-top: $margin-titletopbottom;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: $font-family;
}

.st_header {
  font-size: $title-font-size-s;
  margin-bottom: $margin-m;
  padding-left: $padding-sss;
  border-left: 5px solid $main-color;
}

.st_top {
  width: 100%;
  padding: 20px;
  background-color: $background-maincolor;
  border-radius: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.st_section-title {
  font-weight: bold;
  font-size: 1.1rem;
  margin: 15px auto 10px;
  text-align: center;
}

input,
select,
button,
label {
  width: 100%;
  max-width: $base-width;
  height: 44px;
  padding: 10px;
  margin: 8px auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
}

.st_user,
.st_time,
.st_price,
.st_size {
  width: 100%;
  max-width: $base-width;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.st_date {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 100%; // 넓게
  flex-wrap: wrap; // 화면 작을 때 줄바꿈 허용
  text-align: center;
}

.st_date input[type="date"] {
  flex: 1;
  max-width: 150px;
  height: 44px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

.st_select-time {
  display: flex;
  align-items: center;
  gap: 5px;
  flex: 2;
  min-width: 160px;
}

.st_select-time select {
  width: 70px;
  text-align: center;
  height: 44px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
}

.st_select-time span {
  font-weight: bold;
}

.st_start,
.st_stop {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: $base-width;
  margin: 10px auto;
}

.st_place {
  flex: 1;
  min-width: 60px;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.st_place.active {
  background-color: $sub-color;
  color: #fff;
  border-color: $sub-color;
}

.st_size {
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  margin: 10px 0;
}

.st_text {
  text-align: left;
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
}

.st_counter {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
}

.st_counter button {
  width: 32px;
  height: 32px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: $imgsub-color;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.st_counter button:active {
  background-color: $point-color;
}

.st_total {
  width: 100%;
  max-width: $base-width;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.st_reserve-btn {
  margin-top: 20px;
  width: 150px;
  background-color: $main-color;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.st_reserve-btn:hover {
  background-color: $hover;
}
</style>
