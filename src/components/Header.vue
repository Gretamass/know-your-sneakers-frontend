<template>
  <div class="header">
    <div class="logo-container">
      <img src="../assets/logo.png" />
    </div>
    <nav>
      <router-link to="/sneakers-history">Sportbačių istorijos</router-link>
      <router-link to="/articles">Tinklaraštis</router-link>
      <router-link to="/sneakers-in-stock">Sportbačiai prekyboje</router-link>
      <router-link to="/about-us">Apie mus</router-link>
      <div class="sign-up">
        <router-link to="/sign-up">Prisijungti</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header-item",
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1550px;
  width: 100%;
  margin-top: 5px;
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
