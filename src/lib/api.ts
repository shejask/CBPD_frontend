const isServer = typeof window === 'undefined';
const API_BASE_URL = isServer 
  ? (process.env.NEXT_PUBLIC_API_URL || 'https://admin.cbpd.co.uk/api')
  : (process.env.NEXT_PUBLIC_API_URL || '/api');

/**
 * Generic fetch wrapper for our API calls
 */
async function fetchAPI(endpoint: string, options: RequestInit = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  // Setup headers, include JSON by default if body exists
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string>),
  };

  if (options.body && typeof options.body === 'string') {
    headers['Content-Type'] = 'application/json';
  }

  // Include Auth token if available in localStorage
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }

  const response = await fetch(url, {
    ...options,
    headers,
    credentials: 'include',
    cache: 'no-store',
  });

  const responseText = await response.text();
  let data: any = {};
  try {
    data = JSON.parse(responseText);
  } catch (e) {
    // If it's not JSON, maybe it's HTML from a 404/500 page
    console.error("Non-JSON API Error Response:", response.status, responseText.substring(0, 200));
  }

  if (!response.ok) {
    console.error("API Error Response Data:", data);
    const err: any = new Error(data.error || data.message || `API Error ${response.status}: ${response.statusText}`);
    err.details = data.details;
    throw err;
  }

  return data;
}

export const api = {
  // --- Public Forms ---
  submitContact: async (payload: { firstName: string; lastName: string; email: string; phone: string; enquiryType: string; programmeName?: string; message: string }) => {
    return fetchAPI('/public/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  submitPartner: async (payload: any) => {
    return fetchAPI('/public/partner', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  // --- Verifications ---
  verifyDocument: async (payload: { type: string; payload: Record<string, string> }) => {
    return fetchAPI('/public/verify', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  // --- Auth ---
  login: async (payload: { email: string; password: string }) => {
    return fetchAPI('/institution/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  register: async (payload: any) => {
    return fetchAPI('/institution/registration', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  },

  // --- Dynamic Content (Programmes) ---
  getCategories: async () => {
    return fetchAPI('/admin/course-categories?limit=100');
  },

  getCourses: async (categoryId?: string) => {
    const url = categoryId ? `/admin/courses?categoryId=${categoryId}&limit=500` : '/admin/courses?limit=500';
    return fetchAPI(url);
  },

  // --- Students ---
  getStudents: async (institutionId: string, page = 1, limit = 10) => {
    return fetchAPI(`/student?institutionId=${institutionId}&page=${page}&limit=${limit}`);
  },

  createStudent: async (formData: FormData) => {
    return fetchAPI('/student', {
      method: 'POST',
      body: formData,
    });
  },
  getStudent: async (id: string) => {
    return fetchAPI(`/student/${id}`);
  },

  updateStudent: async (id: string, formData: FormData) => {
    return fetchAPI(`/student/${id}`, {
      method: 'PUT',
      body: formData,
    });
  },

  deactivateStudent: async (id: string) => {
    const formData = new FormData();
    formData.append('isActive', 'false');
    return fetchAPI(`/student/${id}`, {
      method: 'PUT',
      body: formData,
    });
  },

  activateStudent: async (id: string) => {
    const formData = new FormData();
    formData.append('isActive', 'true');
    return fetchAPI(`/student/${id}`, {
      method: 'PUT',
      body: formData,
    });
  },

  deleteStudent: async (id: string) => {
    return fetchAPI(`/student/${id}`, {
      method: 'DELETE',
    });
  }
};
