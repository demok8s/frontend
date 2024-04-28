
import { toast } from 'vue3-toastify'

// Define your API base URL from .env or any configuration
const API_BASE_URL = import.meta.env.VITE_AUTH_APP_URL;

// Custom fetch function
async function customFetch(endpoint, options = {}) {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            // Handle 5XX server errors
            if (response.status >= 500 && response.status < 600) {
                toast.error("There is a server error");
            }
            // Handle non-2xx responses (e.g., 404, 500)
            toast.error(responseData.message);
        }

        // Parse response data (assuming JSON)
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        // Handle network errors or other exceptions
        console.error('Error fetching data:', error.message);
        // Optionally, you can throw the error to be handled in the component
        throw error;
    }
}

export default customFetch;
