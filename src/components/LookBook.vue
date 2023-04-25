<template>
  <section class="lookbook-section">
    <SectionHeader
      :link-text="'SEE ALL'"
      :title="'LOOKBOOK'"
      :number="'05'"
      :url="'/'"
    />

    <div @mousemove="moveImg($event)" class="categories">
      <div class="category">
        <div class="container">
          <h3>Spring & Summer 2023</h3>
          <Arrow />
        </div>

        <div id="hover-image" class="img-container">
          <img src="/images/collection2.png" alt="" />
        </div>
      </div>
      <div class="category">
        <div class="container">
          <h3>Autumn & Winter 2023</h3>
          <Arrow />
        </div>

        <div id="hover-image" class="img-container">
          <img src="/images/collection3.png" alt="" />
        </div>
      </div>
      <div class="category">
        <div class="container">
          <h3>Spring & Summer 2022</h3>
          <Arrow />
        </div>

        <div id="hover-image" class="img-container">
          <img src="/images/spring1.jpg" alt="" />
        </div>
      </div>
      <div class="category">
        <div class="container">
          <h3>Autumn & Winter 2022</h3>
          <Arrow />
        </div>

        <div id="hover-image" class="img-container">
          <img src="/images/winter1.jpg" alt="" />
        </div>
      </div>
      <div class="category">
        <div class="container">
          <h3>Spring & Summer 2021</h3>
          <Arrow />
        </div>

        <div id="hover-image" class="img-container">
          <img src="/images/spring2.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import Arrow from "./icons/Arrow.vue";
import gsap from "gsap";

function moveImg(e) {
  gsap.to("#hover-image", {
    css: {
      top: e.pageY,
      left: e.pageX,
    },

    duration: 0.8,
    ease: "linear.easeInOut",
  });
}
</script>

<style lang="scss" scoped></style>
