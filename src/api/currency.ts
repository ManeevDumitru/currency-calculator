import { useApiFetch } from "@/composables/useApiFetch";
import { AVAILABLE_CURRENCIES } from "@/static/currency";

export const CurrencyAPI = {
	async fetchCurrencies() {
		const { data } = await useApiFetch().get(`/currency`);

		for (const item of AVAILABLE_CURRENCIES) {
			data[`${item.value}-${item.value}`] = 1;
		}

		return data;
	}
}