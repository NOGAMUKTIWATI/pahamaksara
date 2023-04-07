<template>
  <div class="header w-full bg-white border-b sticky top-0">
    <header id="header" class="max-w-2xl mx-auto">
      <div class="flex gap-5">
        <div class="flex-auto w-full py-2">
          <button class="px-5 text-lg mt-2" @click="handleMenu()">
            <Icon icon="cil:hamburger-menu" />
          </button>
        </div>
        <div class="flex-auto w-full py-2 text-center box-border">
          <h2
            class="font-semibold text-2xl text-theme flex font-poppins tracking-tighter"
          >
            Paham<Icon icon="akar-icons:arrow-right" /><b
              class="text-primary font-semibold"
              >aksara</b
            >
          </h2>
        </div>
        <div class="flex-auto w-full text-right py-2">
          <button
            class="px-5 text-lg mt-2"
            title="history terjemahan ke aksara"
            @click="handleClick"
          >
            <Icon icon="ant-design:history-outlined" />
            <span
              class="absolute -mt-7 ml-2 rounded-full bg-[#FFE7C2] w-4 h-4 p-0 m-0 text-primary font-mono text-sm leading-tight text-center"
              >{{ this.$store.state.historyCount }}
            </span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue2";
  export default {
    components: {
      Icon,
    },
    methods: {
      handleClick() {
        this.$store.commit("showHistory");
      },
      handleMenu() {
        this.$store.commit("showSidebar");
      },
    },
  };
</script>

<style></style>
