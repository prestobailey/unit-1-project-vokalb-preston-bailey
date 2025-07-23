import React from 'react';
import './TTSButton.css';

const TTSButton = ({ text }) => {
  const speak = () => window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  return <button className="tts-button" onClick={speak}> Hear it</button>;
};

export default TTSButton;
