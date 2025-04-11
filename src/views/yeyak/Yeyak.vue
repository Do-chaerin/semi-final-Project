<script setup>
import { ref } from "vue";

const dataUsageList = ref([
  {
    title: "개인정보이용내역",
    purpose: "서비스 이용을 위한 회원 식별",
    dataItems: "개인정보이용내역에 동의합니다.",
    isOpen: false,
    isChecked: false,
  },
  {
    title: "이용약관",
    purpose: "서비스 요금 결제 및 환불",
    dataItems: "이용약관에 동의합니다.",
    isOpen: false,
    isChecked: false,
  },
  {
    title: "이용시 주의사항",
    purpose: "서비스 문의 및 상담 이력 관리",
    dataItems: "주의사항을 숙지하였습니다.",
    isOpen: false,
    isChecked: false,
  },
]);
const toggleDetails = (index) => {
  dataUsageList.value[index].isOpen = !dataUsageList.value[index].isOpen;
};
</script>

<template>
  <div class="st_wrap">
    <p class="st_header">예약하기</p>
    <!-- 이미지 영역 -->
    <div class="st_img">
      <img src="/images/cr/st_reservation01.jpg" alt="사전예약" />
      <img src="/images/cr/st_reservation02.jpg" alt="일반예약" />
    </div>

    <!-- toggle -->
    <div class="st_toggle">
      <div
        v-for="(item, index) in dataUsageList"
        :key="index"
        class="st_togglemenu">
        <div @click="toggleDetails(index)" class="st_toggleheader">
          <span class="st_toggletitle">{{ item.title }}</span>
          <span @click="toggleDetails(index)" class="st_togglebtn">
            {{ item.isOpen ? "▲" : "▼" }}
          </span>
        </div>

        <!-- 토글 내용 -->
        <div v-if="item.isOpen" class="st_details">
          <p>{{ item.purpose }}</p>
        </div>
        <div class="st_checkbox">
          <label>
            {{ item.dataItems }}
            <input type="checkbox" v-model="item.isChecked" />
          </label>
        </div>
      </div>
    </div>
    <div class="st_button">
      <router-link to="/yeyak2">
        <button class="st_reser">사전예약</button>
      </router-link>
      <router-link to="/yeyak3">
        <button class="st_reser">당일예약</button>
      </router-link>
    </div>
  </div>
</template>

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

.st_img {
  margin-bottom: $margin-m;
}

img {
  margin: $margin-sss;
}
.st_toggle {
  width: 100%;
  margin-bottom: $margin-L;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.st_togglemenu {
  width: 90%;
}

.st_toggleheader {
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  background-color: #b4b4b4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.st_togglebtn {
  font-size: 18px;
  cursor: pointer;
}

.st_details {
  margin-top: 10px;
  padding: 10px;
}

.st_checkbox {
  margin: 10px auto;
}

.st_checkbox label {
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: flex-end;
}

.st_checkbox input {
  margin-right: 8px;
}
.st_reser {
  padding: $padding-ss $margin-s;
  margin: $margin-ss;
  font-size: $basic-font-size-L;
  font-family: $font-family;
  color: #fff;
  background-color: $main-color;
  border: none;
  border-radius: $border-radius-sm;
  cursor: pointer;
}
.st_reser:hover {
  background-color: $hover;
}
</style>
