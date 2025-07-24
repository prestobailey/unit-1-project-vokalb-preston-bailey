import React from 'react';
import '../pages/About.css';

// Reusable contact form component
const ContactForm = ({ formData, onChange, onSubmit }) => {
  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={onChange}
          required
        />
      </label>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;