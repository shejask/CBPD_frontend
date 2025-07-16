/**
 * Registration Context
 * Provides registration state management across components
 */

import React, { createContext, useContext } from 'react';
import { useRegistration } from '../hooks/useRegistration';

const RegistrationContext = createContext();

export const useRegistrationContext = () => {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistrationContext must be used within a RegistrationProvider');
  }
  return context;
};

export const RegistrationProvider = ({ children }) => {
  const registrationHook = useRegistration();

  return (
    <RegistrationContext.Provider value={registrationHook}>
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;