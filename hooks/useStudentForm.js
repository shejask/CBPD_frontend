/**
 * Student Form Hook
 * Custom hook for managing student form state and submission
 */

import { useState, useCallback } from 'react';
import { institutionApi } from '../lib/api/institutionApi';
import { message } from 'antd';

export const useStudentForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    // Profile data
    fullName: '',
    gender: '',
    phoneNumber: '',
    dateOfBirth: '',
    joiningDate: '',
    state: '',
    district: '',
    county: '',
    
    // Academic data
    currentCourse: '',
    department: '',
    semester: '',
    admissionNumber: '',
    
    // Identification data
    govtIdNumber: '',
  });

  const [files, setFiles] = useState({
    passportPhoto: null,
    marksheets: [],
  });

  const updateFormData = useCallback((stepData) => {
    setFormData(prev => ({
      ...prev,
      ...stepData
    }));
  }, []);

  const updateFiles = useCallback((fileData) => {
    setFiles(prev => ({
      ...prev,
      ...fileData
    }));
  }, []);

  const validateStep = useCallback((step) => {
    switch (step) {
      case 0: // Profile
        return !!(
          formData.fullName &&
          formData.gender &&
          formData.phoneNumber &&
          formData.dateOfBirth &&
          formData.joiningDate &&
          formData.state &&
          formData.district &&
          formData.county
        );
      
      case 1: // Academic
        return !!(
          formData.currentCourse &&
          formData.department &&
          formData.semester &&
          formData.admissionNumber
        );
      
      case 2: // Identification
        return !!(
          formData.govtIdNumber &&
          files.passportPhoto
        );
      
      default:
        return false;
    }
  }, [formData, files]);

  const submitStudent = useCallback(async () => {
    setLoading(true);
    
    try {
      // Get institution ID from localStorage
      const institutionId = localStorage.getItem('id');
      
      if (!institutionId) {
        message.error('Institution ID not found. Please login again.');
        return { success: false, error: 'Institution ID missing' };
      }

      // Create FormData object
      const formDataToSend = new FormData();
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          formDataToSend.append(key, formData[key]);
        }
      });

      // Add files
      if (files.passportPhoto) {
        formDataToSend.append('passportPhoto', files.passportPhoto);
      }

      if (files.marksheets && files.marksheets.length > 0) {
        files.marksheets.forEach(file => {
          formDataToSend.append('marksheets', file);
        });
      }

      const result = await institutionApi.createStudent(formDataToSend, institutionId);
      
      if (result.success) {
        message.success(result.message || 'Student created successfully!');
        return { success: true, data: result.data };
      } else {
        message.error(result.error || 'Failed to create student. Please try again.');
        return { success: false, error: result.error };
      }
    } catch (error) {
      message.error('An unexpected error occurred. Please try again.');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  }, [formData, files]);

  const resetForm = useCallback(() => {
    setFormData({
      fullName: '',
      gender: '',
      phoneNumber: '',
      dateOfBirth: '',
      joiningDate: '',
      state: '',
      district: '',
      county: '',
      currentCourse: '',
      department: '',
      semester: '',
      admissionNumber: '',
      govtIdNumber: '',
    });
    setFiles({
      passportPhoto: null,
      marksheets: [],
    });
  }, []);

  return {
    formData,
    files,
    loading,
    updateFormData,
    updateFiles,
    validateStep,
    submitStudent,
    resetForm,
  };
};

export default useStudentForm;