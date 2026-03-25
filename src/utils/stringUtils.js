/**
 * String Utilities
 * Common string manipulation functions
 */

/**
 * Capitalize first letter of string
 */
export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

/**
 * Capitalize all words in string
 */
export const capitalizeWords = (str) => {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => capitalize(word))
    .join(' ');
};

/**
 * Convert string to kebab case
 */
export const toKebabCase = (str) => {
  if (!str) return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
};

/**
 * Convert string to camel case
 */
export const toCamelCase = (str) => {
  if (!str) return '';
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/[\s_-]+/g, '');
};

/**
 * Truncate string with ellipsis
 */
export const truncate = (str, length = 100, suffix = '...') => {
  if (!str || str.length <= length) return str;
  return str.slice(0, length - suffix.length) + suffix;
};

/**
 * Remove special characters
 */
export const removeSpecialChars = (str) => {
  if (!str) return '';
  return str.replace(/[^a-zA-Z0-9\s]/g, '');
};

/**
 * Check if string is empty
 */
export const isEmpty = (str) => {
  return !str || str.trim().length === 0;
};

/**
 * Format phone number
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  return phone;
};
