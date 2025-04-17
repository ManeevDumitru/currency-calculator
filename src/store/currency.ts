import {defineStore} from "pinia";
import { AVAILABLE_CURRENCIES } from "@/static/currency";
import { CurrencyInterface } from "@/types/currency";
import { CurrencyAPI } from "@/api/currency";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    currentCurrency:
      JSON.parse(localStorage.getItem("currency")!) ||
      (AVAILABLE_CURRENCIES[0] as CurrencyInterface),

    currencies: [] as Record<string, any>,
    calculatorLoading: true as boolean,
  }),
  actions: {
    async fetchCurrencies() {
      this.currencies = await CurrencyAPI.fetchCurrencies();
      this.calculatorLoading = false;
    },
  },
});
