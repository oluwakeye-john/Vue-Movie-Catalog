<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapState(["popular"]),
  },
  methods: {
    ...mapActions(["getPopularAction", "getLandingImage"]),
  },
  created() {
    this.getPopularAction();
  },
};
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
