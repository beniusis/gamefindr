<script setup>
defineProps({
  game: {
    type: Object,
    default: () => {}
  }
});
</script>

<template>
  <div
    class="block"
    title="View more information"
    tabindex="0"
    role="button"
    @click="$router.push(`/games/${game.id}`)"
  >
    <img class="image" :src="game.thumbnail" alt />
    <div class="information">
      <h2 class="title">{{ game.title }}</h2>
      <span class="developer">{{ game.developer }}</span>
      <span class="release-date">{{ game.release_date }}</span>
      <span class="platform">{{ game.platform }}</span>
    </div>
  </div>
</template>

<style scoped>
.block {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  cursor: pointer;

  &:hover .information {
    opacity: 1;
  }

  &:hover .image {
    filter: brightness(0.3);
  }
}

.image {
  width: 100%;
  object-fit: cover;
  border-radius: 0.75rem;
  transition: filter 300ms ease-out;
}

.information {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0 1rem;
  opacity: 0;
  text-align: center;
  transition: opacity 300ms ease-in;
}

.title {
  font-size: 1.375rem;
  font-weight: 800;
}

.developer {
  font-size: 1rem;
}

.release-date {
  font-size: 0.875rem;
  font-weight: 900;
}

.platform {
  font-size: 0.75rem;
}

.developer,
.platform {
  font-weight: 400;
}

.title,
.developer,
.release-date,
.platform {
  color: #fff;
}
</style>
