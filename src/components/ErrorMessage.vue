<template>
  <div class="error">Sorry, something went wrong! Try refreshing the page.</div>
</template>

<style scoped>
.error {
  font-size: 2rem;
  font-weight: 800;
  color: var(--clr-brandy-900);
  text-align: center;
  user-select: none;
  transition: font-size 300ms ease-in-out;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
}
</style>
