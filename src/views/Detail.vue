<template>
  <div class="mx-3 md:mx-20 my-10">
    <div v-if="movie.id" class="flex flex-col sm:flex-row">
      <img class="md:w-1/4 object-cover" :src="movieImage" />

      <div class="md:ml-10 mt-5 md:mt-0">
        <div
          class="md:mt-8 mt-3 mb-8 flex justify-between text-2xl align-middle"
        >
          <h1 class="font-bold">{{ movie.title }}</h1>
          <span class="fas fa-heart" />
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
  components: {
    Loader,
  },
  data() {
    return {
      fetching: false,
      movie: {},
    };
  },
  computed: {
    movieImage() {
      return "https://image.tmdb.org/t/p/w500" + this.movie.poster_path;
    },
  },
  async created() {
    this.fetching = true;
    this.movie = await getMovie(this.id);
    this.fetching = false;
  },
};
</script>