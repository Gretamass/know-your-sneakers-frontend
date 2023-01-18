<template>
  <div class="illustrations">
    <div class="grey circle"></div>
    <div class="yellow pill"></div>
    <div class="grey circle"></div>
  </div>
  <div class="about-us-container">
    <div class="heading-container"><h1>Apie mus</h1></div>
    <div class="about-us-holder">
      <div class="illustrations">
        <div class="grey circle"></div>
        <div class="yellow circle"></div>
      </div>
      <div class="about-us">
        <span
          >Sveiki atvykę į mūsų svetainę, kurioje rasite viską, kas susiję su
          sportbačiais! Esame sportinių batelių entuziastų, aistringai
          besidominčių sportbačių istorija ir kultūra, komanda. Tikime, kad
          sportbačiai yra daugiau nei tik batai, jie atspindi mūsų kultūrą ir
          istoriją.</span
        >
        <span
          >Mūsų misija - pateikti skaitytojams išsamią informaciją apie
          sportbačių istoriją - nuo pirmųjų "Converse All-Stars" iki naujausių
          aukštųjų technologijų modelių. Nagrinėjame įvairias temas - nuo
          sportbačių dizaino evoliucijos iki kultinių sportbačių
          bendradarbiavimų ir sportbačių kultūros iškilimo.</span
        >
        <span
          >Be informacijos apie sportbačių istoriją, taip pat stengiamės
          informuoti savo skaitytojus apie naujausius sportbačių išleidimus,
          būsimus bendradarbiavimus ir įvairių el. parduotuvių atsargas.
          Nesvarbu, ar esate kolekcininkas, perpardavinėtojas, ar tiesiog
          mėgstate sportinius batelius, mes jums padėsime. Realiuoju laiku
          pateikiame duomenis apie įvairių el. parduotuvių turimas atsargas,
          todėl daugiau niekada nepraleisite išleidimo.</span
        >
        <span
          >Mūsų komanda yra pasiryžusi teikti savo skaitytojams naujausią ir
          tiksliausią informaciją apie sportbačių pramonę. Nenuilstamai dirbame,
          kad pateiktume jums naujausias naujienas, apžvalgas ir informaciją
          apie naujus išleidimus bei būsimus bendradarbiavimo projektus.</span
        >
        <span
          >Dėkojame, kad lankotės mūsų svetainėje, ir tikimės, kad jums patiks
          mūsų turinys. Jei turite pasiūlymų ar atsiliepimų, nedvejodami
          susisiekite su mumis. Visada ieškome būdų, kaip tobulėti ir suteikti
          savo skaitytojams kuo geresnę patirtį.</span
        >
      </div>
    </div>
    <button class="primary-button">Susisiekite su mumis</button>
  </div>
</template>

<script>
export default {
  name: "AboutUsPreview",
};
</script>

<style scoped lang="scss">
@import "@/assets/_mixins.scss";

.primary-button {
  @include primary-button;
}
.heading-container {
  @include heading-container;
}
.about-us-container {
  max-width: 1550px;
  width: 100%;
  @include flex-center-column;
  align-items: center;

  .about-us-holder {
    max-width: 100vw;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .illustrations {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    .yellow.circle {
      @include circle;
      height: 200px;
      width: 200px;
      margin-left: 100px;
      position: absolute;
    }
    .grey.circle {
      @include circle;
      height: 500px;
      width: 500px;
      margin-left: 100px;
      position: absolute;
    }
  }
  .about-us {
    flex: 2;
    max-width: 850px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    span {
      margin-bottom: 20px;
      text-align: start;
      font-family: "Kumbh Sans";
      font-size: 22px;
    }
  }
}
</style>
