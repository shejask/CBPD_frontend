/**
 * Student Form Context
 * Provides student form state management across components
 */

import React, { createContext, useContext } from 'react';
import { useStudentForm } from '../hooks/useStudentForm';

const StudentFormContext = createContext();

export const useStudentFormContext = () => {
  const context = useContext(StudentFormContext);
  if (!context) {
    throw new Error('useStudentFormContext must be used within a StudentFormProvider');
  }
  return context;
};

export const StudentFormProvider = ({ children }) => {
  const studentFormHook = useStudentForm();

  return (
    <StudentFormContext.Provider value={studentFormHook}>
      {children}
    </StudentFormContext.Provider>
  );
};

export default StudentFormContext;