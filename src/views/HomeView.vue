<script setup>
import { computed, ref } from 'vue';
import { useGames } from '@/composables/games';
import SearchInput from '@/components/SearchInput.vue';
import LoadingState from '@/components/LoadingState.vue';
import ErrorMessage from '@/components/ErrorMessage.vue';
import GameBlock from '@/components/GameBlock.vue';

const { loading, error, games } = useGames();

const searchText = ref('');
const gamesList = computed(() => {
  return games.value.filter((game) =>
    game.title.toLowerCase().includes(searchText.value.toLowerCase())
  );
});
</script>

<template>
  <main>
    <SearchInput v-model:searchText="searchText" />
    <LoadingState v-if="loading" />
    <ErrorMessage v-else-if="!loading && error" />
    <div v-else class="container">
      <GameBlock v-if="gamesList.length > 0" v-for="game in gamesList" :game="game" />
      <div v-else class="empty">Did not find anything!</div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.empty {
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
