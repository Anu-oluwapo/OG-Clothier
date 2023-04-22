<template>
  <section class="lookbook-section">
    <SectionHeader
      :link-text="'SEE ALL'"
      :title="'LOOKBOOK'"
      :number="'05'"
      :url="'/'"
    />

    <div class="categories">
      <div class="category">
        <div class="container">
          <h3>Spring & Summer 2023</h3>
          <Arrow />
        </div>
      </div>
      <div class="category">
        <div class="container">
          <h3>Autumn & Winter 2023</h3>
          <Arrow />
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
</script>

<style lang="scss" scoped></style>
