import emailjs from '@emailjs/browser';

/**
 * Sends an email using EmailJS.
 * 
 * To use this, you need to set up an account at https://www.emailjs.com/
 * and obtain the following credentials:
 * 1. SERVICE_ID: The ID of the email service (e.g., Gmail)
 * 2. TEMPLATE_ID: The ID of the email template you created
 * 3. PUBLIC_KEY: Your account's Public Key (from Account settings)
 */
export const sendEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error('EmailJS credentials are missing. Please check your .env file.');
  }

  // Map your form fields to the template variables in EmailJS
  const templateParams = {
    name: formData.name,      // Matches {{name}} in your template
    email: formData.email,    // Matches {{email}} in your template
    message: formData.message // Matches {{message}} in your template
  };

  try {
    const result = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );
    return result;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
