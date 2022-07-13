export const formatPriceWithCurrencyName = (price: number, currencyName: string) => `${price}${currencyName}`;
export const formatPriceWithoutCurrencyName = (price: string) => price.replace(/[a-zа-яё]/gi, '');
