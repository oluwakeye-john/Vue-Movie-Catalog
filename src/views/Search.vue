<template>
  <div class="text-center mt-10">
    <form @submit.prevent="submit" class="relative w-3/4 md:w-1/3 mx-auto">
      <input
        required
        placeholder="Search for movies"
        class="focus:shadow px-5 py-1 w-full rounded input"
        v-model="input"
      />
      <button class="absolute top-1 right-5">
        <span class="fas fa-search" />
      </button>
    </form>
    <list v-if="!search.results.fetching">
      <div v-for="movie in search.results" :key="movie.id">
        <card :movie="movie" />
      </div>
    </list>
    <div v-else>
      <loader />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  border: 1px solid rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
  }
}
</style>

<script>
import { mapActions, mapState } from "vuex";
import Card from "../components/card.vue";
import list from "../components/list.vue";
import Loader from "../components/loader.vue";
export default {
  components: { list, Card, Loader },
  name: "Search",
  data() {
    return {
      input: "",
    };
  },
  mounted() {
    this.prefilInput();
  },
  computed: {
    ...mapState(["search"]),
  },
  methods: {
    ...mapActions(["getSearch"]),
    async submit() {
      this.getSearch(this.input);
    },
    prefilInput() {
      if (this.search.input) {
        this.input = this.search.input;
      }
    },
  },
};
</script>