import React from 'react';
import './TTSButton.css';

// Text-to-Speech functionality button component
const TTSButton = ({ text }) => {
  const speak = () => window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  return <button className="tts-button" onClick={speak}> Hear it</button>;
};

export default TTSButton;
