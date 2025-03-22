import axios from 'axios';

const API_URL = 'http://localhost:5000/api/documents';

// ✅ Create an axios instance with base URL
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// ✅ Function to get the latest token dynamically
const getAuthHeaders = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user ? { Authorization: `Bearer ${user.token}` } : {};
};

// ✅ Fetch all documents
export const getDocuments = async () => {
    try {
        const { data } = await api.get('/', { headers: getAuthHeaders() });
        return data;
    } catch (error) {
        console.error('Error fetching documents:', error.response?.data?.message || error.message);
        throw error.response?.data || new Error('Failed to fetch documents');
    }
};

// ✅ Fetch a single document by ID
export const getDocumentById = async (id) => {
    try {
        const { data } = await api.get(`/${id}`, { headers: getAuthHeaders() });
        return data;
    } catch (error) {
        console.error(`Error fetching document ${id}:`, error.response?.data?.message || error.message);
        throw error.response?.data || new Error(`Failed to fetch document ${id}`);
    }
};

// ✅ Update a document
export const updateDocument = async (id, documentData) => {
    try {
        const { data } = await api.put(`/${id}`, documentData, { headers: getAuthHeaders() });
        return data;
    } catch (error) {
        console.error(`Error updating document ${id}:`, error.response?.data?.message || error.message);
        throw error.response?.data || new Error(`Failed to update document ${id}`);
    }
};

// ✅ Delete a document
export const deleteDocument = async (id) => {
    try {
        const { data } = await api.delete(`/${id}`, { headers: getAuthHeaders() });
        return data;
    } catch (error) {
        console.error(`Error deleting document ${id}:`, error.response?.data?.message || error.message);
        throw error.response?.data || new Error(`Failed to delete document ${id}`);
    }
};
