<template>
  <div class="toast">
    <div class="content">This Is A Toast</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const like = ref("false");
const bookmark = ref("false");
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.toast {
  position: absolute;
  right: 3rem;
  top: 0rem;
  transition: all 0.3s ease;
  background-color: $black;
  //   div {
  //     display: flex;
  //     align-items: center;
  //     justify-content: center;
  //     margin-bottom: 0rem;
  //     height: 5rem;
  //     width: 5rem;
  //     border-radius: 50%;
  //     background-color: $black;
  //     opacity: 0;
  //     transition: all 0.3s ease;
  //     cursor: pointer;
  //   }
}
</style>
