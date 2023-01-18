<template>
  <!--  <h1>Hello, {{ state.name }} {{ state.count }} many times</h1>-->
  <Hero></Hero>
  <ArticlesPreview></ArticlesPreview>
  <SneakersHistoryPreview></SneakersHistoryPreview>
</template>

<script>
import Hero from "../components/Hero.vue";
import ArticlesPreview from "@/components/ArticlesPreview.vue";
import SneakersHistoryPreview from "@/components/SneakersHistoryPreview.vue";

import { useMainStore } from "@/stores/mainStore";

export default {
  name: "Home-item",
  components: {
    SneakersHistoryPreview,
    ArticlesPreview,
    Hero,
  },
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
