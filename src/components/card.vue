<template>
  <div class="mb-8 hover:opacity-80 cursor-pointer transform duration-300">
    <img class="object-cover rounded-md" :src="movieImage" />
    <h1></h1>
    <h3 class="text-lg font-bold text-black mt-2">{{ movie.title }}</h3>
    <p class="text-sm">{{ movie.release_date }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    movie: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    movieImage() {
      //   return "https://image.tmdb.org/t/p/w500" + this.movie.backdrop_path;
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
    },
  },
};
</script>