import { defineStore } from "pinia";
import { CurrencyEnum } from "@/interfaces/currency";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    currentCurrency: "rub",
  }),
  // getters: {
  // },
  actions: {
    setCurrentCurrency(value: CurrencyEnum) {
      this.currentCurrency = value;
    },
  },
});
