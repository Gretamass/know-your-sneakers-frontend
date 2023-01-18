<template>
  <Header></Header>
  <router-view />
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
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
  width: 100vw;
  background-image: url("@/assets/wave-haikei.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 8px 0;
  margin: 0;
}
</style>
