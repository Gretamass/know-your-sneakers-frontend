<template>
  <div class="account-settings">
    <div class="title">Paskyros nustatymai</div>
    <div class="settings-section">
      <div class="setting-name">Paprasta informacija</div>
      <div class="setting-container">
        <div class="row">
          <span class="name">Vardas</span>
          <span class="value">Vardenis Pavardenis</span>
          <img src="../../assets/edit-246-32.png" />
        </div>
        <div class="row">
          <span class="name">Gimimo data</span>
          <span class="value">1991 - 04 - 09</span>
          <img src="../../assets/edit-246-32.png" />
        </div>
      </div>
    </div>
    <div class="settings-section">
      <div class="setting-name">Paskyros informacija</div>
      <div class="setting-container">
        <div class="row">
          <span class="name">El. paštas</span>
          <span class="value">vardenis.pavardenis@gmail.com</span>
          <img src="../../assets/edit-246-32.png" />
        </div>
        <div class="row">
          <span class="name">Slaptažodis</span>
          <span class="value">* * * * * * * * *</span>
          <img src="../../assets/edit-246-32.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountSettings",
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";

.account-settings {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 150px;
  padding-top: 100px;
  font-family: "Kumbh Sans";

  .title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 50px;
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
    }
  }
}
</style>
