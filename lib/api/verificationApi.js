/**
 * Verification API functions
 * Handles center and membership verification requests
 */

import { apiClient } from './apiClient';

/**
 * Search for centers by name and code
 * @param {string} centerName - Name of the center
 * @param {string} centerCode - Code of the center
 * @returns {Promise<Object>} Center search results
 */
export const searchCenters = async (centerName, centerCode) => {
  try {
    console.log('searchCenters called with:', { centerName, centerCode });
    const params = new URLSearchParams();
    if (centerName) params.append('centerName', centerName);
    if (centerCode) params.append('centerCode', centerCode);

    const endpoint = `/api/admin/centers/search?${params.toString()}`;
    console.log('Making request to:', endpoint);
    const response = await apiClient.get(endpoint);
    console.log('searchCenters response:', response);
    
    return response;
  } catch (error) {
    console.error('Error searching centers:', error);
    throw error;
  }
};

/**
 * Search for memberships by name and number
 * @param {string} membershipName - Name of the member
 * @param {string} membershipNumber - Membership number
 * @returns {Promise<Object>} Membership search results
 */
export const searchMemberships = async (membershipName, membershipNumber) => {
  try {
    console.log('searchMemberships called with:', { membershipName, membershipNumber });
    const params = new URLSearchParams();
    if (membershipName) params.append('membershipName', membershipName);
    if (membershipNumber) params.append('membershipNumber', membershipNumber);

    const endpoint = `/api/admin/memberships/search?${params.toString()}`;
    console.log('Making request to:', endpoint);
    const response = await apiClient.get(endpoint);
    console.log('searchMemberships response:', response);
    
    return response;
  } catch (error) {
    console.error('Error searching memberships:', error);
    throw error;
  }
};

/**
 * Format date for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
export const formatDate = (dateString) => {
  if (!dateString) return 'N/A';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  } catch (error) {
    return 'Invalid Date';
  }
};

/**
 * Calculate days until expiry
 * @param {string} expiryDate - ISO date string
 * @returns {number} Days until expiry
 */
export const calculateDaysUntilExpiry = (expiryDate) => {
  if (!expiryDate) return 0;
  
  try {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  } catch (error) {
    return 0;
  }
};