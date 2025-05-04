export const formatToCurrency = (value?: number | null) => {
  if (!value) return null;
  //like this $135M and so
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "USD",
    notation: "compact",
  }).format(value);
};
