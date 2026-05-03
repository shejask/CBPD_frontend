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
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || data.message || 'Something went wrong');
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
  }
};
