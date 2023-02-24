<template>
  <div class="log-in-page">
    <div class="log-in-container">
      <div class="log-in-form">
        <h1>Prisijunkite prie savo paskyros</h1>
        <h2>Sveiki atvykę!</h2>
        <div class="form">
          <label for="email" class="label">El. Paštas</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Įveskite savo el. paštą"
            v-model="user.email"
          />

          <label for="password" class="label">Slaptažodis</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Įveskite savo slaptažodį"
            v-model="user.password"
          />
          <button class="primary-button" @click="logInUser">Prisijungti</button>
          <span
            ><router-link :to="`/${Routes.SIGN_UP}`"
              >Neturi paskyros? Susikūrk naują ir prisijunk prie
              mūsų!</router-link
            ></span
          >
        </div>
      </div>
      <div class="illustration-container">
        <div class="image-container">
          <img src="../assets/undraw_sign_in_re_o58h_1.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Routes } from "@/router";

export default {
  name: "LogIn",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      output: "",
    };
  },
  computed: {
    Routes() {
      return Routes;
    },
  },
  methods: {
    logInUser() {
      axios
        .post("http://localhost:8080/login", {
          email: this.user.email,
          password: this.user.password,
        })
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_mixins.scss";

.primary-button {
  @include secondary-button;
  margin: 10px 0;
  background-color: $yellow;
}

.log-in-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 125px;
  margin-bottom: 100px;
  height: 100%;
  .log-in-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    width: 100%;
    height: 450px;
    margin-bottom: 100px;
    & > div {
      flex: 1;
    }
    .log-in-form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: "Kumbh Sans";
      h1 {
      }

      h2 {
      }

      .form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        //& > {
        //  display: flex;
        //  flex-direction: column;
        //  justify-content: center;
        //  align-items: flex-start;
        //  padding: 5px 0;
        //}
        label {
          padding: 5px 0;
        }
        input {
          border: 1px solid #37393a;
          border-radius: 15px;
          height: 35px;
          width: 450px;
          padding: 5px 10px;
          margin-bottom: 15px;
        }
        span {
          margin-top: 10px;
          a {
            color: $grey;
            text-decoration: none;
            font-size: 14px;
          }
        }
      }
    }
  }
  .illustration-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .image-container {
      width: 100%;
      height: auto;
      margin-top: 100px;
      img {
        width: 100%;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    }
  }
}
</style>
