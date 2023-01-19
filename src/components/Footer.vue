<template>
  <div class="illustrations">
    <div class="grey circle"></div>
  </div>
  <div class="footer-container">
    <div class="upper-half illustration">
      <div class="content">
        <div class="logo-container"><img src="../assets/logo.png" /></div>
        <div class="menu-item">
          <h2>Informacija</h2>
          <h3>Apie mus</h3>
          <h3>Sportbačių istorijos</h3>
        </div>
        <div class="menu-item">
          <h2>Naudingos nuorodos</h2>
          <h3>Terminai ir sąlygos</h3>
          <h3>Privatumo politika</h3>
        </div>
        <div class="menu-item">
          <h2>Mūsų paslaugos</h2>
          <h3>Sportbačiai prekyboje</h3>
          <h3>Naujienlaiškiai</h3>
        </div>
        <div class="menu-item">
          <h2>Susisiekite su mumis</h2>
          <h3>knowyoursneakers@info.com</h3>
        </div>
      </div>
    </div>
    <div class="bottom-half illustration">
      <div class="content">
        <div class="title-container"><h2>Prenumeruoti tinklaraštį</h2></div>
        <div class="subsription-container">
          <div class="input-container">
            <img src="../assets/img.png" class="email-icon" />
            <input placeholder="Įrašykite savo el. paštą" />
          </div>
          <button class="tertiary-button">Prenumeruoti</button>
        </div>
      </div>
    </div>
  </div>
  <div class="copyrights">2023 @knowyoursneakers</div>
</template>

<script>
export default {
  name: "Footer-Item",
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";
@import "@/assets/_mixins.scss";

.illustrations {
  width: 100%;
  position: relative;
  .grey.circle {
    @include circle;
    height: 300px;
    width: 300px;
    margin-left: 250px;
    margin-top: 50px;
    position: absolute;
    bottom: -150px;
  }
}
.footer-container {
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  position: relative;
  margin-bottom: 50px;

  .upper-half.illustration {
    height: 200px;
    width: 100%;
    background-color: $yellow;
    border-radius: 0 300px 300px 0;
    padding-top: 50px;
    display: flex;
    justify-content: center;
  }
  .content {
    max-width: 1550px;
    width: 100%;
  }
  .upper-half .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    .logo-container {
      width: auto;
      height: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .menu-item {
      font-family: "Kumbh Sans";
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      h2,
      h3 {
        margin: 0;
      }
      h2 {
        font-size: 20px;
        margin-bottom: 20px;
      }
      h3 {
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 10px;
      }
    }
  }
  .bottom-half.illustration {
    height: 125px;
    width: 75%;
    background-color: $grey;
    border-radius: 0 100px 100px 0;
    padding-top: 10px;
    display: flex;
    justify-content: flex-start;
    z-index: 3;
    position: absolute;
    bottom: -50px;
  }
  .bottom-half .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 125px;
    margin-left: 180px;
    .title-container {
      h2 {
        color: $light-grey;
        font-weight: 400;
      }
    }
    .subsription-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      .input-container {
        margin-right: 50px;
        height: 25px;
        border-bottom: 1px solid $light-grey;
        .email-icon {
          width: 20px;
          margin-right: 10px;
        }
        input {
          background-color: $grey;
          border: none;
          font-size: 14px;
          color: $light-grey;
          &::placeholder {
            font-size: 14px;
            color: $light-grey;
          }
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        border: none;
        height: 30px;
        width: 160px;
        background-color: $light-grey;
        font-family: "Kumbh Sans";
        font-size: 15px;
      }
    }
  }
}

.copyrights {
  font-family: "Kumbh Sans";
  color: $black;
  font-size: 15px;
  margin-top: 10px;
}
</style>
