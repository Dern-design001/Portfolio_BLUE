import { useState } from 'react';
import { sendEmail } from '../services/emailService';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      setShowSuccess(true);
      // We keep the email in state briefly to show in success message
      // and reset the rest
      setFormData(prev => ({ ...prev, name: '', message: '' }));
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message: ' + (error.message || 'Please check your EmailJS setup.'));
    } finally {
      setIsSubmitting(false);
    }
  };


  const handleClose = () => {
    setShowSuccess(false);
  };

  if (showSuccess) {
    return (
      <div id="formSuccess" className="text-center p-5">
        <i className="bi bi-check-circle-fill text-info fs-1 mb-3 d-block"></i>
        <h3 className="fw-bold text-white mb-2">Message Delivered</h3>
        <p className="text-muted">
          Thanks for reaching out! I'll get back to you soon at{' '}
          <span className="text-info fw-bold">{formData.email}</span>.
        </p>
        <button
          className="btn btn-outline-light rounded-pill px-5 py-2 mt-3"
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="connect-form-container">
      <div className="form-input-group mb-3">
        <input
          type="text"
          id="name"
          className="custom-input"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <div className="form-label">
          <i className="bi bi-envelope-at-fill"></i>
          <span>To: michellesusan704@gmail.com</span>
        </div>
      </div>

      <div className="form-input-group">
        <input
          type="email"
          id="email"
          className="custom-input"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-input-group">
        <textarea
          id="message"
          className="custom-input"
          rows="4"
          placeholder="How can I help you today?"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn-primary-custom w-100 py-3 mt-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="spinner-border spinner-border-sm me-2"></span>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};

export default ContactForm;
