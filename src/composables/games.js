import { onMounted, ref } from 'vue';

const GAMES_API_BASE_URL = 'https://beniusis.vercel.app/api/games';

export const useGames = () => {
  const loading = ref(false);
  const error = ref(false);
  const games = ref([]);

  onMounted(async () => {
    try {
      loading.value = true;
      error.value = false;

      const response = await fetch(GAMES_API_BASE_URL);
      const data = await response.json();

      games.value = data;
      loading.value = false;
    } catch {
      error.value = true;
    }
  });

  return { loading, error, games };
};

export const useGame = (id) => {
  const loading = ref(false);
  const error = ref(false);
  const game = ref([]);

  onMounted(async () => {
    try {
      loading.value = true;
      error.value = false;

      const response = await fetch(`${GAMES_API_BASE_URL}/${id}`);
      const data = await response.json();

      game.value = data;
      loading.value = false;
    } catch {
      error.value = true;
    }
  });

  return { loading, error, game };
};
