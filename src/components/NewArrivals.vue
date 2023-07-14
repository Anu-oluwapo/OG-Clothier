<template>
  <SectionHeader
    :link-text="'SEE ALL'"
    :title="'New Arrivals'"
    :number="'02'"
    :url="'/'"
  />

  <section class="arrivals-section">
    <div class="container">
      <div class="content">
        <div class="arrival">
          <ItemIcons />
          <div class="image">
            <img src="/images/img1.png" />
          </div>
          <div
            @click="
              mainStore.addToCart({
                name: 'Wool x Buffer Jacket',
                price: 110,
                image: '/images/img1.png',
              }),
                mainStore.addToast({
                  color: 'black',
                  message: 'Wool x Buffer Jacket Added To Cart',
                })
            "
            class="description"
          >
            <div class="title">
              <p class="body-2">Wool x Buffer Jacket</p>
            </div>
            <div class="price"><p class="body-2">$110</p></div>
          </div>
        </div>

        <div class="arrival">
          <ItemIcons />
          <div class="image">
            <img src="/images/img2.png" />
          </div>
          <div
            @click="
              mainStore.addToCart({
                name: 'Buffer Jacket',
                price: 90,
                image: '/images/img2.png',
              }),
                mainStore.addToast({
                  color: 'black',
                  message: 'Buffer Jacket Added To Cart',
                })
            "
            class="description"
          >
            <div class="title">
              <p class="body-2">Buffer Jacket</p>
            </div>
            <div class="price"><p class="body-2">$90</p></div>
          </div>
        </div>

        <div class="arrival">
          <ItemIcons />
          <div class="image">
            <img src="/images/img3.png" />
          </div>
          <div
            @click="
              mainStore.addToCart({
                name: 'Cargo Hoodie Jacket',
                price: 110,
                image: '/images/img3.png',
              }),
                mainStore.addToast({
                  color: 'black',
                  message: 'Cargo Hoodie Jacket Added To Cart',
                })
            "
            class="description"
          >
            <div class="title">
              <p class="body-2">Cargo Hoodie Jacket</p>
            </div>
            <div class="price"><p class="body-2">$110</p></div>
          </div>
        </div>

        <div class="cta">
          <p class="body-3">
            Introducing our top-of-the-line winter jacket,<br />
            the ultimate solution for cold weather!<br />
            Made with high-quality materials.
          </p>

          <button class="btn btn_1"><span>Shop Now</span></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from "./SectionHeader.vue";
import ItemIcons from "./ItemIcons.vue";
import { useMainStore } from "../stores";
const mainStore = useMainStore();
</script>

<style lang="scss" scoped></style>
