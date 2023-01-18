import { defineStore } from "pinia";

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
      availableSneakersPreview: [
        {
          id: 1,
          name: "Air Jordan 1",
          model: "Air Jordan 1",
          brand: "Nike",
          mainImageUrl: "img.png",
          price: 125,
          imageAlt: "",
          availability: [
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
          goTo: "",
        },
        {
          id: 2,
          name: "Adidas Yeezy Boost",
          model: "Adidas Yeezy Boost",
          brand: "Adidas",
          mainImageUrl: "img_1.png",
          price: 125,
          imageAlt: "",
          availability: [
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
              hasInStock: false,
              price: null,
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
          goTo: "",
        },
        {
          id: 3,
          name: "Air Force 1",
          model: "Air Force 1",
          brand: "Nike",
          mainImageUrl: "img_2.png",
          price: 125,
          imageAlt: "",
          availability: [
            {
              id: 1,
              name: "Kixart",
              hasInStock: false,
              price: null,
              mainImageUrl: "img.png",
              imageALt: "",
              goTo: "",
            },
            {
              id: 2,
              name: "Sizeer",
              hasInStock: true,
              price: 127,
              mainImageUrl: "img_1.png",
              imageALt: "",
              goTo: "",
            },
            {
              id: 3,
              name: "BALLZY",
              hasInStock: false,
              price: null,
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
          goTo: "",
        },
      ],
    };
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
