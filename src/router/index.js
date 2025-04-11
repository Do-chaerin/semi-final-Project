import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Home.vue";
import Bangbeob from "@/views/bangbeob/Bangbeob.vue";
import Yeyak from "@/views/yeyak/Yeyak.vue";
import Yogeum from "@/views/yogeum/Yogeum.vue";
import Sotong from "@/views/sotong/Sotong.vue";
import Yeohaeng from "../views/yeohaeng/Yeohaeng.vue";
import Delivery from "@/views/delivery & login/Delivery.vue";
import Login from "@/views/delivery & login/Login.vue";
import Yeyak2 from "../views/yeyak/Yeyak2.vue";
import Yeyak3 from "../views/yeyak/Yeyak3.vue";
import Yeyak4 from "../views/yeyak/Yeyak4.vue";
import YeyakLookup from "../views/yeyak/YeyakLookup.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/bangbeob", component: Bangbeob },
  { path: "/yeyak", component: Yeyak },
  { path: "/yogeum", component: Yogeum },
  { path: "/sotong", component: Sotong },
  { path: "/yeohaeng", component: Yeohaeng },
  { path: "/delivery", component: Delivery },
  { path: "/login", component: Login },
  { path: "/yeyak2", component: Yeyak2 },
  { path: "/yeyak3", component: Yeyak3 },
  { path: "/yeyak4", component: Yeyak4 },
  { path: "/yeyaklookup", component: YeyakLookup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
