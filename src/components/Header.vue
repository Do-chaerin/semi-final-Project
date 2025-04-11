<template>
  <header>
    <div class="header">
      <div class="inner">
        <div class="hd_wideMenu">
          <router-link to="/" class="hd_logo"
            ><img src="/images/txtlogo.png" alt="로고"
          /></router-link>
          <nav v-if="!isMobile" class="hd_menu">
            <router-link to="/bangbeob">방법도</router-link>
            <router-link to="/yeyak">예약도</router-link>
            <router-link to="/yogeum">요금도</router-link>
            <router-link to="/sotong">소통도</router-link>
            <router-link to="/yeohaeng">여행도</router-link>
          </nav>
          <nav class="hd_extra">
            <router-link to="/delivery">가방조회</router-link> |
            <router-link to="/login">로그인</router-link>
          </nav>
        </div>
        <div class="hd_mobileMenu">
          <nav class="hd_extra1">
            <a href="#" class="hd_hambar" @click.prevent="showShortMenu"
              ><img
                src="/images/geen/bar_humburger_icon.png"
                alt="햄버거메뉴"
            /></a>
            <router-link to="/" class="hd_logo"
            ><img src="/images/txtlogo.png" alt="로고"
          /></router-link>
          <div class="hd_mobileRight">
            <router-link to="/delivery" class="hd_bag"
              ><img src="/images/bagfind_icon.png" alt="가방조회이미지"
            /></router-link>
            <router-link to="/login" class="hd_man"
              ><img src="/images/gh/man1_icon.png" alt="로그인이미지"
            /></router-link>
            </div>
          </nav>
        </div>
        <nav class="hd_menu1"  v-show="shortMenu">
          <span @click.prevent="shortMenu = false">X</span>
          <router-link to="/bangbeob">방 법 도</router-link>
          <router-link to="/yeyak">예 약 도</router-link>
          <router-link to="/yogeum">요 금 도</router-link>
          <router-link to="/sotong">소 통 도</router-link>
          <router-link to="/yeohaeng">여 행 도</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// 모바일 여부 체크용
const isMobile = ref(window.innerWidth < 896);

// 햄버거 메뉴 토글 상태
const shortMenu = ref(false);

// 햄버거 아이콘 클릭 시 메뉴 토글
const showShortMenu = () => {
  shortMenu.value = !shortMenu.value;
};

// 창 크기 변경 시 모바일 여부 확인 + 창이 커지면 메뉴 닫기
const updateScreenSize = () => {
  const width = window.innerWidth;
  isMobile.value = width <= 896;

  // 화면이 896 이상이면 메뉴 강제 닫기
  if (width > 896) {
    shortMenu.value = false;
  }
};

// 이벤트 리스너 등록
onMounted(() => {
  window.addEventListener("resize", updateScreenSize);
  updateScreenSize(); // 최초 진입 시 확인
});

// 이벤트 리스너 해제
onUnmounted(() => {
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<style lang="scss" scoped>
@use "/src/assets/Variables" as *;
.header {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 75px;
  padding-top: 13px;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
header .inner {
  max-width: 1300px;
  margin-top: 5px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hd_wideMenu{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
// 로고
.hd_logo {
  width: 140px;
  img {
    width: 120px;
  }
}
.hd_mobileMenu{
  width: 100%;
  display: none;
}

// 메뉴
.hd_menu {
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.hd_menu a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 7);
  padding: 5px 5px;
  text-align: center;

  border: 1px solid transparent;
}
.hd_menu a:hover {
  border: 1px solid $main-color;
}
.hd_menu1 {
  position: fixed;
  top: 75px;
  right: 200px;
  width: 230px;
  height: calc(60px * 6 + 20px);
  display: flex;
  flex-direction: column;
  font-size: 20px;
  border-radius: 10px;
  background-color: rgba($main-color, 0.8);
}
.hd_menu1 span {
  height: 50px;
  text-align: right;
  color: #fff;
  cursor: pointer;
}
.hd_menu1 > a {
  width: 95%;
  height: 70px;
  padding: 25px 20px 20px 20px;
  color: #fff;
  text-align: center;
  box-sizing: border-box;
}
.hd_menu1 a:hover {
  height: 60% !important;
  border: 2.5px solid $sub-color;
  font-weight: bold;
  // color: $main-color;
  border-radius: 10px;
}
.hd_menu1 a:last-child {
  height: 80px !important;
}
// delivery/login icon
.hd_extra {
  width: 17%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  img {
    width: 40px;
    font-weight: 600;
    filter: invert(31%) sepia(97%) saturate(400%) hue-rotate(169deg)
      brightness(95%) contrast(96%);
  }
}
.hd_extra a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 2);
  padding: 5px 5px;
  text-align: center;

  border: 1px solid transparent;
}
.hd_extra a:hover {
  border: 1px solid $main-color;
}
// 반응형후 delivery/login icon
.hd_extra1 {
  width: 100% !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    font-weight: 600;    
  }
}
.hd_hambar,
.hd_hambar> img {
  width: 30px;
  filter: invert(31%) sepia(97%) saturate(800%) hue-rotate(169deg)
      brightness(60%) contrast(96%);
}
.hd_bag img{
  filter: invert(31%) sepia(97%) saturate(400%) hue-rotate(169deg)
      brightness(105%) contrast(96%);
}
.hd_man,
.hd_man img {
  width: 32px;
  height: 33px;
  filter: invert(31%) sepia(97%) saturate(800%) hue-rotate(169deg)
      brightness(60%) contrast(96%);
}
.hd_mobileRight{
  width: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
