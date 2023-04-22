<template>
  <section class="collections-section">
    <SectionHeader
      :link-text="'SEE ALL'"
      :title="'Collections'"
      :number="'03'"
      :url="'/'"
    />

    <div class="container">
      <div class="collections">
        <div class="flex-1">
          <div class="collection">
            <img src="/images/collection1.png" />
            <div class="header"><p class="body-2">SW-20</p></div>

            <div class="footer">
              <p class="body-2">OG X Winter</p>
              <router-link to="/">Explore <Arrow /> </router-link>
            </div>
          </div>
        </div>

        <div class="flex-2">
          <div class="collection">
            <img src="/images/collection2.png" />
            <div class="header"><p class="body-2">SW-20</p></div>

            <div class="footer">
              <p class="body-2">OG X Summer</p>
              <router-link to="/">Explore <Arrow /> </router-link>
            </div>
          </div>
          <div class="collection">
            <img src="/images/collection3.png" />
            <div class="header"><p class="body-2">SW-20</p></div>

            <div class="footer">
              <p class="body-2">OG X Spring</p>
              <router-link to="/">Explore <Arrow /> </router-link>
            </div>
          </div>
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
