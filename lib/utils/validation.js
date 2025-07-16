/**
 * Form Validation Utilities
 * Centralized validation functions for registration forms
 */

export const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
  },
  phone: {
    pattern: /^[\+]?[1-9][\d]{0,15}$/,
    message: 'Please enter a valid phone number'
  },
  website: {
    pattern: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    message: 'Please enter a valid website URL'
  },
  postalCode: {
    pattern: /^[A-Za-z0-9\s\-]{3,10}$/,
    message: 'Please enter a valid postal code'
  },
  password: {
    minLength: 6,
    message: 'Password must be at least 6 characters long'
  }
};

export const validateField = (fieldName, value) => {
  if (!value || value.trim() === '') {
    return { isValid: false, message: 'This field is required' };
  }

  switch (fieldName) {
    case 'email':
    case 'emailAddress':
    case 'SemailAddress':
      if (!validationRules.email.pattern.test(value)) {
        return { isValid: false, message: validationRules.email.message };
      }
      break;

    case 'phoneNumber':
    case 'mobileNumber':
    case 'mainTelephone':
    case 'SphoneNumber':
    case 'SmobileNumber':
      if (!validationRules.phone.pattern.test(value)) {
        return { isValid: false, message: validationRules.phone.message };
      }
      break;

    case 'website':
      if (value && !validationRules.website.pattern.test(value)) {
        return { isValid: false, message: validationRules.website.message };
      }
      break;

    case 'postalCode':
      if (!validationRules.postalCode.pattern.test(value)) {
        return { isValid: false, message: validationRules.postalCode.message };
      }
      break;

    case 'password':
      if (value.length < validationRules.password.minLength) {
        return { isValid: false, message: validationRules.password.message };
      }
      break;

    default:
      break;
  }

  return { isValid: true, message: '' };
};

export const validateFormData = (formData, step) => {
  const errors = {};
  let isValid = true;

  const stepFields = {
    0: ['orgName', 'industrySector', 'businessAddress', 'postalCode', 'mainTelephone', 'email', 'password'],
    1: ['firstName', 'lastName', 'jobTitle', 'emailAddress', 'phoneNumber'],
    2: ['SfirstName', 'SlastName', 'SjobTitle', 'SemailAddress', 'SphoneNumber']
  };

  const fieldsToValidate = stepFields[step] || [];

  fieldsToValidate.forEach(field => {
    const validation = validateField(field, formData[field]);
    if (!validation.isValid) {
      errors[field] = validation.message;
      isValid = false;
    }
  });

  return { isValid, errors };
};

export const sanitizeFormData = (formData) => {
  const sanitized = {};
  
  Object.keys(formData).forEach(key => {
    if (typeof formData[key] === 'string') {
      sanitized[key] = formData[key].trim();
    } else {
      sanitized[key] = formData[key];
    }
  });

  return sanitized;
};