export const formatDistanceWithName = (price: number, name: string) => `${price}${name}`;
export const formatDistanceWithoutName = (price: string) => price.replace(/[a-zа-яё]/gi, '');
