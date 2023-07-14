<template>
  <div
    :style="`background-color: ${color}; top:${9 * id + 3}rem`"
    class="toast"
    :id="`toast${toastId}`"
  >
    <div @click="reset()" class="controls">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="white"
        class="bi bi-x"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>

    <div class="content">
      <p class="body-2">{{ message }}</p>
    </div>
    <div class="progress"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
const props = defineProps(["message", "color", "id"]);

const showToast = ref("false");
const timeline = gsap.timeline();

const toastId = ref(props.id);

function runToast() {
  timeline.to(`#toast${toastId.value}`, {
    right: "3rem",
    duration: 0.1,
  });

  setTimeout(() => {
    timeline.reverse();
  }, 3000);
}

function reset() {
  timeline.reverse();
}

onMounted(() => {
  runToast();
});
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.toast {
  position: fixed;
  right: -30rem;
  //   top: 3rem;
  transition: all 0.3s ease;
  z-index: 5;
  opacity: 0.9;
  background-color: $black;

  .controls {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
  }
  .content {
    padding: 3rem 1rem;
    width: 30rem;
    p {
      color: $white;
      font-size: 1.6rem;
    }
  }

  .progress {
    width: 0%;
    height: 0.5rem;
    background-color: $neutral;
  }

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
