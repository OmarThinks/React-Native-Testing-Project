type GoldPriceResponseType = {
  currency: string;
  currencySymbol: string;
  exchangeRate: number;
  name: string;
  price: number;
  symbol: string;
  updatedAt: string;
  updatedAtReadable: string;
};

const getGoldPriceQueryFn = async () => {
  const response = await fetch("https://api.gold-api.com/price/XAU/USD");
  const data = (await response.json()) as GoldPriceResponseType;
  return data;
};

export { getGoldPriceQueryFn };
export type { GoldPriceResponseType };
