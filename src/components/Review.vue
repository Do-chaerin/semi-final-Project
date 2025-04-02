<script setup></script>
<template>
  <div class="st_wrap">
    <p>예약하기</p>
    <!-- 이미지배너 -->
    <div class="st_reviewbanner">
      <img src="/image/cr/st_reviewbanner.jpg" alt="리뷰이벤트" />
    </div>
    <div class="st_reviewphoto"></div>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
p {
  font-size: $title-font-size-m;
  font-family: $font-family;
  margin-bottom: $margin-s;
  padding-left: $padding-sss;
  border-left: 5px solid $main-color;
}
//리뷰배너
.st_reviewbanner {
  justify-content: center;
}
img {
  width: 80%;
  height: 80%;
}
</style>
