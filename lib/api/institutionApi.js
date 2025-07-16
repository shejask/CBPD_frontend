/**
 * Institution API Service
 * Handles all institution-related API calls
 */

import { apiClient } from "./apiClient";
import { createErrorResponse } from "../utils/errorHandler";
import { sanitizeFormData } from "../utils/validation";

export const institutionApi = {
  /**
   * Register a new institution
   * @param {Object} institutionData - Institution registration data
   * @returns {Promise} API response
   */
  register: async (institutionData) => {
    try {
      // Sanitize form data before sending
      const sanitizedData = sanitizeFormData(institutionData);

      const response = await apiClient.post(
        "/api/institution/registration",
        sanitizedData
      );

      return {
        success: true,
        data: response,
        message: "Institution registered successfully",
      };
    } catch (error) {
      return createErrorResponse(error, "Institution Registration");
    }
  },

  /**
   * Get institution details
   * @param {string} institutionId - Institution ID
   * @returns {Promise} API response
   */
  getInstitution: async (institutionId) => {
    try {
      const response = await apiClient.get(`/api/institution/${institutionId}`);
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return createErrorResponse(error, "Get Institution");
    }
  },

  /**
   * Update institution details
   * @param {string} institutionId - Institution ID
   * @param {Object} updateData - Data to update
   * @returns {Promise} API response
   */
  updateInstitution: async (institutionId, updateData) => {
    try {
      const sanitizedData = sanitizeFormData(updateData);
      const response = await apiClient.put(
        `/api/institution/${institutionId}`,
        sanitizedData
      );

      return {
        success: true,
        data: response,
        message: "Institution updated successfully",
      };
    } catch (error) {
      return createErrorResponse(error, "Update Institution");
    }
  },

  /**
   * Check if email already exists
   * @param {string} email - Email to check
   * @returns {Promise} API response
   */
  checkEmailExists: async (email) => {
    try {
      const response = await apiClient.get(
        `/api/institution/check-email?email=${encodeURIComponent(email)}`
      );
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return createErrorResponse(error, "Email Check");
    }
  },

  instituteLogin: async (email, password) => {
    try {
      const response = await apiClient.post(`/api/institution/login`, {
        email,
        password,
      });

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return createErrorResponse(error, "Institution login");
    }
  },

  bulkImport: async (bulkFile, id) => {
    try {
      const response = await apiClient.post(
        `/api/institution/${id}/students`,
        bulkFile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return createErrorResponse(error, "bulk upload");
    }
  },

  downloadExcel: async (id) => {
    try {
      const response = await apiClient.get(
        `/api/institution/${id}/students/template`
      );

      console.log(response);

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return createErrorResponse(error, "Excel download");
    }
  },

  getAllStudents: async (id) => {
    try {
      const response = await apiClient.get(`/api/institution/${id}/students`);
      console.log(response);

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return createErrorResponse(error, "Fetching students");
    }
  },

  fetchOneStudent: async (orgId, studId) => {
    try {
      const response = await apiClient.get(
        `/api/institution/${orgId}/students/${studId}`
      );
      console.log(response);

      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return createErrorResponse(error, "Fetching students");
    }
  },

  editOneStudent: async (orgId, studId, formData) => {
    try {
      const response = await apiClient.put(
        `/api/institution/${orgId}/students/${studId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return createErrorResponse(error, "Updating student");
    }
  },

  // Updated API function for better search and filtering
  searchStudents: async (
    searchQuery,
    institutionId,
    filters = {},
    page = 1,
    limit = 10
  ) => {
    try {
      const requestBody = {
        institutionId: institutionId,
        page,
        limit,
        sortBy: "createdAt",
        sortOrder: "desc",
      };

      // Add search query if provided
      if (searchQuery && searchQuery.trim()) {
        requestBody.filters = {
          fullName: searchQuery,
          ...filters,
        };
      } else if (Object.keys(filters).length > 0) {
        requestBody.filters = filters;
      }

      const response = await apiClient.post(`/api/student/search`, requestBody);
      console.log(response);

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return createErrorResponse(error, "Searching student");
    }
  },

  // Alternative approach using the GET endpoint you showed
  searchStudentsAlternative: async (
    searchQuery,
    institutionId,
    filters = {}
  ) => {
    try {
      let url = `/api/institution/${institutionId}/students/search`;

      // Add query parameters if search query is provided
      if (searchQuery && searchQuery.trim()) {
        url += `?field=fullName&query=${encodeURIComponent(
          searchQuery
        )}&limit=10`;
      }

      const response = await apiClient.get(url);
      console.log(response);

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return createErrorResponse(error, "Searching student");
    }
  },

  bulkStudentAction: async (institutionId, action, studentIds) => {
    try {
      const response = await apiClient.post(
        `/api/institution/${institutionId}/students/bulk`,
        {
          action: action,
          studentIds: studentIds,
        }
      );

      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    } catch (error) {
      return createErrorResponse(error, `Bulk ${action} students`);
    }
  },

  // Export students data
  exportStudents: async (institutionId, format = "csv", isActive = null) => {
    try {
      let url = `/api/institution/${institutionId}/students/bulk?format=${format}`;

      if (isActive !== null) {
        url += `&isActive=${isActive}`;
      }

      const response = await apiClient.get(url);

      if (format === "csv") {
        return {
          success: true,
          data: response.data, // Raw CSV data
        };
      } else {
        return {
          success: true,
          data: response.data.data,
          message: response.data.message,
        };
      }
    } catch (error) {
      return createErrorResponse(error, "Export students");
    }
  },

  // Get students count by status (for dashboard stats)
  getStudentsStats: async (institutionId) => {
    try {
      const response = await apiClient.get(
        `/api/institution/${institutionId}/students/stats`
      );

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error) {
      return createErrorResponse(error, "Get students stats");
    }
  },

  // Advanced search with filters (alternative to existing search)
  advancedStudentSearch: async (
    institutionId,
    searchFilters,
    page = 1,
    limit = 10
  ) => {
    try {
      const response = await apiClient.post(
        `/api/institution/${institutionId}/students/search`,
        {
          filters: searchFilters,
          page,
          limit,
          sortBy: "createdAt",
          sortOrder: "desc",
        }
      );

      return {
        success: true,
        data: response.data.data,
        pagination: response.data.pagination,
      };
    } catch (error) {
      return createErrorResponse(error, "Advanced search students");
    }
  },

  getStatistics: async (id) => {
    try {
      const response = await apiClient.get(
        `/api/institution/${id}/students/statistics`
      );
      console.log(response);
      
      return {
        success: true,
        data: response,
      };
    } catch (error) {
      return createErrorResponse(error, "Fetching statistics");
    }
  },

  getInstituteDetails: async (id) => {
    try {
      const response = await apiClient.get(`/api/institution/${id}`);
      console.log(response);

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return createErrorResponse(error, "Fetching institute details");
    }
  },

  editInstituteDetails: async (id, payload) => {
    try {
      // Changed from GET to PUT/PATCH and fixed payload sending
      const response = await apiClient.put(`/api/institution/${id}`, payload);
      console.log(response);

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return createErrorResponse(error, "Updating institute details");
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await apiClient.post('/api/institution/forgot-password', { email });
      return {
        success: true,
        message: response.data.message,
      };
    } catch (error) {
      return createErrorResponse(error, "Forgot Password");
    }
  },

  resetPassword: async (newPassword) => {
    try {
      const response = await apiClient.post('/api/institution/reset-password', { password: newPassword });
      return {
        success: true,
        message: response.data.message,
      };
    } catch (error) {
      return createErrorResponse(error, "Reset Password");
    }
  },

  // singleStudentAdd: async (studentData, id) => {
  //   try {
  //     const formData = new FormData();

  //     // Add text fields
  //     const textFields = [
  //       "fullName",
  //       "gender",
  //       "phoneNumber",
  //       "dateOfBirth",
  //       "joiningDate",
  //       "state",
  //       "district",
  //       "county",
  //       "currentCourse",
  //       "department",
  //       "semester",
  //       "admissionNumber",
  //     ];

  //     textFields.forEach((field) => {
  //       if (studentData[field]) {
  //         formData.append(field, studentData[field]);
  //       }
  //     });

  //     // Add passport photo if exists
  //     if (studentData.passportPhoto) {
  //       formData.append("passportPhoto", studentData.passportPhoto);
  //     }

  //     // Add marksheets if exists
  //     if (studentData.marksheets && studentData.marksheets.length > 0) {
  //       studentData.marksheets.forEach((file) => {
  //         formData.append("marksheets", file);
  //       });
  //     }

  //     const response = await apiClient.post(
  //       `/api/institution/${id}/students`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );

  //     return {
  //       success: true,
  //       data: response,
  //     };
  //   } catch (error) {
  //     return createErrorResponse(error, "single student creation");
  //   }
  // },
};

export default institutionApi;