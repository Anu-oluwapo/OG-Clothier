<template>
  <section class="sectionHeader">
    <div class="text container">
      <div class="title">
        <p class="body-1">{{ number }}</p>
        <h2>{{ title }}</h2>
      </div>
      <div class="link">
        <router-link :to="`${url}`"
          >{{ linkText }} <Arrow class="arrow"
        /></router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import Arrow from "@/components/icons/Arrow.vue";

const props = defineProps({
  title: String,
  number: String,
  linkText: String,
  url: String,
});
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

section {
  border-bottom: 1.5px solid $black;
  margin: 3rem 0;
  padding: 3rem 0;

  .text {
    display: flex;
    align-items: end;

    .title {
      p {
        margin: 2rem 0;
      }
      flex-grow: 1;
    }

    .link {
      a {
        text-decoration: none;
        font-size: 3.2rem;
        color: $black;
      }
      padding-bottom: 1rem;

      .arrow {
        transition: all 0.3s ease;
      }

      &:hover {
        .arrow {
          margin: 0 1rem;
        }
      }
    }
  }
}
</style>
