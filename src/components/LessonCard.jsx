import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LessonCard.css';

// Reuable lesson card component
const LessonCard = ({ title, description, path }) => {
  const nav = useNavigate();
  return (
    <div className="lesson-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => nav(path)}>Start Lesson</button>
    </div>
  );
};

export default LessonCard;
