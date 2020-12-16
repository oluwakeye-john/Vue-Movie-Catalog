<template>
  <router-link :to="{ name: 'Detail', params: { id: movie.id } }">
    <div
      class="mb-8 hover:opacity-90 cursor-pointer transform duration-300 relative"
    >
      <img
        :alt="movie.title"
        class="object-cover rounded-md"
        :src="movieImage"
      />
      <h1></h1>
      <h3 class="text-lg font-bold text-black mt-2">{{ movie.title }}</h3>
      <p class="text-sm">{{ movie.release_date }}</p>
      <div
        class="rounded-full h-10 w-10 flex justify-center items-center bg-white text-primary text-xs absolute top-1 right-1 border-primary border-4"
      >
        {{ movie.vote_average * 10 }}
        <span style="font-size: 8px">%</span>
      </div>
    </div>
  </router-link>
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