<template>
  <div class="toasts">
    <Toast
      v-for="toast in mainStore.toasts"
      :message="toast.message"
      :color="toast.color"
      :id="mainStore.toasts.indexOf(toast)"
    />
  </div>
  <Header />
  <Hero />
  <NewArrivals />
  <Collections />
  <BestSellers />
  <LookBook />
  <Campaign />
  <About />
  <Footer />
</template>

<script setup>
import Header from "../components/Header.vue";
import Hero from "../components/Hero.vue";
import NewArrivals from "../components/NewArrivals.vue";
import Collections from "../components/Collections.vue";
import BestSellers from "../components/BestSellers.vue";
import LookBook from "../components/LookBook.vue";
import Campaign from "../components/Campaign.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import Toast from "../components/Toast.vue";

import { useMainStore } from "../stores/index";
const mainStore = useMainStore();
</script>

<style lang="scss"></style>
