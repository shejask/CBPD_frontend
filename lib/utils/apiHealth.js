/**
 * API Health Check Utilities
 * Functions to test API connectivity and health
 */

import { institutionApi } from '../api/institutionApi';

/**
 * Test API connectivity by making a simple request
 * @returns {Promise<boolean>} True if API is reachable, false otherwise
 */
export const testApiConnectivity = async () => {
  try {
    // Try to check if an email exists - this is a lightweight endpoint
    const result = await institutionApi.checkEmailExists('health-check@example.com');
    
    // Either success or a handled error response means the API is reachable
    return result.success !== undefined;
  } catch (error) {
    // Unhandled error means API is not reachable
    console.warn('API connectivity test failed:', error.message);
    return false;
  }
};

/**
 * Get API health status with detailed information
 * @returns {Promise<Object>} Health status object
 */
export const getApiHealthStatus = async () => {
  const startTime = Date.now();
  
  try {
    const isConnected = await testApiConnectivity();
    const responseTime = Date.now() - startTime;
    
    return {
      isConnected,
      responseTime,
      status: isConnected ? 'healthy' : 'unhealthy',
      timestamp: new Date().toISOString(),
      endpoint: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'
    };
  } catch (error) {
    return {
      isConnected: false,
      responseTime: Date.now() - startTime,
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString(),
      endpoint: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'
    };
  }
};

// Mock data for testing purposes (moved from test file)
export const mockInstitutionData = {
  orgName: "Test Tech Solutions Inc",
  industrySector: "Information Technology",
  businessAddress: "123 Test Avenue, Suite 456, Test City, TC 10001",
  postalCode: "10001",
  mainTelephone: "+1-555-123-4567",
  website: "https://www.testtechsolutions.com",
  email: "test@testtechsolutions.com",
  password: "testpassword123",
  firstName: "John",
  lastName: "Doe",
  jobTitle: "Chief Executive Officer",
  emailAddress: "john.doe@testtechsolutions.com",
  phoneNumber: "+1-555-987-6543",
  mobileNumber: "+1-555-555-1234",
  SfirstName: "Jane",
  SlastName: "Smith",
  SjobTitle: "Chief Technology Officer",
  SemailAddress: "jane.smith@testtechsolutions.com",
  SphoneNumber: "+1-555-444-3333",
  SmobileNumber: "+1-555-222-1111",
  isApproved: false,
  isTerminated: false
};