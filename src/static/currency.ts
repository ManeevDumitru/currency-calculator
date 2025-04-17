import { CurrencyInterface } from "@/types/currency";
import { CurrencyEnum } from "@/enums/currency";

export const AVAILABLE_CURRENCIES: CurrencyInterface[] = [
  {
    name: "RUB",
    value: CurrencyEnum.RUB,
    symbol: "₽",
  },
  {
    name: "USD",
    value: CurrencyEnum.USD,
    symbol: "$",
  },
  {
    name: "EUR",
    value: CurrencyEnum.EUR,
    symbol: "€",
  },
];
