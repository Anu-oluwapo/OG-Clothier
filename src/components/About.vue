<template>
  <section class="about-section">
    <SectionHeader
      :link-text="'SEE ALL'"
      :title="'ABOUT OG'"
      :number="'06'"
      :url="'/'"
    />

    <div class="container">
      <div class="about-img">
        <img src="/images/About.png" />
      </div>
      <div class="about-info">
        <p class="body-3">
          At our clothing store, we understand the importance of quality and
          style. So, shop with confidence knowing that you're getting
          top-quality clothing that looks and feels great. At our clothing
          store, we understand the importance of quality and style. So, shop
          with confidence knowing that you're getting top-quality clothing that
          looks and feels great.
        </p>

        <div class="">
          <button class="btn">Visit Store</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
</script>

<style lang="scss" scoped></style>
