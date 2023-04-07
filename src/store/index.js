import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toggleHistory: false,
    historyCount: 0,
    baseURL: "https://java-transliterator.vercel.app/api/",
    toggleSidebar: false,
  },
  getters: {},
  mutations: {
    showHistory(state) {
      state.toggleHistory = !state.toggleHistory;
    },
    historyListCount(state, count) {
      state.historyCount = count;
    },
    showSidebar(context) {
      context.toggleSidebar = !context.toggleSidebar;
    },
  },
  actions: {},
  modules: {},
});
