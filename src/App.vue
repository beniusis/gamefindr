<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1><RouterLink class="link" to="/">gamefindr</RouterLink></h1>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  height: 10vh;
}

h1 {
  font-size: 3rem;
  font-weight: 900;
  line-height: 1;
  text-align: center;
  transition: font-size 300ms ease-in-out;

  @media (max-width: 576px) {
    font-size: 2rem;
  }
}

.link {
  color: var(--clr-brandy-900);
  text-decoration: none;
  transition: all 300ms ease-out;

  &:hover {
    color: var(--clr-brandy-400);
  }
}
</style>
