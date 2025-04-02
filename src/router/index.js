import { createRouter, createWebHistory } from "vue-router";
import Notice from "../components/Notice.vue";
import Review from "../components/Review.vue";
import Card from "../components/Card.vue";

const routes = [
  { path: "/", component: Notice },
  { path: "/review", component: Review },
  { path: "/card", component: Card },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
