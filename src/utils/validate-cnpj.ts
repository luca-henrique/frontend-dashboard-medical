export const validateCnpj = (cnpj: string): boolean => {
  if (/^(\d)\1+$/.test(cnpj)) return false;

  const weightsFirst = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const weightsSecond = [6, ...weightsFirst];

  const calcDigit = (cnpj: string, weights: number[]) =>
    (11 -
      (cnpj
        .split("")
        .slice(0, weights.length)
        .reduce((sum, num, index) => sum + parseInt(num) * weights[index], 0) %
        11)) %
    10;

  return (
    calcDigit(cnpj, weightsFirst) === parseInt(cnpj[12]) &&
    calcDigit(cnpj, weightsSecond) === parseInt(cnpj[13])
  );
};
