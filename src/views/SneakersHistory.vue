<template>
  <div class="sneakers-history-page">
    <div class="sneakers-history-container">
      <div class="heading-container"><h1>Sportbačių istorijos</h1></div>
      <div class="sneaker-brands-container">
        <!--TODO: maybe use v-for and use dynamic brands in the future-->
        <button
          @click="selectFilter('Air Jordan')"
          :class="{ selected: brandFilter === 'Air Jordan' }"
        >
          Air Jordan
        </button>
        <button
          @click="selectFilter('Nike')"
          :class="{ selected: brandFilter === 'Nike' }"
        >
          Nike
        </button>
        <button
          @click="selectFilter('Adidas')"
          :class="{ selected: brandFilter === 'Adidas' }"
        >
          Adidas
        </button>
        <button
          @click="selectFilter('Puma')"
          :class="{ selected: brandFilter === 'Puma' }"
        >
          Puma
        </button>
      </div>
      <div class="sneakers-preview-container">
        <div
          v-for="sneaker in paginatedSneakers"
          :key="sneaker.id"
          class="sneaker-preview"
          @click="selectSneaker(sneaker.goTo)"
        >
          <div class="image-container">
            <img :src="getImgUrl(sneaker.mainImageUrl)" />
          </div>
          <h2>{{ sneaker.model }}</h2>
          <h3>{{ sneaker.brand }}</h3>
        </div>
      </div>
      <div class="pagination">
        <button @click="previousPage()">Previous Page</button>
        <button @click="nextPage()">Next Page</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useSneakersStore } from "@/stores/mainStore";
import router, { Routes } from "@/router";

export default {
  name: "SneakersHistory",
  data() {
    return {
      currentPage: 1,
      brandFilter: "",
    };
  },
  setup() {
    const { sneakers, pagination } = useSneakersStore();
    return {
      sneakers,
      pagination,
    };
  },
  computed: {
    paginatedSneakers() {
      const start = (this.currentPage - 1) * this.pagination.itemsPerPage;
      const end = start + this.pagination.itemsPerPage;
      let filteredSneakers = this.sneakers;

      if (this.brandFilter) {
        filteredSneakers = this.sneakers.filter((sneaker) => {
          return sneaker.brand === this.brandFilter;
        });
      }
      return filteredSneakers.slice(start, end);
    },
  },
  methods: {
    getImgUrl(pic) {
      return "../src/assets/sneakers/" + pic;
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.scrollToTop();
      }
    },
    nextPage() {
      if (
        this.currentPage <
        Math.ceil(this.sneakers.length / this.pagination.itemsPerPage)
      ) {
        this.currentPage++;
        this.scrollToTop();
      }
    },
    selectFilter(brand) {
      if (this.brandFilter === brand) {
        this.brandFilter = "";
      } else {
        this.brandFilter = brand;
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    selectSneaker(sneakerName) {
      router.push({
        name: Routes.SINGLE_SNEAKER_HISTORY,
        params: { sneakerName },
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_mixins.scss";

.heading-container {
  @include heading-container;
}

.sneakers-history-page {
  margin: 100px 0;
  max-width: 1550px;
  width: 100%;
}

.sneakers-history-container {
  @include flex-center-column;
  align-items: center;
  max-width: 1550px;
  margin-bottom: 100px;

  .sneaker-brands-container {
    max-width: 1250px;
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
        // TODO: make this fixed value to not move other images on hover
        width: 450px;
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

  .pagination {
    display: flex;
    margin-top: 50px;
  }
}
</style>
