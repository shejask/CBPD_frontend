/**
 * API Client Configuration
 * Centralized HTTP client for all API requests
 */

import { createErrorResponse } from "../utils/errorHandler";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

class ApiClient {
  constructor(baseURL = API_BASE_URL) {
    this.baseURL = baseURL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;

    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      credentials: "include", // This ensures cookies are sent with requests
      mode: "cors", // Enable CORS
      ...options,
    };

    // Handle FormData differently (don't stringify and don't set Content-Type)
    if (config.body instanceof FormData) {
      // Remove Content-Type header for FormData - browser will set it with boundary
      delete config.headers["Content-Type"];
    } else if (config.body && typeof config.body === "object") {
      config.body = JSON.stringify(config.body);
    }

    try {
      console.log(`Making ${config.method || 'GET'} request to:`, url);
      console.log('Request config:', {
        headers: config.headers,
        credentials: config.credentials,
        mode: config.mode
      });

      const response = await fetch(url, config);

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.log('Error response data:', errorData);
        
        const error = new Error(
          errorData.message || errorData.error || `HTTP error! status: ${response.status}`
        );
        error.status = response.status;
        error.statusText = response.statusText;
        error.data = errorData;
        throw error;
      }

      const contentType = response.headers.get("content-type");
      
      // Handle different response types
      if (contentType && contentType.includes("application/json")) {
        return await response.json();
      } else if (contentType && (
        contentType.includes("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") ||
        contentType.includes("application/vnd.ms-excel") ||
        contentType.includes("text/csv")
      )) {
        // Handle Excel/CSV downloads
        return await response.blob();
      }

      return await response.text();
    } catch (error) {
      // Enhanced error logging
      console.error(`API Request failed [${config.method || "GET"} ${url}]:`, {
        error: error.message,
        status: error.status,
        statusText: error.statusText,
        data: error.data
      });

      // Re-throw with additional context
      error.url = url;
      error.method = config.method || "GET";
      throw error;
    }
  }

  get(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: "GET" });
  }

  post(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "POST",
      body: data,
    });
  }

  put(endpoint, data, options = {}) {
    return this.request(endpoint, {
      ...options,
      method: "PUT",
      body: data,
    });
  }

  delete(endpoint, options = {}) {
    return this.request(endpoint, { ...options, method: "DELETE" });
  }
}

export const apiClient = new ApiClient();
export default ApiClient;