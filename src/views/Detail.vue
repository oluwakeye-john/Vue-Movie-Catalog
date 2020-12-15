<template>
  <div class="mx-3 md:mx-20 my-10">
    <div v-if="movie.id" class="flex flex-col sm:flex-row">
      <img class="hidden md:block md:w-1/4 object-cover" :src="movieImage" />
      <img class="md:hidden md:w-1/4 object-cover" :src="movieImageAlt" />

      <div class="md:ml-10 mt-5 md:mt-0">
        <div
          class="md:mt-8 mt-3 mb-8 flex justify-between text-2xl align-middle"
        >
          <h1 class="font-bold">{{ movie.title }}</h1>
          <span
            @click="addToFavorites"
            class="fas fa-heart cursor-pointer hover:text-secondary transition-colors duration-200"
            :class="{ 'text-secondary': favorite }"
          />
        </div>

        <div v-if="movie.genres.length" class="flex">
          <div
            v-for="genre in movie.genres"
            :key="genre.id"
            class="bg-gray-200 rounded-xl px-3 mr-4 py-0.5 text-sm mb-8"
          >
            {{ genre.name }}
          </div>
        </div>

        <div class="mb-8 flex text-sm md:justify-start">
          <div class="flex mr-10 items-center">
            <span class="fas fa-star mr-2" /> {{ movie.vote_average }}/10
          </div>

          <div class="flex items-center mr-10">
            <span class="fas fa-calendar mr-2" /> {{ movie.release_date }}/10
          </div>
        </div>

        <p class="text-sm">{{ movie.overview }}</p>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>

<script>
import { getMovieDetailRequest } from "../api";
import Loader from "../components/loader";
import storageContainer from "../storageContainer";

const getMovie = async (id) => {
  try {
    const response = await getMovieDetailRequest(id);
    console.log(response.data);
    return response.data;
  } catch (err) {
    return {};
  }
};

export default {
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      fetching: false,
      favorite: false,
      movie: {},
    };
  },
  methods: {
    addToFavorites() {
      this.favorite = storageContainer.addToFavorites(this.movie);
    },
    checkFavorite() {
      const resp = storageContainer.isFavorite(this.id);
      console.log("got", resp);
      this.favorite = resp;
    },
  },
  components: {
    Loader,
  },

  computed: {
    movieImage() {
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
    },
    movieImageAlt() {
      return "https://image.tmdb.org/t/p/w500" + this.movie.backdrop_path;
    },
  },
  async created() {
    this.fetching = true;
    this.movie = await getMovie(this.id);
    document.title = this.movie.title;
    this.fetching = false;
  },
  mounted() {
    this.checkFavorite();
  },
};
</script>