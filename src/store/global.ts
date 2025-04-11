import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
	state: () => ({
		loading: true
	}),
	// getters: {
	// },
	actions: {
		setLoading(value: boolean) {
			this.loading = value;
		},
	},
});
