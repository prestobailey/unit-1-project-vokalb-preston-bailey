// src/pages/Quiz.jsx
import React, { useState } from 'react';
import { quizzes } from '../data/quizzes.js';
import './Quiz.css';

// Quiz for testing Albanian alphabet knowledge
const Quiz = () => {
  const questions = quizzes.alphabet || [];
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState('');
  const [feedback, setFeedback] = useState('');
  const [done, setDone] = useState(false);

  const current = questions[index];

  // Handles answer checking and progression
  const handleSubmit = () => {
    if (selected === current.answer) {
      setFeedback('Correct!');
      setTimeout(() => {
        const next = index + 1;
        if (next < questions.length) {
          setIndex(next);
          setSelected('');
          setFeedback('');
        } else {
          setDone(true);
        }
      }, 1000);
    } else {
      setFeedback('Incorrect. Try again.');
    }
  };

  // Quiz will show completion to then restart if clicked
  if (done) {
    return (
      <div className="quiz-page">
        <h2>You finished the Alphabet Quiz!</h2>
        <button onClick={() => {
          setIndex(0);
          setSelected('');
          setFeedback('');
          setDone(false);
        }}>
          Restart
        </button>
      </div>
    );
  }
// Quiz framework 
  return (
    <div className="quiz-page">
      <h2>{current.question}</h2>
      <div className="quiz-options">
        {current.options.map((opt, i) => (
          <label key={i}>
            <input
              type="radio"
              name="option"
              value={opt}
              checked={selected === opt}
              onChange={() => setSelected(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={!selected}>Submit</button>
      <p>{feedback}</p>
    </div>
  );
};

export default Quiz;