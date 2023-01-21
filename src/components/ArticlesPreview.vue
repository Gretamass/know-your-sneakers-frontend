<template>
  <!--TODO: learn how to hide half of the illustrtion behind the screen-->
  <div class="illustrations" v-if="false">
    <div class="yellow circle"></div>
    <div class="grey circle"></div>
  </div>
  <div class="articles-container">
    <div class="heading-container"><h1>Tinklaraščiai</h1></div>
    <div class="article-preview-container">
      <div
        v-for="article in articlesPreview"
        :key="article.id"
        class="article-preview"
      >
        <img :src="getImgUrl(article.mainImageUrl)" />
        <h2>{{ article.title }}</h2>
        <h3>{{ article.preview }}</h3>
        <button class="secondary-button" :href="article.goTo">
          Skaityti daugiau
        </button>
      </div>
    </div>
    <button class="primary-button">Sužinoti daugiau</button>
  </div>
</template>

<script>
import { useArticlesStore } from "@/stores/mainStore";
export default {
  name: "ArticlesPreview",
  setup() {
    const { articlesPreview } = useArticlesStore();
    return {
      articlesPreview,
    };
  },
  data() {
    return {};
  },
  methods: {
    getImgUrl(pic) {
      return require("../assets/articles/" + pic);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_mixins.scss";

.secondary-button {
  @include secondary-button;
}
.primary-button {
  @include primary-button;
}
.heading-container {
  @include heading-container;
}

.illustrations {
  @include flex-center-column;
  align-items: flex-end;
  position: relative;
  width: 100vw;
  margin-top: 50px;
  z-index: 1;
  .yellow.circle {
    @include circle;
    height: 167px;
    width: 167px;
    position: absolute;
    right: -45px;
    z-index: 2;
  }
  .grey.circle {
    @include circle;
    height: 400px;
    width: 400px;
    margin-left: 100px;
    position: absolute;
    right: -190px;
    top: 0px;
  }
}

.articles-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 100px;
  z-index: 2;

  .article-preview-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 1550px;
    margin-top: 40px;
    font-family: "Kumbh Sans";
    .article-preview {
      flex: 1;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 10px;
      img {
        max-width: 450px;
        height: 250px;
        margin-bottom: 35px;
      }
      h2 {
        height: 36px;
      }
      h3 {
        font-weight: 400;
      }
    }
  }
}
</style>
