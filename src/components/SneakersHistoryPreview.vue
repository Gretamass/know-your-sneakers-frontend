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
    <div class="sneakers-preview-container" v-if="sneakersPreview">
      <div
        v-for="sneaker in sneakersPreview"
        :key="sneaker.id"
        class="sneaker-preview"
      >
        <div class="image-container">
          <img :src="getImgUrl(sneaker.brand, sneaker.imageUrl)" />
        </div>
        <h2>{{ sneaker.model }}</h2>
        <h3>{{ sneaker.brand }}</h3>
      </div>
    </div>
    <router-link :to="`/${Routes.SNEAKERS_HISTORY}`"
      ><button class="primary-button">Sužinoti daugiau</button></router-link
    >
  </div>
</template>

<script>
import { useSneakersStore } from "@/stores/mainStore";
import { onMounted, ref } from "vue";
import { Routes } from "@/router";
export default {
  name: "SneakersHistoryPreview",
  computed: {
    Routes() {
      return Routes;
    },
  },
  setup() {
    const sneakersStore = useSneakersStore();
    const sneakersPreview = ref([]);

    onMounted(() => {
      sneakersStore.fetchSneakersPreview().then(() => {
        console.log(sneakersStore.sneakers);
        sneakersPreview.value = sneakersStore.sneakers.data.slice(0, 6);
      });
    });

    return {
      sneakersPreview,
    };
  },
  methods: {
    getImgUrl(brand, picUrl) {
      return "../src/assets/sneakers/" + brand + "/" + picUrl;
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
  margin-bottom: 100px;

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
        height: 350px;
        width: max-content;
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
