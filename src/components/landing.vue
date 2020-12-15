<template>
  <div class="landing-container flex items-center justify-center bg-primary">
    <div class="z-10 text-center">
      <h1 class="font-bold text-5xl font-mono text-white mb-5 content1">
        Discover your Movies
      </h1>
      <p class="text-gray-300 text-lg content2">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
    </div>
    <img
      class="h-full w-screen object-cover opacity-100 absolute top-0 left-0 darken pointer-events-none"
      :src="movieImage"
    />
  </div>
</template>

<style lang="scss" scoped>
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.darken {
  filter: brightness(0.6);
}
.landing-container {
  position: relative;
  height: 70vh;
  @media (max-width: 768px) {
    height: 50vh;
  }
}

.content1 {
  animation: slideIn 0.5s linear;
}

.content2 {
  animation: bounce-in 1s ease-in-out;
}
</style>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Landing",
  methods: {
    ...mapActions(["getHero"]),
  },
  computed: {
    ...mapState(["hero"]),
    movieImage() {
      return "https://image.tmdb.org/t/p/original" + this.hero.backdrop_path;
    },
  },
  created() {
    this.getHero();
  },
};
</script>

<style>
</style>