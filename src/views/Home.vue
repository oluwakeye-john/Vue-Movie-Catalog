<template>
  <div class="home">
    <div
      class="grid sm:grid-cols-5 grid-cols-2 sm:gap-x-16 gap-x-4 mx-3 mt-10 sm:mx-10"
    >
      <div v-for="movie in popular" :key="movie.id">
        <Card :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../components/card";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Card },
  computed: {
    ...mapState(["popular"]),
  },
};
</script>
