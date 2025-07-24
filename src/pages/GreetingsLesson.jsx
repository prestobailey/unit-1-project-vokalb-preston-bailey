import React from 'react';
import './GreetingsLesson.css';

const greetings = [
  { phrase: 'Përshëndetje', meaning: 'Hello / Greetings' },
  { phrase: 'Tungjatjeta', meaning: 'Hello (informal, regional)' },
  { phrase: 'Mirëmëngjes', meaning: 'Good morning' },
  { phrase: 'Mirëdita', meaning: 'Good afternoon / day' },
  { phrase: 'Mirëmbrëma', meaning: 'Good evening' },
  { phrase: 'Natën e mirë', meaning: 'Good night' },
  { phrase: 'Lamtumirë', meaning: 'Goodbye (formal)' },
  { phrase: 'Mirupafshim', meaning: 'See you again / Goodbye' },
  { phrase: 'Shihemi më vonë', meaning: 'See you later' },
  { phrase: 'Si jeni?', meaning: 'How are you? (formal/plural)' },
  { phrase: 'Si je?', meaning: 'How are you? (informal)' },
  { phrase: 'Jam mirë, faleminderit', meaning: "I'm good, thank you" },
  { phrase: 'Po ti?', meaning: 'And you? (informal)' },
  { phrase: 'Ju lutem', meaning: 'Please' },
  { phrase: 'Faleminderit', meaning: 'Thank you' },
  { phrase: 'S’ka përse', meaning: "You're welcome" },
  { phrase: 'Më vjen mirë t’ju njoh', meaning: 'Nice to meet you (formal)' },
  { phrase: 'Ç’kemi?', meaning: "What’s up? (casual)" }
];

// Greetings Lesson Page Framework that utilizes the Text-to-Speech functionality
// Each phrase is clickable and will pronounce the phrase when clicked
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
