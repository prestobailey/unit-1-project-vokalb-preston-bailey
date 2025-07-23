import React from 'react';
import './GreetingsLesson.css';

const greetings = [
  { phrase: 'Mirëdita', meaning: 'Good afternoon' },
  { phrase: 'Mirëmëngjes', meaning: 'Good morning' },
  { phrase: 'Faleminderit', meaning: 'Thank you' },
];

const GreetingsLesson = () => (
  <div className="greetings-lesson">
    <h2>Basic Greetings</h2>
    <p>Click on a phrase to hear how it sounds in Albanian.</p>
    <ul className="greeting-list">
      {greetings.map((g, i) => (
        <li key={i}>
          <button className="greeting-button" onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance(g.phrase))}>
            {g.phrase} – <em>{g.meaning}</em>
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default GreetingsLesson;
