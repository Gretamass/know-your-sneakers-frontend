<template>
  <div class="sneaker-history-page" v-if="!loading">
    <div class="introduction">
      <div class="image-container">
        <img
          v-if="sneaker && sneaker.imageUrl"
          :src="`../src/assets/sneakers/${sneaker.brand}/${sneaker.imageUrl}`"
        />
      </div>
      <div class="main-text">
        <h1>{{ sneaker.model }}</h1>
        <h2>{{ sneaker.brand }}</h2>
        <p>{{ sneaker.sneakerInformation.mainInfo }}</p>
        <button @click="addToWishlist()">
          Įtraukti į norų sąrašą
          <!-- TODO: add an indication when sneaker is already added to wishlist -->
          <img class="wishlist-icon" src="../assets/whishlist-not-added.png" />
        </button>
      </div>
    </div>
    <div v-if="sneaker.sneakerInformation.additionalInfo" class="main-information">
      <p>{{ sneaker.sneakerInformation.additionalInfo }}</p>
    </div>
    <div class="image-carousel" v-if="sneaker.imageCarousel">
      <!-- TODO: create an image carousel-->
      <img :src="getImgUrl(sneaker.imageCarousel[0])" />
      <div class="pagination">
        <button class="chevron" @click="previousImage()">
          <fa-icon :icon="['fa', 'chevron-left']" />
        </button>
        <button class="first">1</button>
        <button class="hidden-number" disabled>...</button>
        <button class="last">{{ sneaker.imageCarousel.length }}</button>
        <button class="chevron" @click="nextImage()">
          <fa-icon :icon="['fa', 'chevron-right']" />
        </button>
      </div>
    </div>
    <div v-if="sneaker.additionalInformation" class="additional-info-container">
      <div
        v-for="(info, index) in sneaker.additionalInformation"
        :key="index"
        class="additional-info"
      >
        <p>{{ info }}</p>
        <div class="image-container">
          <img :src="getImgUrl(sneaker.additionalImages[index])" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSneakersStore } from "@/stores/mainStore";
import { ref, onMounted } from "vue";

export default {
  name: "ProductDetailedPage",
  props: {
    sneakerId: {
      type: String,
      required: true,
    },
    sneakerName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const sneakersStore = useSneakersStore();
    const sneaker = ref(null);
    const loading = ref(true);

    onMounted(() => {
      sneakersStore.fetchSneakerInfo(props.sneakerId).then((response) => {
        sneaker.value = response.data;
        loading.value = false;
      });
    });

    return {
      sneaker,
      loading,
    };
  },
  methods: {
    getImgUrl(brand, picUrl) {
      return "../src/assets/sneakers/" + brand + "/" + picUrl;
    },
    addToWishlist() {
      //   TODO: add sneaker to user wishlist
    },
    previousImage() {
      //   TODO: add previousImage function
    },
    nextImage() {
      //   TODO: add nextImage function
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_mixins.scss";

.sneaker-history-page {
  display: flex;
  flex-direction: column;
  max-width: 1550px;
  width: 100%;
  margin: 100px 0;
}

p {
  font-family: "Kumbh Sans";
  font-size: 18px;
}

.introduction {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .image-container {
    //width: 500px;
    height: auto;
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .main-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    text-align: end;
    flex: 1;
    h1,
    h2,
    p {
      margin: 0;
    }
    h1 {
      font-family: "Barlow Semi Condensed", sans-serif;
      font-size: 36px;
      margin-bottom: 10px;
    }
    h2 {
      font-family: "Barlow Semi Condensed", sans-serif;
      font-size: 20px;
      color: $grey;
      margin-bottom: 15px;
    }
    p {
      margin-bottom: 25px;
      max-width: 700px;
    }

    button {
      border: none;
      border-radius: 15px;
      height: 50px;
      width: 300px;
      background-color: $light-grey;
      font-family: "Kumbh Sans";
      font-size: 18px;
      color: $grey;
      transition: 0.3s;
      display: flex;
      justify-content: center;
      align-items: center;
      // TODO: change hover effect
      &:hover {
        background-color: $yellow;
        transition: 0.3s;
      }
      .wishlist-icon {
        height: 23px;
        width: 26px;
        margin-left: 10px;
      }
    }
  }
}

.main-information {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  p {
    text-align: start;
  }
}

.pagination {
  button {
    border: none;
    background-color: $grey;
    color: $light-grey;
    height: 30px;
    width: 30px;
    margin: 0 1px;
    transition: 0.3s;

    &:first-child {
      border-radius: 15px 0 0 15px;
    }
    &:last-child {
      border-radius: 0 15px 15px 0;
    }

    &:hover:not(.hidden-number) {
      background-color: $light-grey;
      color: $grey;
      transition: 0.3s;
    }
  }
}

.additional-info-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  .additional-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    p,
    div {
      flex: 1;
      width: 40%;
    }
    p {
      text-align: start;
      margin-right: 50px;
    }
    .image-container {
      //width: 500px;
      height: auto;
      height: auto;
      margin-left: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
