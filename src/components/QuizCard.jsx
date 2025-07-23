import React from 'react';
import './QuizCard.css';

const QuizCard = ({ question, options, selected, onSelect }) => (
  <div className="quiz-card">
    <p>{question}</p>
    {options.map((o, i) => (
      <label key={i} className={`option ${selected === o ? 'selected' : ''}`}>
        <input type="radio" value={o} checked={selected === o} onChange={() => onSelect(o)} />
        {o}
      </label>
    ))}
  </div>
);

export default QuizCard;
