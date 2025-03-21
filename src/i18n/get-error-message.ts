import type { ParseKeys } from "i18next";
import i18n from ".";

export function getErrorMessage(code: string) {
  const _code = (
    code.includes("common.errors") ? code : `common.errors.${code}`
  ) as ParseKeys;
  const codeMessage = i18n.t(_code);
  const hasField = _code !== codeMessage;
  return hasField ? codeMessage : i18n.t("common.errors.INTERNAL_ERROR");
}
