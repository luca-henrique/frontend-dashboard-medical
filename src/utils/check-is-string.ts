export const checkIsString = (message: unknown): unknown => {
  return typeof message === "string" ? message : "";
};
