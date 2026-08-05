export function money(cents: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

export function weight(grams: number) {
  const lb = grams / 453.592;
  return `${lb.toFixed(1)} lb (${(grams / 1000).toFixed(1)} kg)`;
}
