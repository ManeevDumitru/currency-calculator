<script setup lang="ts">
import NavBar from "@/components/navigation/NavBar.vue";
import { storeToRefs } from "pinia";
import {useCurrencyStore} from "@/store/currency";

const { calculatorLoading } = storeToRefs(useCurrencyStore());
</script>

<template>
  <v-main>
    <NavBar />

    <template v-if="!calculatorLoading">
	    <router-view />
    </template>
	  <div v-else class="text-center">
		  Loading
	  </div>
  </v-main>
</template>

<style scoped></style>
