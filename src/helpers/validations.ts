export const isRequired = () => {
	return (v: string) => {
		return !!v || v.length > 0 || "Не оставляйте поле пустовать"
	};
}

export const isNumber = () => {
	return (v: string | number) => {
		return /^[0-9.]+$/.test(String(v)) || "Только числа разрешены";
	};
};