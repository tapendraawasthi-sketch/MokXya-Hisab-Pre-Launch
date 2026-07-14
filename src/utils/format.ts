/**
 * Formats a number to a consistent NPR currency string.
 * Uses tabular numerals when possible via CSS class elsewhere,
 * but this handles the text formatting.
 */
export const formatNPR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'NPR',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(amount).replace('NPR', 'NPR '); // Ensures a space between currency and amount if the browser suppresses it
};
