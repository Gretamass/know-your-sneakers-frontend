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
  <div class="pill-illustrations">
    <div class="grey circle"></div>
    <div class="yellow pill"></div>
    <div class="grey pill"></div>
  </div>
</template>

<script>
export default {
  name: "Hero-item",
};
</script>

<style scoped lang="scss">
@import "@/assets/_mixins.scss";

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

.pill-illustrations {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  margin-top: 50px;

  .circle {
    @include circle;
    margin-left: 100px;
    position: absolute;
    bottom: 0px;
  }
  .yellow.pill {
    @include pill;
    height: 100px;
    width: 706px;
    position: absolute;
  }
  .grey.pill {
    @include pill;
    height: 60px;
    width: 430px;
    position: absolute;
    top: 20px;
  }
}
</style>
