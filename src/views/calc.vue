<script setup lang="ts">
import { ref, Ref, watch, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCurrencyStore } from "@/store/currency";
import { AVAILABLE_CURRENCIES } from "@/static/currency";
import { isNumber, isRequired } from "@/helpers/validations";
import { VForm } from "vuetify/components";

const { currencies, currentCurrency } = storeToRefs(useCurrencyStore());

const initValueCurrency = ref({ ...currentCurrency.value });
const compareValueCurrency = ref({ ...AVAILABLE_CURRENCIES[1] });

const getExchangeRate = (isInversed: boolean = false) => {
	const rateKey = isInversed
		? `${compareValueCurrency.value.value}-${initValueCurrency.value.value}`
		: `${initValueCurrency.value.value}-${compareValueCurrency.value.value}`;
	return Number(currencies.value[rateKey]) || 0;
};

// const getExchangeRate = () => {
//   const rateKey = `${initValueCurrency.value.value}-${compareValueCurrency.value.value}`;
//   return Number(currencies.value[rateKey]) || 0;
// };
//
// const getInverseExchangeRate = () => {
//   const rateKey = `${compareValueCurrency.value.value}-${initValueCurrency.value.value}`;
//   return Number(currencies.value[rateKey]) || 0;
// };

const initValue = ref(1) as Ref<number | string>;
const compareValue = ref(1) as Ref<number | string>;

const getParsedAndCheckedForNaN = (value: number) => {
  if (isNaN(value)) {
    return "0.00";
  }
  return value.toFixed(2);
};

const updateCompareValue = () => {
  const rate = getExchangeRate();
  const resultingValue = Number(Number(initValue.value) * rate);

  compareValue.value = getParsedAndCheckedForNaN(resultingValue);
};

const updateInitValue = () => {
  const rate = getInverseExchangeRate();
  const resultingValue = Number(Number(compareValue.value) * rate);

  initValue.value = getParsedAndCheckedForNaN(resultingValue);
};

const changeCalculationValues = async (source: "init" | "compare") => {
  if (source === "init") {
    updateCompareValue();
  } else {
    updateInitValue();
  }
};

watch(
  [initValueCurrency, compareValueCurrency],
  async () => {
    updateCompareValue();
  },
  { deep: true },
);

onMounted(() => {
  updateCompareValue();
});
</script>

<template>
  <div class="h-100 w-100 d-flex justify-center align-center">
    <v-card max-width="900px">
      <v-card-title class="bg-primary">
        <h3 class="text-h3">Калькулятор курса</h3>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-form ref="form" @submit.prevent validate-on="input">
          <v-row>
            <v-col cols="6">
              <v-text-field
                variant="solo-filled"
                :label="initValueCurrency.name"
                :rules="[isRequired(), isNumber()]"
                v-model="initValue"
                @update="changeCalculationValues('init')"
              />
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="initValueCurrency"
                variant="solo-filled"
                :items="AVAILABLE_CURRENCIES"
                return-object
                item-title="name"
                item-value="value"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                variant="solo-filled"
                :label="compareValueCurrency.name"
                :rules="[isRequired(), isNumber()]"
                v-model="compareValue"
                @update="changeCalculationValues('compare')"
              />
            </v-col>
            <v-col cols="6">
              <v-select
                v-model="compareValueCurrency"
                variant="solo-filled"
                :items="AVAILABLE_CURRENCIES"
                return-object
                item-title="name"
                item-value="value"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped />
