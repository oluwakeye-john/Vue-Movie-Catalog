<template>
  <div
    class="text-gray-500 bg-primary px-5 md:px-9 flex justify-between md:justify-start items-center"
  >
    <div
      v-for="item in items"
      :key="item.id"
      class="flex flex-col items-center text-center"
    >
      <router-link
        exact
        class="px-1 md:px-9 py-4 transition-colors duration-300 border-transparent border-b-2 text-sm"
        active-class="border-secondary text-gray-200"
        :to="item.link"
      >
        <span :class="item.icon" class="fas"></span>
        <p class="mt-1">{{ item.name }}</p>
      </router-link>
    </div>
  </div>
</template>


<script>
const items = [
  { name: "Popular", icon: "fa-star", id: 0, link: "/" },
  { name: "Favorite", icon: "fa-heart", id: 1, link: "/favorite" },
  { name: "Search", icon: "fa-search", id: 2, link: "/search" },
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


