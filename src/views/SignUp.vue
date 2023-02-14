<template>
  <div class="sign-up-page">
    <div class="sign-up-container">
      <div class="sign-up-form">
        <h1>Registruotis naujai paskyrai</h1>
        <h2>Sveiki atvykę!</h2>
        <div class="form">
          <label for="email" class="label">El. Paštas</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Įveskite savo el. paštą"
            v-model="newUser.email"
          />

          <label for="password" class="label">Slaptažodis</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Įveskite savo slaptažodį"
            v-model="newUser.password"
          />
          <!--<span>Enter a password longer than 8 characters</span>-->

          <label for="confirm_password" class="label"
            >Pakartokite slaptažodį</label
          >
          <input
            id="confirm_password"
            name="confirm_password"
            type="password"
            placeholder="Pakartotinai įveskite savo slaptažodį"
          />
          <!--<span>Your passwords do not match</span>-->
          <button class="primary-button" @click="addNewUser">
            Registruotis
          </button>
        </div>
        <h3>{{ output }}</h3>
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

export default {
  name: "SignUp",
  data() {
    return {
      newUser: {
        email: "",
        password: "",
      },
      output: "",
    };
  },
  methods: {
    addNewUser() {
      axios
        .post("http://localhost:8080/user", {
          email: this.newUser.email,
          password: this.newUser.password,
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
  margin-top: 10px;
  background-color: $yellow;
}

.sign-up-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 125px;
  margin-bottom: 100px;
  height: 100%;
  .sign-up-container {
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
    .sign-up-form {
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
