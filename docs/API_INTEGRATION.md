# API Integration Documentation

## Overview

This document outlines the professional API integration implemented for the CBPD institution registration system. The integration follows modern React patterns and best practices for maintainable, scalable code.

## Architecture

### Folder Structure

```
├── lib/
│   ├── api/
│   │   ├── apiClient.js          # Centralized HTTP client
│   │   └── institutionApi.js     # Institution-specific API calls
│   └── utils/
│       ├── validation.js         # Form validation utilities
│       └── errorHandler.js       # Error handling utilities
├── hooks/
│   └── useRegistration.js        # Custom hook for registration logic
├── context/
│   └── RegistrationContext.js    # React context for state management
├── components/
│   ├── common/
│   │   ├── ErrorBoundary.jsx     # Error boundary component
│   │   └── LoadingSpinner.jsx    # Loading component
│   └── registerComponents/
│       └── tabs/                 # Registration form components
└── pages/
    └── register/
        └── index.js              # Main registration page
```

## API Configuration

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
NEXT_PUBLIC_APP_NAME=CBPD Registration System
NEXT_PUBLIC_APP_VERSION=1.0.0
```

### API Client

The `apiClient.js` provides a centralized HTTP client with:
- Automatic JSON handling
- Error handling with status codes
- Request/response logging
- Configurable base URL

## Registration Flow

### 1. Form State Management

The registration process uses React Context to manage form state across multiple steps:

```javascript
// Context provides:
- formData: Current form values
- loading: Loading state
- updateFormData: Function to update form data
- submitRegistration: Function to submit the form
- validateStep: Function to validate current step
```

### 2. Step Validation

Each step is validated before allowing progression:

- **Step 0 (Organization Details)**: Required fields validation
- **Step 1 (Main Contact)**: Contact information validation
- **Step 2 (Secondary Contact)**: Secondary contact validation

### 3. API Payload

The final payload matches the required API structure:

```json
{
  "orgName": "string",
  "industrySector": "string",
  "businessAddress": "string",
  "postalCode": "string",
  "mainTelephone": "string",
  "website": "string",
  "email": "string",
  "password": "string",
  "firstName": "string",
  "lastName": "string",
  "jobTitle": "string",
  "emailAddress": "string",
  "phoneNumber": "string",
  "mobileNumber": "string",
  "SfirstName": "string",
  "SlastName": "string",
  "SjobTitle": "string",
  "SemailAddress": "string",
  "SphoneNumber": "string",
  "SmobileNumber": "string",
  "isApproved": false,
  "isTerminated": false
}
```

## Error Handling

### Error Types

The system handles various error types:
- Network errors
- Validation errors
- Server errors (5xx)
- Authentication errors (401)
- Authorization errors (403)
- Not found errors (404)

### User Feedback

- Success messages for successful registration
- Error messages for failed attempts
- Loading states during API calls
- Form validation feedback

## Usage

### Basic Implementation

```javascript
import { RegistrationProvider } from '../context/RegistrationContext';

function App() {
  return (
    <RegistrationProvider>
      <RegisterPage />
    </RegistrationProvider>
  );
}
```

### Custom Hook Usage

```javascript
import { useRegistrationContext } from '../context/RegistrationContext';

function FormComponent() {
  const { formData, updateFormData, loading } = useRegistrationContext();
  
  const handleChange = (field, value) => {
    updateFormData({ [field]: value });
  };
  
  return (
    // Form JSX
  );
}
```

## API Endpoints

### Institution Registration

- **Endpoint**: `POST /api/institution/registration`
- **Purpose**: Register a new institution
- **Payload**: Complete institution data object
- **Response**: Success/error with institution details

### Additional Endpoints (Future)

- `GET /api/institution/:id` - Get institution details
- `PUT /api/institution/:id` - Update institution
- `GET /api/institution/check-email` - Check email availability

## Security Considerations

1. **Data Sanitization**: All form data is sanitized before API calls
2. **Validation**: Client-side and server-side validation
3. **Error Handling**: Secure error messages without exposing sensitive data
4. **Environment Variables**: API URLs and sensitive config in environment variables

## Testing

### Manual Testing

1. Fill out all three registration steps
2. Verify validation works for required fields
3. Test API submission with valid data
4. Test error handling with invalid data
5. Verify loading states and user feedback

### API Testing

Use tools like Postman or curl to test the API endpoint:

```bash
curl -X POST http://localhost:3001/api/institution/registration \
  -H "Content-Type: application/json" \
  -d '{
    "orgName": "Test Organization",
    "email": "test@example.com",
    // ... other required fields
  }'
```

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure API server allows requests from frontend domain
2. **Network Errors**: Check API server is running on correct port
3. **Validation Errors**: Verify all required fields are filled
4. **Environment Variables**: Ensure `.env.local` is properly configured

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
```

This will show detailed error logs in the browser console.

## Future Enhancements

1. **File Upload**: Add support for document uploads
2. **Email Verification**: Implement email verification flow
3. **Multi-language**: Add internationalization support
4. **Offline Support**: Add offline form saving capability
5. **Progress Persistence**: Save form progress in localStorage