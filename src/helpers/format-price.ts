export const formatPriceWithCurrencyName = (price: number, currencyName: string) => `${price}${currencyName}`;
export const formatPriceWithoutCurrencyName = (price: string) => Number(price.replace(/[a-zа-яё]/gi, ''));
