/**
 * Formatting Utilities
 * Format data for display
 */

/**
 * Format date to readable string
 */
export const formatDate = (date, format = 'MM/DD/YYYY') => {
  if (!date) return '';
  
  const d = new Date(date);
  if (isNaN(d)) return '';

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  const formats = {
    'MM/DD/YYYY': `${month}/${day}/${year}`,
    'DD/MM/YYYY': `${day}/${month}/${year}`,
    'YYYY-MM-DD': `${year}-${month}-${day}`,
    'DD MMM YYYY': `${day} ${new Intl.DateTimeFormat('en', { month: 'short' }).format(d)} ${year}`,
    'MMM DD, YYYY': `${new Intl.DateTimeFormat('en', { month: 'short' }).format(d)} ${day}, ${year}`,
    'YYYY-MM-DD HH:mm:ss': `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`,
    'HH:mm': `${hours}:${minutes}`,
  };

  return formats[format] || formats['MM/DD/YYYY'];
};

/**
 * Format time difference (e.g., "2 hours ago")
 */
export const formatTimeAgo = (date) => {
  if (!date) return '';

  const d = new Date(date);
  const now = new Date();
  const seconds = Math.floor((now - d) / 1000);

  const intervals = {
    year: 31536000,
    month: 2592000,
    week: 604800,
    day: 86400,
    hour: 3600,
    minute: 60,
  };

  for (const [name, secondsInInterval] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / secondsInInterval);
    if (interval >= 1) {
      return `${interval} ${name}${interval !== 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
};

/**
 * Format currency
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  if (amount === null || amount === undefined) return '';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

/**
 * Format number with commas
 */
export const formatNumber = (number, decimals = 0) => {
  if (number === null || number === undefined) return '';

  return parseFloat(number).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/**
 * Format percentage
 */
export const formatPercent = (value, decimals = 0) => {
  if (value === null || value === undefined) return '';

  return `${parseFloat(value).toFixed(decimals)}%`;
};

/**
 * Format bytes to human readable
 */
export const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return '0 Bytes';
  if (!bytes) return '';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
};

/**
 * Format duration in seconds to readable format
 */
export const formatDuration = (seconds) => {
  if (!seconds) return '0s';

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  const parts = [];
  if (hours > 0) parts.push(`${hours}h`);
  if (minutes > 0) parts.push(`${minutes}m`);
  if (secs > 0) parts.push(`${secs}s`);

  return parts.join(' ');
};
