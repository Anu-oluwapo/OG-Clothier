<template>
  <div class="container" id="hoverCart">
    <div class="items">
      <div v-for="item in mainStore.cart" class="item">
        <div class="image"><img :src="item.image" alt="" /></div>
        <div class="name">
          <p class="body-2">{{ item.name }}</p>
        </div>
        <div class="price">
          <p class="body-2">${{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from "../stores";
const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";
.container {
  position: absolute;
  right: 0;
  top: 9rem;
  width: 50rem;
  background-color: $white;
  border: 1px solid $black;
  z-index: 5;
  opacity: 0;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
  }

  .items {
    .item {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 4fr 1fr;

      &:not(:last-child) {
        border-bottom: 1px solid $black;
      }

      //   padding: 2rem;

      div {
        width: 100%;
        justify-content: center;
        height: 100%;
        display: flex;
        align-items: center;
      }

      .image {
        border-right: 1px solid $black;

        img {
          width: 100%;
        }
      }
      .price {
        border-left: 1px solid $black;
      }
    }
  }
}
</style>
