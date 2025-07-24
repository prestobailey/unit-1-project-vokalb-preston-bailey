import React from 'react';
import '../pages/About.css';
import Button from './Button';

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

      <Button label="Send" onClick={onSubmit} />
    </form>
  );
};

export default ContactForm;