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
