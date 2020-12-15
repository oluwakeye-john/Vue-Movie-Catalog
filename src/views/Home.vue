<template>
  <div>
    <Landing />
    <List>
      <div v-for="movie in popular" :key="movie.id">
        <Card :movie="movie" />
      </div>
    </List>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../components/card";
import Landing from "../components/landing.vue";
import List from "../components/list.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: { Card, Landing, List },
  title: "Viz Movies",
  computed: {
    ...mapState(["popular"]),
  },
};
</script>
