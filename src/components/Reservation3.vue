<template>
    <div class="st_wrap">
      <p class="st_header">📝 사전예약</p>
      <div class="st_top">
        <p class="st_section-title">⭐ 예약자 정보</p>
        <div class="st_user">
          <input type="text" placeholder="이름" v-model="name" />
          <input type="tel" placeholder="전화번호" v-model="phone" />
        </div>
      </div>
  
      <div class="st_time">
        <p class="st_section-title">⭐ 이용 날짜 및 시간</p>
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
        <p class="st_section-title">🚩 출발 장소</p>
        <div class="st_start">
          <button
            v-for="(place, index) in startPlaces"
            :key="'start-' + index"
            class="st_place"
            :class="{ active: selectedStart === place }"
            @click="selectedStart = place"
          >
            {{ place }}
          </button>
        </div>
  
        <p class="st_section-title">🚩 도착 장소</p>
        <div class="st_stop">
          <button
            v-for="(place, index) in stopPlaces"
            :key="'stop-' + index"
            class="st_place"
            :class="{ active: selectedStop === place }"
            :disabled="place === selectedStart"
            @click="selectedStop = place"
          >
            {{ place }}
          </button>
        </div>
  
        <div class="st_price">
          <p class="st_section-title">🌵 여행가방 종류 및 수량</p>
          <div class="st_size" v-for="(item, index) in sizes" :key="index">
            <p>{{ item.label }}</p>
            <div class="st_counter">
              <button @click="item.count++">+</button>
              <span>{{ item.count }}</span>
              <button @click="item.count > 0 && item.count--">-</button>
            </div>
            <span class="st_price">{{ item.count * item.price }}원</span>
          </div>
          <div class="st_total">
            총 <strong>{{ totalPrice }}원</strong>
          </div>
          <router-link to="/yeyak3">
            <button class="st_reserve-btn">예약하기</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, reactive } from "vue";
  
  const startPlaces = ["공항", "동대구역", "숙소", "기타"];
  const stopPlaces = ["공항", "동대구역", "숙소", "기타"];
  
  const name = ref("");
  const phone = ref("");
  const selectedDate = ref("");
  const selectedHour = ref("--");
  const selectedMinute = ref("--");
  
  const selectedStart = ref(null);
  const selectedStop = ref(null);
  
  const sizes = reactive([
    { label: "S사이즈", count: 0, price: 10000 },
    { label: "M사이즈", count: 0, price: 12000 },
    { label: "L사이즈", count: 0, price: 14000 },
    { label: "기타사이즈", count: 0, price: 15000 },
  ]);
  
  const totalPrice = computed(() =>
    sizes.reduce((sum, item) => sum + item.count * item.price, 0)
  );
  </script>
  
  <style lang="scss" scoped>
  .st_wrap {
    width: 90%;
    max-width: 700px;
    margin: 40px auto;
    padding: 20px;
    background-color: #fafafa;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  .st_header {
    font-size: 1.8rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 30px;
    border-left: 5px solid #00b894;
    padding-left: 15px;
  }
  .st_section-title {
    font-size: 1.2rem;
    margin: 20px 0 10px;
    font-weight: 600;
  }
  .st_user input,
  .st_time input,
  select {
    width: 90%;
    max-width: 300px;
    padding: 10px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .st_select-time {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  }
  .st_place {
    padding: 10px 15px;
    margin: 5px;
    border: 2px solid #ccc;
    border-radius: 10px;
    cursor: pointer;
    background-color: #fff;
    transition: all 0.3s ease;
  }
  .st_place.active {
    background-color: #00b894;
    color: #fff;
    border-color: #00b894;
  }
  .st_place:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: not-allowed;
  }
  .st_size {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #ddd;
    border-radius: 10px;
    padding: 15px;
    margin: 10px 0;
    background-color: #fff;
  }
  .st_counter button {
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 5px;
    border: none;
    background-color: #00cec9;
    color: white;
    font-weight: bold;
  }
  .st_total {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 15px;
  }
  .st_reserve-btn {
    margin-top: 20px;
    padding: 12px 30px;
    background-color: #00b894;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  .st_reserve-btn:hover {
    background-color: #019974;
  }
  </style>
  