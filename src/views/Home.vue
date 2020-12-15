<template>
  <div>
    <Landing />
    <div
      class="grid sm:grid-cols-5 grid-cols-2 sm:gap-x-12 gap-x-4 mx-3 sm:mx-20 mt-20"
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
import Landing from "../components/landing.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Card, Landing },
  title: "Viz Movies",
  computed: {
    ...mapState(["popular"]),
  },
};
</script>
