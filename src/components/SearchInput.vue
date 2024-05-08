<script setup>
defineProps({
  searchText: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <label class="sr-only" name="search" for="search">Search for a game</label>
  <div class="input-group">
    <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
      <g>
        <path
          d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
        ></path>
      </g>
    </svg>
    <input
      class="search-input"
      id="search"
      type="text"
      name="search"
      placeholder="Search"
      :value="searchText"
      @input="$emit('update:searchText', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.input-group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px;
}

.search-input {
  width: 100%;
  height: 40px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: var(--clr-brandy-200);
  color: var(--clr-brandy-900);
  transition: 0.3s ease;

  &::placeholder {
    color: var(--clr-brandy-900);
  }

  &:focus,
  &:hover {
    outline: none;
    border-color: var(--clr-brandy-900);
    box-shadow: 0 0 0 0.25rem var(--clr-brandy-200);
  }
}

.icon {
  position: absolute;
  left: 1rem;
  fill: var(--clr-brandy-900);
  width: 1rem;
  height: 1rem;
}
</style>
