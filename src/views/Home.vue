<template>
  <!--  <h1>Hello, {{ state.name }} {{ state.count }} many times</h1>-->
  <Hero></Hero>
  <ArticlesPreview></ArticlesPreview>
  <SneakersHistoryPreview></SneakersHistoryPreview>
  <about-us-preview></about-us-preview>
  <available-sneakers-preview></available-sneakers-preview>
</template>

<script>
import Hero from "../components/Hero.vue";
import ArticlesPreview from "@/components/ArticlesPreview.vue";
import SneakersHistoryPreview from "@/components/SneakersHistoryPreview.vue";
import AboutUsPreview from "@/components/AboutUsPreview.vue";
import AvailableSneakersPreview from "@/components/AvailableSneakersPreview.vue";

export default {
  name: "Home-item",
  components: {
    AvailableSneakersPreview,
    AboutUsPreview,
    SneakersHistoryPreview,
    ArticlesPreview,
    Hero,
  },
};
</script>

<style scoped></style>
