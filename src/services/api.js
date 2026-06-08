// Base URL backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Generic fetch function dengan anti-cache
const fetchAPI = async (endpoint, options = {}) => {
  try {
    // Tambahkan timestamp untuk mencegah cache
    const separator = endpoint.includes('?') ? '&' : '?';
    const cacheBuster = `${separator}_t=${Date.now()}`;
    
    const response = await fetch(`${API_BASE_URL}${endpoint}${cacheBuster}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        ...options.headers,
      },
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    
    return data;
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};

// Car API endpoints
export const carAPI = {
  // Ambil semua mobil (dengan filter)
  getAll: (filters = {}) => {
    const params = new URLSearchParams(filters).toString();
    return fetchAPI(`/cars${params ? `?${params}` : ''}`);
  },
  
  // Ambil detail mobil
  getById: (id) => fetchAPI(`/cars/${id}`),
  
  // Ambil daftar kategori
  getCategories: () => fetchAPI('/cars/categories'),
};