<template>
  <Header></Header>
  <router-view />
  <footer-item></footer-item>
</template>

<script>
import Header from "@/components/Header.vue";
import FooterItem from "@/components/Footer.vue";

export default {
  components: {
    FooterItem,
    Header,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
body,
html {
  height: 100%;
  width: 100%;
  background-image: url("@/assets/wave-haikei.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8px 0;
  margin: 0;
}
</style>
