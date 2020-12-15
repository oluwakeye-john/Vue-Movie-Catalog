<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/header";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./styles/global.scss";
</style>
