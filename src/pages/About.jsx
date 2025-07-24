import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import './About.css';

// React hook to manage form input
const About = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// Form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`It is great to hear from you, ${formData.name}!`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="about-page">
      <h1>About VOKALB</h1>
      <p>VOKALB is an English-to-Albanian language learning app designed to help learners practice vocabulary, pronunciation, and common phrases through interactive lessons and quizzes.</p>
      <p>This app features text-to-speech for pronunciation and accessibility. The interface is e-reader inspired to help reduce distractions, unlike other apps.</p>
      <p>VOKALB's mission is to make language learning accessible and intuitive for everyone, especially those exploring Albanian for the first time.</p>

      <h2>Contact Us</h2>
      <ContactForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default About;