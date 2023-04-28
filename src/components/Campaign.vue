<template>
  <section class="campaign-section">
    <div class="campaign container">
      <div class="campaign--1">
        <h1 class="bold-text bt-1">OG CLOTHIER</h1>
        <div class="circle"><h3>STYLE</h3></div>
      </div>
      <div class="campaign--2">
        <div class="circle"><h3>QUALITY</h3></div>
        <h1 class="bold-text bt-2">OG CLOTHIER</h1>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { onMounted } from "vue";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const campaignTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".campaign-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 2,
    },
  });

  campaignTl
    .to(
      ".bt-1",
      {
        marginLeft: "0px",
      },
      0
    )
    .to(
      ".bt-2",
      {
        marginRight: "0px",
      },
      0
    )
    .to(
      ".circle",
      {
        scale: 1.3,
      },
      0
    );
});
</script>

<style lang="scss" scoped></style>
