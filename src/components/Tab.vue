<script setup>
import { ref } from "vue";
// 탭키 내용
const activeTab = ref("subway");

// 제목
const tabsTitle = [
  "대구지하철 1호선",
  "대구지하철 2호선",
  "대구 기차역",
  "대구 국제공항",
];
// 소제목
const tabsSubTitle = ["장소", "위치", "보관함 수"];
// 내용들
// 지하철1호선 1번째
const tabsContents1 = ref([
  { id: 1, place: "반월당역", location: "1호선출구 14-21번", count: 38 },
  { id: 2, place: "중앙로역A", location: "1번 출구 방향 지하1층", count: 14 },
  { id: 3, place: "중앙로역B", location: "대현프리몰방향 계단밑", count: 14 },
  { id: 4, place: "중앙로역C", location: "즉석사진기 옆", count: 29 },
  { id: 5, place: "중앙로역D", location: "지하1층 3번 출구", count: 14 },
  { id: 6, place: "중앙로역E", location: "지하1층 1번 출구", count: 34 },
  { id: 7, place: "대구역", location: "GS25옆", count: 14 },
  { id: 8, place: "칠성시장역", location: "3번 출구 방향", count: 7 },
  { id: 9, place: "신천역", location: "화장실 옆 1,2번 출구", count: 14 },
  { id: 10, place: "동대구역A", location: "다이소 왼쪽편", count: 14 },
]);
// 지하철1호선 2번째
const tabsContents2 = ref([
  { id: 1, place: "동대구역B", location: "다이소 오른편", count: 14 },
  { id: 2, place: "동대구역쇼룸A", location: "1번출구방향", count: 29 },
  { id: 3, place: "동대구역쇼룸B", location: "1번출구방향", count: 26 },
  { id: 4, place: "동구청역", location: "쏘유아울렛 앞 2,3번출구", count: 38 },
  { id: 5, place: "아양교역", location: "화장실옆 1,4번 출구", count: 38 },
  { id: 6, place: "방촌역", location: "화장실옆 2,3번 출구", count: 38 },
  { id: 7, place: "안심역(종점)", location: "1,2번 출구 방향", count: 38 },
]);

// 스와이퍼 사용
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

// Swiper 스타일
import "swiper/css";
import "swiper/css/pagination";
</script>

<template>
  <div class="bb_StoreTable">
    <!-- tab키 -->
    <div class="bb_StoreTabs">
      <!-- 버튼3개 -->
      <!-- 지하철버튼 -->
      <button
        @click="activeTab = 'subway'"
        :class="{ active: activeTab === 'subway' }">
        지하철
      </button>
      <!-- 기차역버튼 -->
      <button
        @click="activeTab = 'train'"
        :class="{ active: activeTab === 'train' }">
        기차역
      </button>
      <!-- 공항버튼 -->
      <button
        @click="activeTab = 'airport'"
        :class="{ active: activeTab === 'airport' }">
        공항
      </button>
    </div>
    <!-- 테이블 내용 -->
    <div class="bb_StoreContents">
      <div class="bb_subwayContent" v-if="activeTab === `subway`">
        <Swiper
        :modules="[Pagination]"
        :pagination="{ clickable: true }"
        :slides-per-view="1"
        :space-between="30"
        class="mySwiper">
        <SwiperSlide>슬라이드 1</SwiperSlide>
        <SwiperSlide>슬라이드 2</SwiperSlide>
        <SwiperSlide>슬라이드 3</SwiperSlide>
        <SwiperSlide>슬라이드 4</SwiperSlide>
        <SwiperSlide>슬라이드 5</SwiperSlide>
      </Swiper>
      </div>
      <div class="bb_trainContent" v-if="activeTab === `train`">
      </div>
      <div class="bb_airportContent" v-if="activeTab === `airport`">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "/src/assets/_Variables.scss" as *;

// 테이블
.bb_StoreTable {
  position: relative;
  width: 100%;
  //   height: 70%;
  background-color: #fff;
  border: $main-color 1px solid;
  border-radius: 20px;
  

  // 탭키
  .bb_StoreTabs {
    position: relative;
    width: 100%;
    // height: 12%;
    background-color: $main-color;
    border-radius: 20px 20px 0 0;
    padding: 2% 0;
  }
  // 테이블내용
  .bb_StoreContents {
    width: 100%;
    height: 35vw;
    // background-color: red;
    .bb_subwayContent{
        width: 100%;
        height: 100%;
    }
    .bb_trainContent{
        width: 100%;
        height: 100%;
    }
    .bb_airportContent{
        width: 100%;
        height: 100%;
    }
  }
}

// 스와이퍼css
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
