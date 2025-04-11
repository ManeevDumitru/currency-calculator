<script setup lang="ts">
import NavBar from "@/components/navigation/NavBar.vue";
import { useGlobalStore } from "@/store/global";
import { storeToRefs } from "pinia";

const { loading } = storeToRefs(useGlobalStore());
</script>

<template>
  <v-main>
    <NavBar />

    <template v-if="!loading">
	    <router-view />
    </template>
	  <div v-else class="text-center">
		  Loading
	  </div>
  </v-main>
</template>

<style scoped></style>
