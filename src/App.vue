<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <nav>
    <router-link to="/">홈</router-link> |
    <router-link to="/review">소개</router-link>
    <router-link to="/card">소개</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped></style>
