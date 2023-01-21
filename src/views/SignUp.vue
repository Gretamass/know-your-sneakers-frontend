<template>
  <div class="sign-up-page">
    <div class="sign-up-container">
      <div class="sign-up-form">
        <h1>Registruotis naujai paskyrai</h1>
        <h2>Sveiki atvykę!</h2>
        <form action="#" method="post">
          <div>
            <label for="email" class="label">El. Paštas</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Įveskite savo el. paštą"
            />
          </div>
          <div>
            <label for="password" class="label">Slaptažodis</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Įveskite savo slaptažodį"
            />
            <!--<span>Enter a password longer than 8 characters</span>-->
          </div>
          <div>
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
          </div>
          <button type="submit" id="submit" class="primary-button">
            Registruotis
          </button>
        </form>
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
export default {
  name: "SignUp",
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
  margin-top: 75px;
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

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        & > div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 5px 0;
          label {
            padding: 5px 0;
          }
          input {
            border: 1px solid #37393a;
            border-radius: 15px;
            height: 35px;
            width: 450px;
            padding: 5px 10px;
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
      img {
        width: 100%;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    }
  }
}
</style>
