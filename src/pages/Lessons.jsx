import React from 'react';
import LessonCard from '../components/LessonCard.jsx';
import './Lessons.css';

const Lessons = () => {
  const lessons = [
    {
      title: 'Albanian Alphabet',
      description: 'Learn how to pronounce the letters of the Albanian alphabet.',
      path: '/lessons/alphabet',
    },
    {
      title: 'Basic Greetings',
      description: 'Common ways to say hello, goodbye, and ask how someone is.',
      path: '/lessons/greetings',
    },
  ];

  return (
    <div className="lessons-page">
      <h2>Lessons</h2>
      <div className="lesson-grid">
        {lessons.map((lesson, idx) => (
          <LessonCard key={idx} {...lesson} />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
