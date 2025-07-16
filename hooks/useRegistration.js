/**
 * Registration Hook
 * Custom hook for managing registration state and API calls
 */

import { useState, useCallback } from 'react';
import { institutionApi } from '../lib/api/institutionApi';
import { message } from 'antd';

export const useRegistration = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Organization Details
    orgName: '',
    industrySector: '',
    businessAddress: '',
    postalCode: '',
    mainTelephone: '',
    website: '',
    email: '',
    password: '',
    
    // Main Contact
    firstName: '',
    lastName: '',
    jobTitle: '',
    emailAddress: '',
    phoneNumber: '',
    mobileNumber: '',
    
    // Secondary Contact
    SfirstName: '',
    SlastName: '',
    SjobTitle: '',
    SemailAddress: '',
    SphoneNumber: '',
    SmobileNumber: '',
    
    // Default values
    isApproved: false,
    isTerminated: false,
  });

  const updateFormData = useCallback((stepData) => {
    setFormData(prev => ({
      ...prev,
      ...stepData
    }));
  }, []);

  const submitRegistration = useCallback(async () => {
    setLoading(true);
    
    try {
      const result = await institutionApi.register(formData);
      
      if (result.success) {
        message.success(result.message || 'Registration successful!');
        return { success: true, data: result.data };
      } else {
        message.error(result.message || 'Registration failed. Please try again.');
        return { success: false, error: result.error };
      }
    } catch (error) {
      message.error('An unexpected error occurred. Please try again.');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  }, [formData]);

  const validateStep = useCallback((step) => {
    switch (step) {
      case 0: // Organization Details
        return !!(
          formData.orgName &&
          formData.industrySector &&
          formData.businessAddress &&
          formData.postalCode &&
          formData.mainTelephone &&
          formData.email &&
          formData.password
        );
      
      case 1: // Main Contact
        return !!(
          formData.firstName &&
          formData.lastName &&
          formData.jobTitle &&
          formData.emailAddress &&
          formData.phoneNumber
        );
      
      case 2: // Secondary Contact
        return !!(
          formData.SfirstName &&
          formData.SlastName &&
          formData.SjobTitle &&
          formData.SemailAddress &&
          formData.SphoneNumber
        );
      
      default:
        return false;
    }
  }, [formData]);

  const resetForm = useCallback(() => {
    setFormData({
      orgName: '',
      industrySector: '',
      businessAddress: '',
      postalCode: '',
      mainTelephone: '',
      website: '',
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      jobTitle: '',
      emailAddress: '',
      phoneNumber: '',
      mobileNumber: '',
      SfirstName: '',
      SlastName: '',
      SjobTitle: '',
      SemailAddress: '',
      SphoneNumber: '',
      SmobileNumber: '',
      isApproved: false,
      isTerminated: false,
    });
  }, []);

  return {
    formData,
    loading,
    updateFormData,
    submitRegistration,
    validateStep,
    resetForm,
  };
};

export default useRegistration;