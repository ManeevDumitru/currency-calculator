<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCurrencyStore } from "@/store/currency";
import { AVAILABLE_CURRENCIES } from "@/static/currency";

const { currencies, currentCurrency } = storeToRefs(useCurrencyStore());

const getParsedCurrency = (currency: string) => {
  const currencyByCode =
    currencies.value[`${currentCurrency.value.value}-${currency}`];

  return Number(currencyByCode);
};
</script>

<template>
  <div class="h-100 w-100 d-flex justify-center align-center">
    <v-card max-width="900px">
      <v-card-title class="bg-primary">
        <h3 class="text-h3">
          Курс валют к
          <span class="text-uppercase">
            {{ currentCurrency.name }}
          </span>
        </h3>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <template v-for="(item, index) in AVAILABLE_CURRENCIES" :key="index">
          <div v-if="item.value !== currentCurrency.value" class="text-h6">
            1 <span class="text-uppercase"> {{ item.name }}</span>
            =
            {{ getParsedCurrency(item.value) }}
            <span class="text-uppercase">
              {{ currentCurrency.value }}
            </span>
          </div>
        </template>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped />
