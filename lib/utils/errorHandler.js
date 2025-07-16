/**
 * Error Handler Utilities
 * Centralized error handling and user-friendly error messages
 */

import { message } from 'antd';

export const ERROR_TYPES = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  SERVER_ERROR: 'SERVER_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  NOT_FOUND_ERROR: 'NOT_FOUND_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};

export const getErrorType = (error) => {
  if (!error) return ERROR_TYPES.UNKNOWN_ERROR;
  
  if (error.message?.includes('fetch')) {
    return ERROR_TYPES.NETWORK_ERROR;
  }
  
  if (error.status) {
    switch (error.status) {
      case 400:
        return ERROR_TYPES.VALIDATION_ERROR;
      case 401:
        return ERROR_TYPES.AUTHENTICATION_ERROR;
      case 403:
        return ERROR_TYPES.AUTHORIZATION_ERROR;
      case 404:
        return ERROR_TYPES.NOT_FOUND_ERROR;
      case 500:
      case 502:
      case 503:
        return ERROR_TYPES.SERVER_ERROR;
      default:
        return ERROR_TYPES.UNKNOWN_ERROR;
    }
  }
  
  return ERROR_TYPES.UNKNOWN_ERROR;
};

export const getErrorMessage = (error, context = '') => {
  const errorType = getErrorType(error);
  
  const errorMessages = {
    [ERROR_TYPES.NETWORK_ERROR]: 'Network connection failed. Please check your internet connection and try again.',
    [ERROR_TYPES.VALIDATION_ERROR]: error.message || 'Please check your input and try again.',
    [ERROR_TYPES.SERVER_ERROR]: 'Server is temporarily unavailable. Please try again later.',
    [ERROR_TYPES.AUTHENTICATION_ERROR]: 'Authentication failed. Please login again.',
    [ERROR_TYPES.AUTHORIZATION_ERROR]: 'You do not have permission to perform this action.',
    [ERROR_TYPES.NOT_FOUND_ERROR]: 'The requested resource was not found.',
    [ERROR_TYPES.UNKNOWN_ERROR]: 'An unexpected error occurred. Please try again.'
  };
  
  let baseMessage = errorMessages[errorType];
  
  if (context) {
    baseMessage = `${context}: ${baseMessage}`;
  }
  
  return baseMessage;
};

export const handleApiError = (error, context = '', showMessage = true) => {
  const errorMessage = getErrorMessage(error, context);
  
  if (showMessage) {
    message.error(errorMessage);
  }
  
  // Log error for debugging
  console.error(`API Error [${context}]:`, error);
  
  return {
    type: getErrorType(error),
    message: errorMessage,
    originalError: error
  };
};

export const createErrorResponse = (error, context = '') => {
  const handledError = handleApiError(error, context, false);
  
  return {
    success: false,
    error: handledError.message,
    errorType: handledError.type,
    originalError: error
  };
};