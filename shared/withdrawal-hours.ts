export const WITHDRAWAL_TIME_ZONE = "Africa/Kinshasa";

export function getWithdrawalHour(date: Date = new Date()): number {
  const hour = new Intl.DateTimeFormat("en-GB", {
    timeZone: WITHDRAWAL_TIME_ZONE,
    hour: "2-digit",
    hourCycle: "h23",
  }).format(date);

  return Number(hour);
}

export function isWithdrawalTimeOpen(date: Date, startHour: number, endHour: number): boolean {
  const currentHour = getWithdrawalHour(date);
  return Number.isInteger(startHour)
    && Number.isInteger(endHour)
    && startHour >= 0
    && endHour <= 24
    && startHour < endHour
    && currentHour >= startHour
    && currentHour < endHour;
}
