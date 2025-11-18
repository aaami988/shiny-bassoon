import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz.js';
import React, { useState } from 'react';
import Results from './components/results.js';

function App() {
  const [quizResults, setQuizResults] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz onSubmit={setQuizResults} />} />
        <Route path="/results" element={<Results results={quizResults} />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
