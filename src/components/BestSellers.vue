<template>
  <section class="best-sellers-section">
    <SectionHeader
      :link-text="'SEE ALL'"
      :title="'Best Sellers'"
      :number="'04'"
      :url="'/'"
    />

    <div class="container">
      <div class="best-sellers">
        <div class="best-seller">
          <div class="image">
            <img src="/images/best-sellers/1.png" />
          </div>
          <div class="description">
            <div class="title">
              <p class="body-2">Wool x Buffer Jacket</p>
            </div>
            <div class="price"><p class="body-2">$110</p></div>
          </div>
        </div>
        <div class="best-seller">
          <div class="image">
            <img src="/images/best-sellers/2.png" />
          </div>
          <div class="description">
            <div class="title">
              <p class="body-2">Wool x Buffer Jacket</p>
            </div>
            <div class="price"><p class="body-2">$110</p></div>
          </div>
        </div>
        <div class="best-seller">
          <div class="image">
            <img src="/images/best-sellers/3.png" />
          </div>
          <div class="description">
            <div class="title">
              <p class="body-2">Wool x Buffer Jacket</p>
            </div>
            <div class="price"><p class="body-2">$110</p></div>
          </div>
        </div>
        <div class="best-seller">
          <div class="image">
            <img src="/images/best-sellers/4.png" />
          </div>
          <div class="description">
            <div class="title">
              <p class="body-2">Wool x Buffer Jacket</p>
            </div>
            <div class="price"><p class="body-2">$110</p></div>
          </div>
        </div>
        <div class="best-seller">
          <div class="image">
            <img src="/images/best-sellers/5.png" />
          </div>
          <div class="description">
            <div class="title">
              <p class="body-2">Wool x Buffer Jacket</p>
            </div>
            <div class="price"><p class="body-2">$110</p></div>
          </div>
        </div>
        <div class="best-seller">
          <div class="image">
            <img src="/images/best-sellers/6.png" />
          </div>
          <div class="description">
            <div class="title">
              <p class="body-2">Wool x Buffer Jacket</p>
            </div>
            <div class="price"><p class="body-2">$110</p></div>
          </div>
        </div>
      </div>

      <div class="controls">
        <div @click="scroll('l')" class="control"><Arrow /></div>
        <div @click="scroll('r')" class="control"><Arrow /></div>
      </div>

      <button class="btn btn_1"><span>Shop Now</span></button>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import Arrow from "./icons/Arrow.vue";
import { onMounted } from "vue";
let left = 0;
function scroll(direction) {
  const container = document.querySelector(".best-sellers");

  var scrollMax = container.clientWidth;
  var scrollMin = 0;

  if (direction == "l" && left > scrollMin) {
    left -= 600;
  }
  if (direction == "r" && left < scrollMax) {
    left += 600;
  }

  container.scrollTo({
    top: 0,
    left: left,
    behavior: "smooth",
  });
}
onMounted(() => {});
</script>

<style lang="scss" scoped></style>
