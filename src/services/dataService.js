import apiService from './apiService';

/**
 * Data Service
 * Handles data-related API calls
 */
const dataService = {
  /**
   * Fetch all items
   */
  getAll: async (endpoint) => {
    try {
      return await apiService.get(endpoint);
    } catch (error) {
      throw new Error(`Failed to fetch items: ${error.message}`);
    }
  },

  /**
   * Fetch single item by ID
   */
  getById: async (endpoint, id) => {
    try {
      return await apiService.get(`${endpoint}/${id}`);
    } catch (error) {
      throw new Error(`Failed to fetch item: ${error.message}`);
    }
  },

  /**
   * Create new item
   */
  create: async (endpoint, data) => {
    try {
      return await apiService.post(endpoint, data);
    } catch (error) {
      throw new Error(`Failed to create item: ${error.message}`);
    }
  },

  /**
   * Update item
   */
  update: async (endpoint, id, data) => {
    try {
      return await apiService.put(`${endpoint}/${id}`, data);
    } catch (error) {
      throw new Error(`Failed to update item: ${error.message}`);
    }
  },

  /**
   * Delete item
   */
  delete: async (endpoint, id) => {
    try {
      return await apiService.delete(`${endpoint}/${id}`);
    } catch (error) {
      throw new Error(`Failed to delete item: ${error.message}`);
    }
  },

  /**
   * Search items
   */
  search: async (endpoint, query) => {
    try {
      return await apiService.get(`${endpoint}?search=${encodeURIComponent(query)}`);
    } catch (error) {
      throw new Error(`Search failed: ${error.message}`);
    }
  },
};

export default dataService;
