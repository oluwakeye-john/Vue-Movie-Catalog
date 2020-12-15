<template>
  <div
    class="bg-primary text-gray-200 px-5 md:px-9 flex justify-between md:justify-start items-center"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="flex flex-col items-center text-center"
    >
      <router-link
        exact
        class="px-1 md:px-9 py-5 transition-colors duration-300 border-transparent border-b-2"
        active-class="border-secondary "
        :to="item.link"
      >
        <span :class="item.icon" class="fas"></span>
        <p class="mt-2">{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>


<script>
const items = [
  { name: "Popular", icon: "fa-star", id: 0, link: "/" },
  { name: "Favorite", icon: "fa-heart", id: 1, link: "/favorite" },
  { name: "Search", icon: "fa-search", id: 1, link: "/search" },
];

export default {
  name: "Header",
  data() {
    return {
      items,
    };
  },
};
</script>


