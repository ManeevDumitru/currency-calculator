<script setup lang="ts">
import { useRoute } from "vue-router";
import { useCurrencyStore } from "@/store/currency";

const route = useRoute();
const { fetchCurrencies } = useCurrencyStore();

(async () => {
  await fetchCurrencies();
})();
</script>

<template>
    <Suspense>
      <v-app theme="dark">
        <component :is="route.meta.layoutComponent" />
      </v-app>
    </Suspense>
</template>

<style scoped></style>
