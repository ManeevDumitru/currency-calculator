<script setup lang="ts">
import { AVAILABLE_CURRENCIES } from "@/static/currency";
import { useCurrencyStore } from "@/store/currency";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const { currentCurrency } = storeToRefs(useCurrencyStore());

watch(
  currentCurrency,
  (val) => {
    localStorage.setItem("currency", JSON.stringify(val));
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <v-app-bar app class="d-flex items-center px-2">
    <router-link to="/">
      <v-btn color="primary" variant="elevated" class="mr-2"> Домой </v-btn>
    </router-link>
    <v-btn color="primary" variant="elevated" to="/calc" class="mr-2">
      Калькулятор
    </v-btn>

    <v-spacer />

    <v-select
      v-model="currentCurrency"
      :items="AVAILABLE_CURRENCIES"
      item-title="name"
      item-value="value"
      density="compact"
      return-object
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
