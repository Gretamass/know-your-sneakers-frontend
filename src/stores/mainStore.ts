import { defineStore } from "pinia";
import axios from "axios";

const useMainStore = defineStore("main", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      backendUrl: "http://localhost:8080",
      user: {},
      loadingStatus: false,
    };
  },
  actions: {},
  getters: {},
});

export const useArticlesStore = defineStore("articleId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      articlesPreview: [
        {
          id: 1,
          title: "Sportbačių dizaino evoliucija",
          preview:
            'Sportbačių dizainas vystėsi nuo paprastos drobės ir gumos iki aukštųjų technologijų medžiagų ir technologijų. Nuo pirmųjų "Converse All-Stars" iki dabartinių modelių, tokie prekių ženklai kaip "Nike" ir "Adidas" toliau diegia naujoves ir prisitaiko prie pramonės ir kultūros pokyčių.',
          mainImageUrl: "img.png",
          imageAlt: "",
          goTo: "",
        },
        {
          id: 2,
          title: "Elektroninės sportinių batelių prekybos platformų augimas",
          preview:
            'Elektroninės prekybos platformos, tokios kaip "StockX", "GOAT" ir "Sneaker District", padarė sportbačių pirkimą ir pardavimą prieinamesnį ir patogesnį. Jos saugiai ir skaidriai sujungia pirkėjus ir pardavėjus ir suteikia galimybę įsigyti riboto tiražo ir sunkiai randamus sportbačius.',
          mainImageUrl: "img_1.png",
          imageAlt: "",
          goTo: "",
        },
        {
          id: 3,
          title: "Ikoniškų sportbačių bendradarbiavimas",
          preview:
            'Ikoniški sportbačių bendradarbiavimo pavyzdžiai, tokie kaip Michaelo Jordano ir "Nike" arba Kanye Westo ir "Adidas", atliko svarbų vaidmenį sportbačių pramonėje. Jie rinkai suteikė naujų dizainų, technologijų ir kultūrinio poveikio, o sportbačių entuziastai dažnai yra labai paklausūs.',
          mainImageUrl: "img_2.png",
          imageAlt: "",
          goTo: "",
        },
      ],
      articles: [],
    };
  },
});

export const useSneakersStore = defineStore("sneakerId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      sneakersPreview: [],
      sneakers: [],
      pagination: {
        itemsPerPage: 9,
      },
    };
  },
  actions: {
    async fetchSneakersPreview() {
      const mainStore = useMainStore();

      const response = await axios.get(`${mainStore.backendUrl}/sneaker`);
      this.sneakers = response.data;
    },
    async fetchAvailableSneakersPreview() {
      const mainStore = useMainStore();

      const response = await axios.get(
        `${mainStore.backendUrl}/sneaker/availability`
      );
      this.sneakers = response.data;
    },
    async fetchSneakerInfo(sneakerId: any) {
      const mainStore = useMainStore();

      const response = await axios.get(
        `${mainStore.backendUrl}/sneaker/${sneakerId}`
      );
      return response.data;
    },
  },
});

export const useShopStore = defineStore("shopId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      shopsPreview: [
        {
          id: 1,
          name: "Kixart",
          hasInStock: true,
          price: 125,
          mainImageUrl: "img.png",
          imageALt: "",
          goTo: "",
        },
        {
          id: 2,
          name: "Sizeer",
          hasInStock: false,
          price: null,
          mainImageUrl: "img_1.png",
          imageALt: "",
          goTo: "",
        },
        {
          id: 3,
          name: "BALLZY",
          hasInStock: true,
          price: 127,
          mainImageUrl: "img_2.png",
          imageALt: "",
          goTo: "",
        },
        {
          id: 4,
          name: "SNKRS",
          hasInStock: true,
          price: 139,
          mainImageUrl: "img_3.png",
          imageALt: "",
          goTo: "",
        },
      ],
      shops: [],
    };
  },
});

export const useStore = defineStore("storeId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: 0,
      name: "Eduardo",
      isAdmin: true,
      items: [],
      hasChanged: true,
    };
  },
});
