<template>
  <div class="item-icons">
    <div @click="like = !like" class="like">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        :fill="like ? 'white' : 'pink'"
        class="bi bi-heart-fill"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </div>
    <div @click="bookmark = !bookmark" class="bookmark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        :fill="bookmark ? 'white' : 'orange'"
        class="bi bi-bookmark-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const like = ref("false");
const bookmark = ref("false");
</script>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
.item-icons {
  position: absolute;
  right: 3rem;
  top: 0rem;
  transition: all 0.3s ease;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0rem;
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    background-color: $black;
    opacity: 0;
    transition: all 0.3s ease;
    cursor: pointer;
  }
}
</style>
