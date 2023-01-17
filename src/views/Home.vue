<template>
  <h1>Hello, {{ state.name }} {{ state.count }} many times</h1>
</template>

<script>
import { useMainStore } from "@/stores/mainStore";

export default {
  name: "Home-item",
  setup() {
    // const { count, name } = useMainStore();
    const state = useMainStore();
    console.log(state.count);
    console.log(state.name);

    return {
      // you can return the whole store instance to use it in the template
      state,
    };
  },
};
</script>

<style scoped></style>
