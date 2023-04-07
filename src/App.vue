<template>
  <div id="app">
    <Header />
    <transition name="slide-right-fade" mode="out-in">
      <div class="sidebar fixed" v-show="this.$store.state.toggleSidebar">
        <Sidebar />
      </div>
    </transition>
    <div class="max-w-2xl container mx-auto">
      <router-view />
      <vue-progress-bar></vue-progress-bar>
    </div>
    <Footer />
  </div>
</template>

<style>
  body {
    @apply bg-gray-100 select-none;
  }
  .slide-right-fade-enter-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-right-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-right-fade-enter,
  .slide-right-fade-leave-active {
    transform: translateX(-20px);
    opacity: 0;
  }
</style>

<script>
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  import Sidebar from "./components/Sidebar.vue";
  export default {
    components: {
      Header,
      Footer,
      Sidebar,
    },
    watch: {
      $route: function () {
        this.$store.commit("showSidebar", false);
      },
    },
  };
</script>
