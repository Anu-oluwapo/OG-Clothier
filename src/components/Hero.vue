<template>
  <section class="hero-section">
    <div class="container">
      <div
        @mouseenter="timer()"
        @mouseleave="reset()"
        @mousemove="moveCircle($event)"
        id="reel-container"
        class="reel-container"
      >
        <h1>OG CLOTHIER</h1>
        <div class="play-reel">
          <p class="body-1">Play <br />Reel</p>
        </div>
        <CircularArrow />
      </div>
    </div>
  </section>
</template>

<script setup>
import CircularArrow from "../components/icons/CircularArrow.vue";

import gsap from "gsap";

function moveCircle(e) {
  gsap.to(".play-reel", {
    css: {
      top: e.pageY,
      left: e.pageX,
    },

    duration: 0.5,
    ease: "linear.easeInOut",
  });
}

function timer() {
  const reelContainer = document.getElementById("reel-container");
  setTimeout(() => {
    reelContainer.style.backgroundImage = 'url("/images/vid1.gif")';
  }, 1000);
}

function reset() {
  const reelContainer = document.getElementById("reel-container");
  reelContainer.style.backgroundImage = 'url("/images/hero.png")';
}
</script>

<style lang="scss" scoped></style>
