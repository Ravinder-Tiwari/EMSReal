import { VALIDATION, ERROR_MESSAGES } from '../constants/app';

/**
 * Validation Utilities
 * Common validation functions
 */

/**
 * Validate email format
 */
export const isValidEmail = (email) => {
  return VALIDATION.EMAIL_PATTERN.test(email);
};

/**
 * Validate password strength
 */
export const isValidPassword = (password) => {
  if (!password) return false;
  if (password.length < VALIDATION.MIN_PASSWORD_LENGTH) {
    return false;
  }
  if (password.length > VALIDATION.MAX_PASSWORD_LENGTH) {
    return false;
  }
  return true;
};

/**
 * Validate password confirmation
 */
export const passwordsMatch = (password1, password2) => {
  return password1 === password2;
};

/**
 * Validate URL format
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate phone number
 */
export const isValidPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length >= 10 && cleaned.length <= 15;
};

/**
 * Validate number
 */
export const isValidNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

/**
 * Validate date
 */
export const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date);
};

/**
 * Validate required field
 */
export const isRequired = (value) => {
  if (typeof value === 'string') {
    return value.trim().length > 0;
  }
  return value !== null && value !== undefined;
};

/**
 * Validate minimum length
 */
export const hasMinLength = (value, min) => {
  return value && value.length >= min;
};

/**
 * Validate maximum length
 */
export const hasMaxLength = (value, max) => {
  return !value || value.length <= max;
};

/**
 * Get validation error message
 */
export const getErrorMessage = (field, type) => {
  const errorMap = {
    email: ERROR_MESSAGES.INVALID_EMAIL,
    password: ERROR_MESSAGES.WEAK_PASSWORD,
    required: `${field} is required`,
    minLength: `${field} is too short`,
    maxLength: `${field} is too long`,
    pattern: `${field} format is invalid`,
  };

  return errorMap[type] || 'Invalid input';
};
