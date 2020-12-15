<template>
  <div class="about">
    <div v-if="favorites.length">
      <list>
        <div v-for="movie in favorites" :key="movie.id">
          <Card :movie="movie" />
        </div>
      </list>
    </div>
    <div class="mt-20 flex items-center justify-center text-center" v-else>
      <div>
        <img class="w-52 mx-auto" :src="emptyLogo" />
        <p class="mt-10">No favorites added</p>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/card.vue";
import List from "../components/list.vue";
import storageContainer from "../storageContainer";

export default {
  components: { Card, List },
  name: "Favorite",
  title: "Favorites",
  data() {
    return {
      favorites: [],
      emptyLogo: require("../assets/empty.svg"),
    };
  },
  methods: {
    getFavorites() {
      console.log("calling");
      this.favorites = storageContainer.getFavorites();
    },
  },
  created() {
    this.getFavorites();
  },
};
</script>