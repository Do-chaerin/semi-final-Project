<template>
  <div class="st_wrap">
    <p class="st_header">사전예약</p>
    <div class="st_top">
      <p>⭐예약자정보</p>
      <div class="st_user">
        <input type="text" placeholder="이름" />
        <input type="tel" placeholder="전화번호" />
      </div>
    </div>
    <p>⭐이용날짜 및 배송정보</p>
    <div class="st_time">
      <input type="date" class="st_date" />
      <label>
        <select>
          <option>--</option>
          <option v-for="hour in 25" :key="hour">
            {{ hour === 25 ? "00" : String(hour).padStart(2, "0") }}
          </option>
        </select>
        <p>시</p>
        <select>
          <option>--</option>
          <option v-for="minute in [0, 10, 20, 30, 40, 50]" :key="minute">
            {{ String(minute).padStart(2, "0") }}
          </option>
        </select>
        <p>분</p>
      </label>
    </div>
  </div>
  <div class="st_middle">
    <p>🚩출발장소</p>
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

    <p>🚩도착장소</p>
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
    <div class="st_price">
      <p>🌵여행가방 종류 및 수량</p>
      <div class="st_size">
        <p>S사이즈</p>
        <button>+</button>{{}}<button>-</button>
      </div>
      <div class="st_size">
        <p>M사이즈</p>
        <button>+</button>{{}}<button>-</button>
      </div>
      <div class="st_size">
        <p>L사이즈</p>
        <button>+</button>{{}}<button>-</button>
      </div>
      <div class="st_size">
        <p>기타사이즈</p>
        <button>+</button>{{3}}<button>-</button>
      </div>
      <div class="st_total">
        <p>총 {{}}원</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const startPlaces = ["공항", "동대구역", "숙소", "기타"];
const stopPlaces = ["공항", "동대구역", "숙소", "기타"];

const selectedStart = ref(null);
const selectedStop = ref(null);
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
}

.st_header {
  font-size: $title-font-size-s;
  margin-bottom: $margin-m;
  font-family: $font-family;
  padding-left: $padding-sss;
  border-left: 5px solid $main-color;
}
.st_top {
  display: flex;
  flex-direction: column;
  margin: $margin-sss;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.st_time {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.st_date {
  width: 40%;
}

label {
  display: flex;
  width: 90%;
  height: 30px;
}

select {
  height: 30px;
  margin: 5px;
}

input {
  width: 90%;
  height: 30px;
  margin: 5px;
}

.st_place {
  background-color: #fff;
  border: 2px solid $sub-color;
  margin: 5px;
  padding: 5px;
  border-radius: $border-radius-m;
  font-size: $basic-font-size-m;
  cursor: pointer;
}

.st_place.active {
  background-color: $main-color;
  color: #fff;
  border-color: $main-color;
}
.st_middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
button {
  background-color: #fff;
  border-color: $main-color;
  border-radius: 25px;
}
.st_size {
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.st_size {
  margin: $margin-sss;
  padding: $padding-m;
  border: 1px solid #333;
  border-radius: 15px;
}
.st_total {
  font-size: 20px;
  border: 1px solid #333;
  border-radius: 15px;
  padding: $padding-sss;
}
</style>
