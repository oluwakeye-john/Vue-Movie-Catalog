<template>
  <div class="landing-container flex items-center justify-center bg-primary">
    <div class="z-10 text-center">
      <h1 class="font-bold text-5xl font-mono text-white mb-5">
        Discover your Movies
      </h1>
      <p class="text-gray-300 text-lg">
        Millions of movies, TV shows and people to discover. Explore now.
      </p>
    </div>
    <img
      class="h-full w-screen object-cover opacity-100 absolute top-0 left-0 darken pointer-events-none"
      :src="movieImage"
    />
  </div>
</template>

<style scoped>
.darken {
  filter: brightness(0.6);
}
.landing-container {
  position: relative;
  height: 70vh;
}

@media (max-width: 768px) {
  .landing-container {
    height: 50vh;
  }
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