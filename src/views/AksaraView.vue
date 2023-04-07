<template>
  <div class="home">
    <transition name="slide-fade" mode="out-in">
      <div
        v-show="this.$store.state.toggleHistory"
        class="right-0 w-96 bg-white fixed h-screen z-40 overflow-auto border-l"
      >
        <div class="text-lg font-poppins font-bold p-5">
          <h2>Histori translate</h2>
        </div>
        <div class="space-y-4 p-5">
          <div
            class="card border p-2"
            v-for="(item, index) in history"
            :key="index"
          >
            <p class="text-sm font-bold truncate">{{ item.text }}</p>
            <p
              class="text-sm truncate"
              :class="
                item.type == 'jawa'
                  ? 'font-poppins'
                  : item.type == 'sunda'
                  ? 'font-sunda'
                  : 'font-bali'
              "
            >
              {{ item.script }}
            </p>
            <p class="text-xs text-gray-400">
              Diterjemahkan ke aksara {{ item.type }}
            </p>
            <div class="content flex gap-5 mt-5 bg-white">
              <button
                class="text-gray-500"
                @click="pasteHistory(item.text, item.script, item.type)"
              >
                <Icon icon="mdi:content-paste" />
              </button>
              <button class="text-red-900" @click="deleteHistory(index)">
                <Icon icon="ant-design:delete-filled" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <div class="flex text-center font-poppins text-sm font-medium">
      <div class="flex-auto">
        <button
          class="px-5 py-2 h-10 bg-custom w-full bg-[#FFE7C2] border-b border-l border-r justify-center flex text-primary"
        >
          <span class="mt-0">Tulisan Aksara</span>
          <span class="ml-2 mt-1"><icon icon="bi:arrow-right-circle" /></span>
        </button>
      </div>
      <div class="flex-auto">
        <button
          class="px-5 py-2 h-10 w-full justify-center border-b border-r flex bg-white"
        >
          <span class="mr-2 mt-1"><Icon icon="ri:translate-2" /></span>
          <select
            name=""
            v-model="type"
            class="outline-none"
            @change="doTranslate"
            id=""
          >
            <option value="jawa" selected>Latin jawa</option>
            <option value="sunda">Latin sunda</option>
            <option value="bali">Latin bali</option>
          </select>
        </button>
      </div>
    </div>
    <div class="mt-5 p-2">
      <div class="bg-white p-3 shadow-md border border-b-0">
        <textarea
          :class="
            this.type == 'jawa'
              ? 'font-poppins'
              : this.type == 'sunda'
              ? 'font-sunda'
              : 'font-bali'
          "
          class="aksara w-full h-52 text-lg rounded-md resize-none outline-none p-3"
          name=""
          id=""
          cols="30"
          rows="10"
          v-model="aksara"
          @keyup="doTranslate"
          placeholder="Tulis aksara disini"
        ></textarea>
        <label for=""
          ><button @click="ocrScan" class="flex gap-2">
            <span class="text-lg text-gray-500"
              ><Icon icon="ooui:ocr"></Icon></span
            ><span class="text-sm font-poppins">ocr</span>
          </button></label
        >
        <label
          class="p-1 -mt-5 float-right text-gray-500 text-xs font-poppins flex gap-2"
        >
          <Icon icon="bx:info-circle"></Icon>
          Cara menambahkan keyboard aksara
        </label>
      </div>
      <div class="bg-[#FFE7C2] text-primary p-3 shadow-md border">
        <textarea
          class="latin w-full bg-[#FFE7C2] text-primary placeholder-primary font-poppins h-52 text-lg resize-none outline-none p-3"
          name=""
          id=""
          v-model="latin"
          readonly
          placeholder="latin akan muncul disini..."
        ></textarea>
        <button class="text-lg" title="copy tulisan latin">
          <Icon icon="carbon:copy" />
        </button>
      </div>
      <button
        @click="executeHistory"
        class="floating-button bottom-8 z-20 right-4 fixed bg-primary hover:bg-yellow-900 transition-all rounded-full h-14 text-center w-14 p-2"
      >
        <span class="text-white text-lg flex justify-center"
          ><Icon icon="fa-regular:save"
        /></span>
      </button>
    </div>
  </div>
</template>
<style>
  .slide-fade-enter-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-leave-active {
    transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-active {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
<script>
  import { Icon } from "@iconify/vue2";
  import axios from "axios";
  export default {
    name: "HomeView",
    data() {
      return {
        latin: "",
        aksara: "",
        type: "jawa",
        history: [],
      };
    },
    methods: {
      doTranslate: function () {
        var config = {
          method: "post",
          url: `${this.$store.state.baseURL}translate/latin`,
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            type: this.type,
            text: this.aksara,
          },
        };
        function charIsLetter(char) {
          if (typeof char !== "string") {
            return false;
          }

          return /^[a-zA-Z]+$/.test(char);
        }
        axios(config)
          .then((response) => {
            if (charIsLetter(this.aksara)) {
              this.$toast.bottom("anda harus menulis dengan tulisan aksara!");
              document.querySelector(".latin").value = "";
            } else {
              this.latin = response.data.data.latin;
              document.querySelector(".latin").value = this.latin;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },

      ocrScan: function () {
        this.$toast.bottom("metode ocr masih dikembangkan!");
      },
      pasteHistory: function (latin, aksara, type) {
        this.latin = latin;
        this.aksara = aksara;
        this.type = type;
        var select = document.querySelector(".select");
        if (this.type == "jawa") {
          select.selectedIndex = 0;
        } else if (this.type == "sunda") {
          select.selectedIndex = 1;
        } else {
          select.selectedIndex = 2;
        }
        this.$store.commit("showHistory");
      },
      deleteHistory: function (IndexDelete) {
        this.history = this.history.filter((item, index) => {
          if (index != IndexDelete) {
            return item;
          }
        });
        this.$store.commit("historyListCount", this.history.length);
        this.saveLocalStorage();
      },

      executeHistory: function () {
        this.addHistory(this.latin, this.aksara);
      },
      addHistory: function (latin, aksara) {
        if (latin.trim() == "") {
          const latinAksara = document.querySelector(".aksara");
          this.$toast.bottom("Inputan masih kosong, isi terlebih dahulu!");
          latinAksara.focus();
          this.$Progress.fail();
        } else {
          this.$toast.bottom("Tersimpan di histori");
          if (this.history !== "") {
            this.history.push({
              text: latin,
              script: aksara,
            });

            this.saveLocalStorage();
            this.$store.commit("historyListCount", this.history.length);
          }
          console.log(this.history);
        }
      },
      saveLocalStorage: function () {
        localStorage.setItem("history", JSON.stringify(this.history));
      },
    },
    computed: {
      totalHistory() {
        return this.history.length;
      },
    },
    mounted() {
      if (localStorage.getItem("history") != null) {
        this.history = JSON.parse(localStorage.getItem("history"));
      }
      this.$store.commit("historyListCount", this.history.length);
    },
    components: {
      Icon,
    },
  };
</script>
