function getTitle(vm) {
  const { title } = vm.$options;
  if (title) {
    return typeof title === "function" ? title.call(vm) : title;
  }
}

export const setTitle = (value) => {
  document.title = value;
};

export default {
  created() {
    const title = getTitle(this);
    if (title) {
      document.title = title;
    }
  },
};
