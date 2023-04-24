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
          <img src="/images/collection3.png" alt="" />
        </div>
      </div>
      <div class="category">
        <div class="container">
          <h3>Autumn & Winter 2023</h3>
          <Arrow />
        </div>

        <div id="hover-image" class="img-container">
          <img src="/images/collection2.png" alt="" />
        </div>
      </div>
      <div class="category">
        <div class="container">
          <h3>Spring & Summer 2022</h3>
          <Arrow />
        </div>
      </div>
      <div class="category">
        <div class="container">
          <h3>Autumn & Winter 2022</h3>
          <Arrow />
        </div>
      </div>
      <div class="category">
        <div class="container">
          <h3>Spring & Summer 2021</h3>
          <Arrow />
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
  // document.querySelector(".category img").style.left = e.clientLeft;
  // console.log(e.clientX);
  // document.getElementById("hover-image").style.left = `${e.clientX}px`;
  // document.getElementById("hover-image").style.top = `${e.clientY}px`;
  gsap.to("#hover-image", {
    top: e.clientY / 2,
    left: e.clientX,
    delay: 0,
    ease: "none",
  });
}
</script>

<style lang="scss" scoped></style>
