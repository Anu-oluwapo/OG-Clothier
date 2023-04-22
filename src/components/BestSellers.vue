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

      <button class="btn btn_1">Shop Now</button>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
</script>

<style lang="scss" scoped></style>
