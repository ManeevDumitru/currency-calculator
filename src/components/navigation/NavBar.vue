<script setup lang="ts">
import { AVAILABLE_CURRENCIES } from "@/static/currency";
import { useCurrencyStore } from "@/store/currency";
import { storeToRefs } from "pinia";

const { currentCurrency } = storeToRefs(useCurrencyStore());
</script>

<template>
  <v-app-bar app class="d-flex items-center px-2">
	  <router-link to="/">
		  <v-btn color="primary" variant="elevated" class="mr-2"> Домой </v-btn>
	  </router-link>
	  <router-link to="/calc">
		  <v-btn color="primary" variant="elevated" class="mr-2"> Калькулятор </v-btn>
	  </router-link>
    <v-spacer />

    <v-select
      v-model="currentCurrency"
      :items="AVAILABLE_CURRENCIES"
      item-title="name"
      item-value="value"
      density="compact"
      hide-details
      variant="solo-filled"
      max-width="120px"
      class="custom-select text-center"
    />
  </v-app-bar>
</template>

<style scoped lang="scss">
:deep(.custom-select) {
	.v-field {
		
		.v-field__input {
			justify-content: center;
		}
	}
}
</style>
