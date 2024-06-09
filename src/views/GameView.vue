<script setup>
import ErrorMessage from '@/components/ErrorMessage.vue';
import LoadingState from '@/components/LoadingState.vue';
import { useGame } from '@/composables/games';
import { watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const { loading, error, game } = useGame(route.params.id);

watchEffect(() => {
  if (game.value.status === 0) {
    router.push({ name: 'not-found', params: { pathMatch: route.path.substring(1).split('/') } });
  }
});
</script>

<template>
  <LoadingState v-if="loading" />
  <ErrorMessage v-else-if="!loading && error" />
  <div v-else class="container">
    <div class="information">
      <span class="heading">General Information</span>
      <span
        >Game: <strong>{{ game.title }}</strong>
      </span>
      <span
        >Genre: <strong>{{ game.genre }}</strong></span
      >
      <span
        >Developer: <strong>{{ game.developer }}</strong></span
      >
      <span
        >Release Date: <strong>{{ game.release_date }}</strong></span
      >
      <span
        >Platform: <strong>{{ game.platform }}</strong></span
      >
    </div>
    <div v-if="game.minimum_system_requirements" class="minimum-requirements">
      <span class="heading">Minimum requirements</span>
      <span
        >Operating System:
        <strong>{{
          game.minimum_system_requirements.os === '?' ||
          game.minimum_system_requirements.os === null
            ? 'Not Listed'
            : game.minimum_system_requirements.os
        }}</strong></span
      >
      <span
        >Processor:
        <strong>{{
          game.minimum_system_requirements.processor === '?' ||
          game.minimum_system_requirements.processor === null
            ? 'Not Listed'
            : game.minimum_system_requirements.processor
        }}</strong></span
      >
      <span
        >Memory:
        <strong>{{
          game.minimum_system_requirements.memory === '?' ||
          game.minimum_system_requirements.memory === null
            ? 'Not Listed'
            : game.minimum_system_requirements.memory
        }}</strong></span
      >
      <span
        >Graphics:
        <strong>{{
          game.minimum_system_requirements.graphics === '?' ||
          game.minimum_system_requirements.graphics === null
            ? 'Not Listed'
            : game.minimum_system_requirements.graphics
        }}</strong></span
      >
      <span
        >Storage:
        <strong>{{
          game.minimum_system_requirements.storage === '?' ||
          game.minimum_system_requirements.storage === null
            ? 'Not Listed'
            : game.minimum_system_requirements.storage
        }}</strong></span
      >
    </div>
    <div class="images">
      <div v-for="screenshot in game.screenshots" class="image-container" :key="screenshot.id">
        <img :src="screenshot.image" alt loading="lazy" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.information,
.minimum-requirements {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
}

.information > span,
.minimum-requirements > span {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  color: var(--clr-brandy-700);
  transition: font-size 300ms ease-in-out;

  @media (max-width: 576px) {
    font-size: 0.75rem;
  }
}

span.heading {
  font-size: 2rem;
  font-weight: 800;
}

.images {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.image-container {
  max-width: 500px;
  max-height: 350px;
  aspect-ratio: 1.5;
  user-select: none;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>
