import Vue from "vue";
import VueRouter from "vue-router";
import LatinView from "../views/LatinView.vue";
import AksaraView from "../views/AksaraView.vue";
import PanduanView from "../views/Panduan.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Latin",
    component: LatinView,
  },
  {
    path: "/aksara-ke-latin",
    name: "Aksara",
    component: AksaraView,
  },
  {
    path: "/panduan",
    name: "Panduan",
    component: PanduanView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
