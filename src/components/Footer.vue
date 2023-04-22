<template>
  <section class="footer-section">
    <div class="newsletter">
      <div class="container">
        <p class="body-1">Subscribe To Our Newsletter</p>
        <input
          type="email"
          class="newsletter-input"
          placeholder="youremail@email.com"
        />
        <Arrow />
      </div>
    </div>

    <div class="content">
      <div class="container">
        <div class="logo">
          <img src="../assets/logo2.svg" alt="" />
        </div>
        <div class="footer-links">
          <ul>
            <p class="body-2">Catalogue</p>
            <router-link to="/"><li>Women</li></router-link>
            <router-link to="/"><li>Men</li></router-link>
            <router-link to="/"><li>New Collection</li></router-link>
            <router-link to="/"><li>Sale</li></router-link>
          </ul>
        </div>
        <div class="footer-links">
          <ul>
            <p class="body-2">Shop</p>
            <router-link to="/"><li>About</li></router-link>
            <router-link to="/"><li>Payment</li></router-link>
            <router-link to="/"><li>Delivery</li></router-link>
            <router-link to="/"><li>FAQ</li></router-link>
          </ul>
        </div>
        <div class="footer-links">
          <ul>
            <p class="body-2">Contact</p>
            <router-link to="/"><li>1 (123) 456 78 90</li></router-link>
            <router-link to="/"><li>hello@ogclothiers.com</li></router-link>
          </ul>
          <div class="socials">
            <router-link to="/"><p>Twitter</p></router-link>
            <router-link to="/"><p>Instagram</p></router-link>
            <router-link to="/"><p>Facebook</p></router-link>
            <router-link to="/"><p>Depop</p></router-link>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p class="body-2">&copy; All Right Reserves. OG Clothiers Inc.</p>
    </footer>
  </section>
</template>

<script setup>
import Arrow from "@/components/icons/Arrow.vue";
</script>

<style lang="scss" scoped></style>
