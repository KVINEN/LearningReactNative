import dayjs from "dayjs";

export const formatCurrency = (value: number, currency: string = "USD") => {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch (error) {
    const formattedValue = value.toFixed(2);
    return `${{ formattedValue }}`;
  }
};

export const formatSubscriptionDateTime = (value?: string): string => {
  if (!value) return "Not perioded";
  const parsedDate = dayjs(value);
  return parsedDate.isValid()
    ? parsedDate.format("DD/MM/YYYY")
    : "Not provided";
};

export const formaStatusLabel = (value?: string): string => {
  if (!value) return "Unknown";
  return value.charAt(0).toUpperCase() + value.slice(1);
};
