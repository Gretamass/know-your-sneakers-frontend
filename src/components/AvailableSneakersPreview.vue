<template>
  <div class="illustrations">
    <div class="yellow pill"></div>
  </div>
  <div class="available-sneakers-container">
    <div class="heading-container"><h1>Sportbačiai prekyboje</h1></div>
    <div class="sneaker-brands-container">
      <!--TODO: maybe use v-for and use dynamic brands in the future-->
      <button>Air Jordan</button>
      <button>Nike</button>
      <button>Adidas</button>
      <button>Puma</button>
    </div>
    <div class="available-sneakers-preview-container">
      <div
        v-for="sneaker in availableSneakersPreview"
        :key="sneaker.id"
        class="available-sneaker-preview"
      >
        <h2>{{ sneaker.name }}</h2>
        <div class="sneaker-info">
          <div class="image-container">
            <img :src="getImgUrl(sneaker.mainImageUrl)" />
          </div>
          <div class="shop-container">
            <div
              v-for="shop in sneaker.availability"
              :key="shop.id"
              class="shop"
            >
              <div class="image-container">
                <img :src="getShopImgUrl(shop.mainImageUrl)" />
              </div>
              <div
                class="stock-status"
                :class="{
                  'in-stock': shop.hasInStock,
                  'out-of-stock': !shop.hasInStock,
                }"
              >
                {{ shop.hasInStock ? "Yra prekyboje" : "Nėra prekyboje" }}
              </div>
              <span class="price">{{
                shop.price ? shop.price + " €" : ""
              }}</span>
            </div>
            <button class="primary-button">Žiūrėti daugiau parduotuvių</button>
          </div>
        </div>
      </div>
    </div>
    <button class="primary-button">Žiūrėti daugiau sportbačių</button>
  </div>
</template>

<script>
import { useSneakersStore } from "@/stores/mainStore";

export default {
  name: "AvailableSneakersPreview",
  setup() {
    const { availableSneakersPreview } = useSneakersStore();
    return {
      availableSneakersPreview,
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/sneakers/" + pic);
    },
    getShopImgUrl(pic) {
      return require("../assets/shops/" + pic);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_mixins.scss";

.primary-button {
  @include primary-button;

  width: 350px;
}

.heading-container {
  @include heading-container;
}

.available-sneakers-container {
  @include flex-center-column;
  align-items: center;
  max-width: 1550px;
  width: 100%;
  margin-bottom: 150px;

  .sneaker-brands-container {
    max-width: 1550px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    button {
      @include primary-button;
    }
  }

  .available-sneakers-preview-container {
    @include flex-center-column;
    .available-sneaker-preview {
      display: flex;
      margin-top: 100px;
      @include flex-center-column;

      h2 {
        font-family: "Kumbh Sans";
        font-size: 36px;
        font-weight: 600;
      }
      .sneaker-info {
        display: flex;
        flex-direction: row;
        .image-container {
          height: auto;
          //width: auto;
          width: 60%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .shop-container {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: center;
          align-content: flex-start;
          width: 40%;

          .shop {
            width: 40%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 20px auto;
            .image-container {
              height: 150px;
              width: auto;
              margin-bottom: 20px;
            }
            .stock-status {
              display: flex;
              justify-content: center;
              align-items: center;
              font-family: "Kumbh Sans";
              font-size: 18px;
              border-radius: 15px;
              height: 30px;
              width: 175px;
              margin-bottom: 20px;
              &.in-stock {
                background-color: $light-grey;
                color: $grey;
              }
              &.out-of-stock {
                background-color: $grey;
                color: $light-grey;
              }
            }
            span.price {
              font-family: "Kumbh Sans";
              font-size: 16px;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>
