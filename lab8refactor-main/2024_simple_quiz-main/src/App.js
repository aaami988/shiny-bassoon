import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quiz from './components/Quiz.js';
import React from 'react';
import Controller from './controller/controller.js';
import Results from './components/Results';

function App() {
  const [quizResults, setQuizResults] = React.useState(null);

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
