<template>
  <div
    class="grid sm:grid-cols-5 grid-cols-2 sm:gap-x-12 gap-x-4 mx-5 sm:mx-20 mt-10 md:mt-20"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>