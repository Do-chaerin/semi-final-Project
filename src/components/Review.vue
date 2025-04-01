<script setup></script>
<template>
  <div class="st_wrap">
    <!-- 이미지배너 -->
    <div class="st_reviewbanner">
      <img src="/image/st_reviewbanner.jpg" alt="리뷰이벤트" />
    </div>
    <div class="st_reviewphoto"></div>
  </div>
</template>
<style lang="scss" scoped>
@use "@/assets/Main.scss" as *;
.st_wrap {
  width: 700px;
  display: flex;
}
//리뷰배너
.st_reviewbanner {
  justify-content: center;
}
img {
  width: 100%;
  height: 100%;
}
</style>
