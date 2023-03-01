<template>
  <div class="account-settings">
    <div class="title">Produktų valdymas <div class="notification-message">2 nauji produktų pasiūlymai</div></div>
    <div class="settings-section">
      <div class="setting-name">Sportbačių sąrašas</div>
      <div class="search-container">
        <input placeholder="Vykdyti paiešką" />
      </div>
      <div class="setting-container">
        <!--        TODO: use v-for to display all sneakers       -->
        <div class="row">
          <span class="name">Vardas</span>
          <span class="value">Vardenis Pavardenis</span>
          <img src="../../assets/edit-246-32.png" />
        </div>
      </div>
    </div>
    <div class="settings-section">
      <div class="setting-name">Įtraukti naują produktą</div>
      <div class="setting-container">
        <div class="column">
          <span class="name">Produkto tipas</span>
          <!--        TODO: add dropdown       -->
        </div>
        <div class="column">
          <span class="name">Produkto pavadinimas</span>
          <input placeholder="Produkto pavadinimas" />
        </div>
      </div>
      <button>Įtraukti naują produktą</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSettings",
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";

.account-settings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 150px;
  padding: 100px 0;
  font-family: "Kumbh Sans";

  .title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .notification-message {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 275px;
      background-color: $yellow;
      border-radius: 15px;
      font-size: 16px;
      font-weight: bold;
    }
  }

  .settings-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    .setting-name {
      font-size: 28px;
      font-weight: bold;
      margin: 15px 0;
    }
    .search-container {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
    }
    input {
      width: 100%;
      border-radius: 15px;
      padding: 10px 15px;
      font-size: 20px;
      line-height: 24px;
      &::placeholder {
        font-size: 20px;
        line-height: 24px;
        color: $grey;
      }
    }
    .setting-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      font-size: 22px;

      .row {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        border-bottom: 1px solid $light-grey;
        width: 100%;
        margin-bottom: 16px;

        .name {
          width: 40%;
          text-align: start;
        }

        img {
          margin-left: auto;
        }
      }

      .column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        margin-bottom: 16px;
        .name {
          margin-bottom: 10px;
        }
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 250px;
      height: 40px;
      background-color: $yellow;
      border: none;
      border-radius: 15px;
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
