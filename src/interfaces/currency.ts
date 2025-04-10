export enum CurrencyEnum {
	RUB = "rub",
	USD = "usd",
	EUR = "eur",
}
export interface CurrencyInterface {
	name: string;
	value: CurrencyEnum;
	symbol: string;
}