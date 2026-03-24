// Backend API integration
const API_BASE_URL = '/api';

export const submitContactForm = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/contact/submit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }

  return response.json();
};
