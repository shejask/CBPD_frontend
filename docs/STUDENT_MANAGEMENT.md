# Student Management System Documentation

## Overview

This document outlines the implementation of the single student creation functionality integrated with the existing bulk upload system. The implementation follows modern React patterns and provides a seamless user experience for adding individual students.

## Architecture

### Folder Structure

```
├── lib/
│   └── api/
│       └── institutionApi.js         # Updated with student CRUD operations
├── hooks/
│   └── useStudentForm.js            # Custom hook for student form management
├── context/
│   └── StudentFormContext.js        # React context for form state
├── components/
│   └── dashboard/
│       └── addStudTabs/
│           ├── Profile.jsx          # Student profile form
│           ├── Academic.jsx         # Academic details form
│           └── Identification.jsx   # Documents upload form
└── pages/
    └── dashboard/
        └── addStudent/
            └── index.js             # Main add student page
```

## API Integration

### New API Methods Added to institutionApi.js

1. **createStudent(studentData, institutionId)**
   - Creates a single student with form data and file uploads
   - Handles FormData with files (passport photo, marksheets)
   - Returns success/error response

2. **getStudents(institutionId, params)**
   - Retrieves all students for an institution
   - Supports pagination, search, and filtering
   - Query parameters: page, limit, search, isActive

3. **getStudent(institutionId, studentId)**
   - Retrieves a single student by ID
   - Used for viewing/editing student details

4. **updateStudent(institutionId, studentId, studentData)**
   - Updates student information
   - Handles both form data and file uploads

5. **deleteStudent(institutionId, studentId)**
   - Soft or hard delete student record
   - Returns confirmation response

## Form Management

### Student Form Hook (useStudentForm.js)

The custom hook manages:
- **Form State**: All student data fields
- **File State**: Passport photo and marksheets
- **Validation**: Step-by-step validation
- **Submission**: API call with FormData
- **Loading States**: UI feedback during operations

### Form Context (StudentFormContext.js)

Provides global state management across form components:
- Shared form data between steps
- File upload management
- Validation state
- Loading indicators

## Form Components

### 1. Profile Component (Profile.jsx)

**Fields:**
- Full Name (required)
- Gender (select: Male/Female/Other, required)
- Phone Number (required)
- Date of Birth (required)
- Joining Date (required)
- State (required)
- District (required)
- County (required)

**Features:**
- Real-time validation
- Form state persistence
- Required field indicators

### 2. Academic Component (Academic.jsx)

**Fields:**
- Current Course (required)
- Department/Branch (required)
- Year/Semester (required)
- College Admission Number (required)

**Features:**
- Unique admission number validation
- Course and department tracking

### 3. Identification Component (Identification.jsx)

**Fields:**
- Government ID Number (required)
- Passport Photo Upload (required)
- Marksheets Upload (optional, multiple files)

**Features:**
- File type validation (images for passport, PDF/images for marksheets)
- File size validation (5MB for photos, 10MB for documents)
- Multiple file upload for marksheets
- Preview and remove functionality

## Form Validation

### Step-by-Step Validation

Each step validates required fields before allowing progression:

**Step 1 (Profile):**
- All personal information fields must be filled
- Date validation (birth date must be in past)
- Phone number format validation

**Step 2 (Academic):**
- All academic fields required
- Admission number uniqueness (checked on submission)

**Step 3 (Identification):**
- Government ID required
- Passport photo required
- File format and size validation

### File Validation

- **Passport Photo**: Image files only, max 5MB
- **Marksheets**: PDF, DOC, or image files, max 10MB each
- Real-time validation with user feedback

## User Experience Features

### Progress Tracking
- Step indicator showing current progress
- Visual feedback for completed steps
- Navigation between steps

### Loading States
- Button loading indicators during submission
- Disabled navigation during API calls
- Progress feedback messages

### Error Handling
- Field-level validation messages
- API error handling with user-friendly messages
- File upload error feedback

### Success Flow
- Success message on completion
- Form reset after successful submission
- Automatic redirect to dashboard

## Backend Integration

### API Endpoint
```
POST /api/institution/{institutionId}/students
```

### Request Format
- **Content-Type**: multipart/form-data
- **Authentication**: HTTP-only cookies (handled automatically)

### Form Data Structure
```javascript
{
  // Text fields
  fullName: "string",
  gender: "Male|Female|Other",
  phoneNumber: "string",
  dateOfBirth: "YYYY-MM-DD",
  joiningDate: "YYYY-MM-DD",
  state: "string",
  district: "string",
  county: "string",
  currentCourse: "string",
  department: "string",
  semester: "string",
  admissionNumber: "string",
  govtIdNumber: "string",
  
  // Files
  passportPhoto: File,
  marksheets: File[] // Multiple files
}
```

### Response Format
```javascript
{
  success: boolean,
  data: {
    _id: "string",
    fullName: "string",
    // ... other student fields
    institutionId: "string",
    createdAt: "ISO date",
    updatedAt: "ISO date"
  },
  message: "string"
}
```

## Authentication

### Cookie-Based Authentication
- Uses HTTP-only cookies for security
- Automatic cookie inclusion in requests
- Institution ID retrieved from localStorage
- Protected routes with authentication middleware

### Error Handling
- 401 Unauthorized: Redirect to login
- 403 Forbidden: Access denied message
- 404 Not Found: Institution not found
- 409 Conflict: Duplicate admission number

## Usage Instructions

### For Developers

1. **Setup Context Provider**:
   ```jsx
   import { StudentFormProvider } from '@/context/StudentFormContext';
   
   function App() {
     return (
       <StudentFormProvider>
         <AddStudentPage />
       </StudentFormProvider>
     );
   }
   ```

2. **Use Form Hook**:
   ```jsx
   import { useStudentFormContext } from '@/context/StudentFormContext';
   
   function FormComponent() {
     const { formData, updateFormData, files, updateFiles } = useStudentFormContext();
     // Component logic
   }
   ```

3. **Handle File Uploads**:
   ```jsx
   const handleFileChange = (info) => {
     const file = info.fileList[0]?.originFileObj;
     updateFiles({ passportPhoto: file });
   };
   ```

### For Users

1. **Navigate to Add Student**: Dashboard → Add New Student
2. **Fill Profile Information**: Complete all required personal details
3. **Add Academic Details**: Enter course and admission information
4. **Upload Documents**: Add passport photo (required) and marksheets (optional)
5. **Submit**: Review and create the student record

## Testing

### Manual Testing Checklist

- [ ] Form validation works for each step
- [ ] File upload validation (type, size)
- [ ] Step navigation (next/previous)
- [ ] Form submission with valid data
- [ ] Error handling for invalid data
- [ ] Authentication error handling
- [ ] Success flow and redirect

### API Testing

Use the browser's network tab or tools like Postman to test:

1. **Valid Submission**: Complete form with all required fields
2. **Validation Errors**: Submit with missing required fields
3. **File Upload**: Test with various file types and sizes
4. **Duplicate Check**: Try creating student with existing admission number
5. **Authentication**: Test without valid session

## Troubleshooting

### Common Issues

1. **401 Unauthorized Error**
   - Check if user is logged in
   - Verify cookies are being sent
   - Check institution ID in localStorage

2. **File Upload Failures**
   - Verify file size limits
   - Check file type restrictions
   - Ensure FormData is properly constructed

3. **Validation Errors**
   - Check required field completion
   - Verify date formats
   - Validate phone number format

4. **Form State Issues**
   - Ensure StudentFormProvider wraps components
   - Check context usage in components
   - Verify form data updates

### Debug Mode

In development, the form shows debug information:
- Current step validation status
- Number of filled form fields
- File upload status

## Future Enhancements

1. **Auto-save**: Save form progress in localStorage
2. **Image Preview**: Show uploaded image previews
3. **Batch Operations**: Select and perform actions on multiple students
4. **Advanced Search**: Filter students by various criteria
5. **Export Features**: Export student data to Excel/PDF
6. **Email Notifications**: Send confirmation emails
7. **Audit Trail**: Track changes to student records