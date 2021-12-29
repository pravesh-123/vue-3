// CreatedBy: Pravesh Dwivedi Solace

import { createRouter, createWebHistory } from "vue-router";
import DcHeros from "./pages/DcHeros.vue";
import Calendar from "./pages/Calendar.vue";
import Home from "./pages/Home.vue";
import Markdown from "./pages/Markdown.vue";
import Slider from "./pages/Slider.vue";
import Calculator from "./pages/Calculator.vue";
import Modal from "./pages/ReuseableModal.vue";
import UserCrud from "./pages/UserCrud.vue";

// for routing
const routes = [
  { path: "/", component: Home },
  { path: "/dc-heros", component: DcHeros },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  { path: "/modal", component: Modal },
  { path: "/user-crud", component: UserCrud },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
