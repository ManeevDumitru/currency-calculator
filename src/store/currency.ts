import { defineStore } from "pinia";
import { CurrencyEnum } from "@/enums/currency";
import { useApiFetch } from "@/composables/useApiFetch";
import { AVAILABLE_CURRENCIES } from "@/static/currency";
import { CurrencyInterface } from "@/types/currency";
import { useGlobalStore } from "@/store/global";

export const useCurrencyStore = defineStore("currency", {
  state: () => ({
    currentCurrency:
      JSON.parse(localStorage.getItem("currency")!) ||
      (AVAILABLE_CURRENCIES[0] as CurrencyInterface),

    currencies: [] as Record<string, any>,
  }),
  actions: {
    setCurrentCurrency(value: CurrencyEnum) {
      this.currentCurrency = value;
    },
    async fetchCurrencies() {
      const { data } = await useApiFetch().get(`/currency`);
      const { setLoading } = useGlobalStore();

      for (const item of AVAILABLE_CURRENCIES) {
        data[`${item.value}-${item.value}`] = 1;
      }

      this.currencies = data;
      setLoading(false);
    },
  },
});
