<template>
  <div class="sidebar-wrapper">
    <div
      class="sidebar left-0 w-72 p-2 bg-white fixed h-screen z-40 overflow-auto border-r"
    >
      <h1
        class="text-lg px-5 py-2 font-poppins tracking-tighter font-bold text-primary"
      >
        Navigasi
      </h1>
      <div class="mt-5 space-y-2 text-sm text-gray-500">
        <router-link to="/" class="px-5 py-2 font-poppins block"
          >Latin ke aksara</router-link
        >
        <router-link to="/aksara-ke-latin" class="px-5 py-2 block font-poppins"
          >Aksara ke latin</router-link
        >
        <router-link to="/panduan" class="px-5 py-2 block font-poppins"
          >Panduan</router-link
        >
        <router-link to="/tentang" class="px-5 py-2 block font-poppins"
          >Tentang</router-link
        >
      </div>
    </div>
  </div>
</template>

<style>
  a.router-link-exact-active {
    @apply bg-[#FFE7C2] text-primary;
  }
</style>
