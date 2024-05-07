<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  margin: auto;
}

.loader:before {
  content: '';
  width: 48px;
  height: 5px;
  background: var(--clr-brandy-200);
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: shadow 0.5s linear infinite;
}

.loader:after {
  content: '';
  width: 100%;
  height: 100%;
  background: var(--clr-brandy-600);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 4px;
  animation: jumping 0.5s linear infinite;
}

@keyframes jumping {
  15% {
    border-bottom-right-radius: 3px;
  }

  25% {
    transform: translateY(9px) rotate(22.5deg);
  }

  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }

  75% {
    transform: translateY(9px) rotate(67.5deg);
  }

  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.2, 1);
  }
}
</style>
