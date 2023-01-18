<template>
  <div class="hero-container">
    <div class="title-container">
      <h1>
        Sužinokite savo mėgstamiausių sportbačių istoriją ir pamatykite, kur
        juos galite įsigyti
      </h1>
      <button>Skaityti sportbačių istorijas</button>
    </div>
    <div class="image-container">
      <img src="../assets/juicy-boy-analyzes-graphs-and-diagrams.gif" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero-item",
};
</script>

<style scoped lang="scss">
.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1550px;
  margin-top: 75px;

  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: start;
    font-family: "Kumbh Sans";
    font-weight: bold;
    font-size: 30px;
    //line-height: 46px;
    button {
      width: 300px;
      height: 50px;
      background-color: #fdc93a;
      border: none;
      border-radius: 15px;
      font-family: "Barlow Semi Condensed", sans-serif;
      font-size: 21px;
      font-weight: 500;
    }
  }
}
</style>
