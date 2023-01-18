import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useAlertsStore = defineStore("alerts", {
  // other options...
});

export const useMainStore = defineStore("counter", {
  state: () => ({ count: 0, name: "Eduardo" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
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
      sneakersPreview: [
        {
          id: 1,
          model: "Air Jordan 1",
          brand: "Nike",
          mainImageUrl: "img.png",
          imageAlt: "",
          goTo: "",
        },
        {
          id: 2,
          model: "Adidas Yeezy Boost",
          brand: "Adidas",
          mainImageUrl: "img_1.png",
          imageAlt: "",
          goTo: "",
        },
        {
          id: 3,
          model: "Air Force 1",
          brand: "Nike",
          mainImageUrl: "img_2.png",
          imageAlt: "",
          goTo: "",
        },
        {
          id: 4,
          model: "Air Max 90",
          brand: "Nike",
          mainImageUrl: "img_2.png",
          imageAlt: "",
          goTo: "",
        },
        {
          id: 5,
          model: "Adidas Superstar",
          brand: "Adidas",
          mainImageUrl: "img.png",
          imageAlt: "",
          goTo: "",
        },
        {
          id: 6,
          model: "Puma CLyde",
          brand: "Puma",
          mainImageUrl: "img_1.png",
          imageAlt: "",
          goTo: "",
        },
      ],
      sneakers: [],
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

interface State {
  userList: UserInfo[];
  user: UserInfo | null;
}

// export const useUserStore = defineStore("user", {
//   state: (): State => {
//     return {
//       userList: [],
//       user: null,
//     };
//   },
// });

interface UserInfo {
  name: string;
  age: number;
}

interface State {
  count: number;
}

// export const store = defineStore("myStore", {
//   state: (): State => ({
//     count: 0,
//   }),
//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//   },
// });
