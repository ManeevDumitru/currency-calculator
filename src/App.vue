<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const routeLayout = computed(() => route.meta.layout || "default");
</script>

<template>
	<v-app theme="dark">
		<component :is="route.meta.layoutComponent" />
	</v-app>
</template>

<style scoped>
</style>
