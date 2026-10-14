export const DEFAULT_DEPOSIT_AMOUNT_OPTIONS = [17000, 30000, 40000, 50000, 500000] as const;
export const DEFAULT_DEPOSIT_AMOUNT_OPTIONS_SETTING = DEFAULT_DEPOSIT_AMOUNT_OPTIONS.join(",");

export function isValidDepositAmountOptions(value: string): boolean {
  const entries = value.split(",").map((entry) => entry.trim());
  if (entries.length === 0 || entries.some((entry) => !/^\d+$/.test(entry))) return false;

  const amounts = entries.map(Number);
  return amounts.every((amount) => Number.isSafeInteger(amount) && amount > 0) &&
    new Set(amounts).size === amounts.length;
}

export function parseDepositAmountOptions(value?: string | null): number[] {
  if (value == null) return [...DEFAULT_DEPOSIT_AMOUNT_OPTIONS];
  if (!isValidDepositAmountOptions(value)) return [];
  return value.split(",").map((entry) => Number(entry.trim()));
}
