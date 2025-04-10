<template>
  <div class="st_wrap">
    <p class="st_header">예약확인</p>
    <div class="st_check">
      <span>이름:</span>
      <span>연락처:</span>
      <span>날짜:</span>
      <span>시간:</span>
      <span>출발장소:</span>
      <span>도착장소:</span>
      <span></span>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
@use "@/assets/_Variables.scss" as *;

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
.st_check {
  width: 100%;
  padding: 20px;
  background-color: $background-maincolor;
  border-radius: 20px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
