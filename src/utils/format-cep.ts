export const formatCep = (value: string) => {
  const numericValue = value.replace(/\D/g, "");

  if (numericValue.length <= 2) return numericValue;
  if (numericValue.length <= 5)
    return `${numericValue.slice(0, 2)}.${numericValue.slice(2)}`;
  return `${numericValue.slice(0, 2)}.${numericValue.slice(
    2,
    5
  )}-${numericValue.slice(5, 8)}`;
};
