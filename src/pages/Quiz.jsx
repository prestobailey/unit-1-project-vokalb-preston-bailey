import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizCard from '../components/QuizCard.jsx';
import { quizzes } from '../data/quizzes.js';
import './Quiz.css';

const Quiz = () => {
  const { lessonId } = useParams();
  const questions = quizzes[lessonId] || [];
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (i, val) => setAnswers({ ...answers, [i]: val });
  const handleSubmit = () => setSubmitted(true);
  const score = questions.reduce((acc, q, i) => (answers[i] === q.answer ? acc + 1 : acc), 0);

  return (
    <div className="quiz-page">
      <h2>Quiz: {lessonId}</h2>
      {questions.map((q, i) => (
        <QuizCard key={i} question={q.question} options={q.options} selected={answers[i]} onSelect={val => handleSelect(i, val)} />
      ))}
      {!submitted ? <button onClick={handleSubmit}>Submit Quiz</button> : <p>Your score: {score}/{questions.length}</p>}
    </div>
  );
};

export default Quiz;
