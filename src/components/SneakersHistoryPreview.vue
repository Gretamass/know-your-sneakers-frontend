<template>
  <div class="illustrations"></div>
  <div class="sneakers-history-container">
    <div class="heading-container"><h1>Sportbačių istorijos</h1></div>
    <div class="sneaker-brands-container">
      <!--TODO: maybe use v-for and use dynamic brands in the future-->
      <button>Air Jordan</button>
      <button>Nike</button>
      <button>Adidas</button>
      <button>Puma</button>
    </div>
    <div class="sneakers-preview-container">
      <div
        v-for="sneaker in sneakersPreview"
        :key="sneaker.id"
        class="sneaker-preview"
      >
        <div class="image-container">
          <img :src="getImgUrl(sneaker.mainImageUrl)" />
        </div>
        <h2>{{ sneaker.model }}</h2>
        <h3>{{ sneaker.brand }}</h3>
      </div>
    </div>
    <button class="primary-button">Sužinoti daugiau</button>
  </div>
</template>

<script>
import { useSneakersStore } from "@/stores/mainStore";
export default {
  name: "SneakersHistoryPreview",
  setup() {
    const { sneakersPreview } = useSneakersStore();
    return {
      sneakersPreview,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/sneakers/" + pic);
    },
  },
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
.sneakers-history-container {
  @include flex-center-column;
  align-items: center;
  max-width: 1550px;

  .sneaker-brands-container {
    max-width: 1550px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      @include primary-button;
    }
  }
  .sneakers-preview-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    font-family: "Kumbh Sans";
    margin-top: 100px;

    .sneaker-preview {
      //max-width: 550px;
      @include flex-center-column;
      align-items: center;
      width: 33%;
      .image-container {
        width: auto;
        height: 250px;
        img {
          transition: 0.3s;
          width: 90%;
          height: 90%;
          margin-bottom: 35px;
        }
      }
      h2 {
        font-size: 20px;
      }
      h3 {
        font-weight: 400;
        font-size: 16px;
      }
      &:hover {
        .image-container img {
          transition: 0.3s;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
