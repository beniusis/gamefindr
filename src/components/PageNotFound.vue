<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <h2 class="code">404</h2>
    <div class="text">Page Not Found</div>
    <RouterLink class="link" to="/">Go Home</RouterLink>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
}

.code {
  font-size: 8rem;
  font-weight: 900;
  color: var(--clr-brandy-900);
  letter-spacing: 0.1em;
  transition: font-size 300ms ease-in-out;

  @media (max-width: 576px) {
    font-size: 6rem;
  }
}

.text {
  position: absolute;
  transform: rotate(12deg);
  border-radius: 0.25rem;
  background-color: var(--clr-brandy-300);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--clr-brandy-900);
  padding: 0.125rem 0.5rem;
}

.link {
  margin-top: 1rem;
  border-radius: 0.375rem;
  background-color: var(--clr-brandy-300);
  padding: 0.75rem 2rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--clr-brandy-900);
  transition: all 300ms ease-out;

  &:hover {
    background-color: var(--clr-brandy-400);
    scale: 1.025;
  }
}
</style>
