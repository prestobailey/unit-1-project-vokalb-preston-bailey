import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Lessons from './pages/Lessons.jsx';
import AlphabetLesson from './pages/AlphabetLesson.jsx';
import GreetingsLesson from './pages/GreetingsLesson.jsx';
import Quiz from './pages/Quiz';
import About from './pages/About.jsx';
import './styles.css';

// If you tilt your head to the right it kind of resembles a rocket
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/alphabet" element={<AlphabetLesson />} />
          <Route path="/lessons/greetings" element={<GreetingsLesson />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
