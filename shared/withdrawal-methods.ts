const WITHDRAWAL_METHOD_OVERRIDES: Readonly<Record<string, readonly string[]>> = {
  CI: ["Wave"],
  NE: ["Airtel Money", "NITA TRANSFERT"],
};

export function getWithdrawalMethods(
  countryCode: string,
  configuredMethods: readonly string[] = [],
): string[] {
  const country = countryCode.trim().toUpperCase();
  const overrides = WITHDRAWAL_METHOD_OVERRIDES[country];
  return [...(overrides ?? configuredMethods)];
}

export function isAllowedWithdrawalMethod(
  countryCode: string,
  paymentMethod: string,
  configuredMethods: readonly string[] = [],
): boolean {
  const method = paymentMethod.trim().toLocaleLowerCase();
  return getWithdrawalMethods(countryCode, configuredMethods)
    .some((allowedMethod) => allowedMethod.trim().toLocaleLowerCase() === method);
}