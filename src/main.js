import "./assets/main.css";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import { createApp } from "vue";
import { createPinia } from "pinia";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import App from "./App.vue";

const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
	icons: {
		defaultSet: 'mdi',
	},
});

createApp(App).use(vuetify).use(pinia).mount("#app");
