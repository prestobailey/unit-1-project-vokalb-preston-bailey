import React from 'react';
import './AlphabetLesson.css';

const alphabet = [
  { letter: 'A',  pronunciation: 'ah' },
  { letter: 'B',  pronunciation: 'beh' },
  { letter: 'C',  pronunciation: 'tseh' },
  { letter: 'Ç',  pronunciation: 'cheh' },
  { letter: 'D',  pronunciation: 'deh' },
  { letter: 'Dh', pronunciation: 'thuh' },
  { letter: 'E',  pronunciation: 'eh' },
  { letter: 'Ë',  pronunciation: 'uh' },
  { letter: 'F',  pronunciation: 'feh' },
  { letter: 'G',  pronunciation: 'geh' },
  { letter: 'Gj', pronunciation: 'gy' },
  { letter: 'H',  pronunciation: 'hah' },
  { letter: 'I',  pronunciation: 'ee' },
  { letter: 'J',  pronunciation: 'y' },
  { letter: 'K',  pronunciation: 'keh' },
  { letter: 'L',  pronunciation: 'leh' },
  { letter: 'Ll', pronunciation: 'l-luh' },
  { letter: 'M',  pronunciation: 'meh' },
  { letter: 'N',  pronunciation: 'neh' },
  { letter: 'Nj', pronunciation: 'nyeh' },
  { letter: 'O',  pronunciation: 'oh' },
  { letter: 'P',  pronunciation: 'peh' },
  { letter: 'Q',  pronunciation: 'kyoo' },
  { letter: 'R',  pronunciation: 'rr' },
  { letter: 'Rr', pronunciation: 'trilled rr' },
  { letter: 'S',  pronunciation: 'seh' },
  { letter: 'Sh', pronunciation: 'shuh' },
  { letter: 'T',  pronunciation: 'teh' },
  { letter: 'Th', pronunciation: 'th' },
  { letter: 'U',  pronunciation: 'oo' },
  { letter: 'V',  pronunciation: 'veh' },
  { letter: 'X',  pronunciation: 'dz' },
  { letter: 'Xh', pronunciation: 'juh' },
  { letter: 'Y',  pronunciation: 'ü' },
  { letter: 'Z',  pronunciation: 'zeh' },
  { letter: 'Zh', pronunciation: 'zhuh' },
];

// Alphabet Lesson Page Framework that utilizes the Text-to-Speech functionality
// Each letter is clickable and will pronounce the letter when clicked
const AlphabetLesson = () => (
  <div className="alphabet-lesson">
    <h2>Albanian Alphabet</h2>
    <p>Click on a letter to hear how it sounds.</p>
    <div className="alphabet-grid">
      {alphabet.map((item, i) => (
        <button key={i} className="letter-card" 
        onClick={() => window.speechSynthesis.speak(new SpeechSynthesisUtterance(item.pronunciation))}>
          <strong>{item.letter}</strong><br />
          <span>{item.pronunciation}</span>
        </button>
      ))}
    </div>
  </div>
);

export default AlphabetLesson;
