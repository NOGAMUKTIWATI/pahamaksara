import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Toast from "vue2-toast";
import VueProgressBar from "vue-progressbar";
import VueClipboard from "vue-clipboard2";

import "./assets/tailwind.css";
import "vue2-toast/lib/toast.css";
import "./assets/index.scss";
Vue.config.productionTip = false;

VueClipboard.config.autoSetContainer = true; // add this line
Vue.use(VueClipboard);
Vue.use(Toast);
Vue.use(VueProgressBar, {
  color: "rgb(143, 255, 199)",
  failedColor: "red",
  height: "2px",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
