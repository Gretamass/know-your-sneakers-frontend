<template>
  <div class="header-container">
    <div class="header">
      <div class="logo-container">
        <router-link to="/"><img src="../assets/logo.png" /></router-link>
      </div>
      <nav>
        <router-link :to="`/${Routes.SNEAKERS_HISTORY}`"
          >Sportbačių istorijos</router-link
        >
        <router-link :to="`/${Routes.ARTICLES}`">Tinklaraštis</router-link>
        <router-link :to="`/${Routes.SNEAKERS_IN_STOCK}`"
          >Sportbačiai prekyboje</router-link
        >
        <router-link :to="`/${Routes.ABOUT_US}`">Apie mus</router-link>
        <div class="sign-up">
          <router-link :to="`/${Routes.SIGN_UP}`">Prisijungti</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { Routes } from "@/router";
export default {
  name: "Header-item",
  computed: {
    Routes() {
      return Routes;
    },
  },
};
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: center;
  width: 100%;
  //background-image: url("@/assets/wave-haikei.svg");
  //height: 220px;
  //background-repeat: no-repeat;
  //background-size: cover;
  //z-index: 2;
}
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1550px;
  margin: 5px 15px;
  width: 100%;
  .logo-container {
    width: 150px;
    margin-right: 100px;
    img {
      width: 100%;
    }
  }
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    a {
      font-family: "Barlow Semi Condensed", sans-serif;
      text-decoration: none;
      font-weight: normal;
      font-size: 18px;
      line-height: 30px;
      color: #000;
    }
    a.router-link-exact-active {
      font-weight: bold;
    }
    div.sign-up {
      height: 30px;
      width: 125px;
      background-color: #37393a;
      border-radius: 15px;
      a {
        color: #fff;
      }
    }
  }
}
</style>
