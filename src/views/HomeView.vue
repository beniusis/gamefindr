<script setup>
import { useGames } from '@/composables/games';
import LoadingState from '@/components/LoadingState.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import GameBlock from '@/components/GameBlock.vue';

const { loading, error, games } = useGames();
</script>

<template>
  <main>
    <LoadingState v-if="loading" />
    <ErrorMessage v-else-if="!loading && error" />
    <div v-else class="container">
      <GameBlock v-for="game in games" :game="game" />
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
