//page for displaying results
import React from 'react';
import quizPageStyle from '../QuizPageStyle';


const Results = ({ results }) => {
  return (
    <div style={quizPageStyle}>
      <h1>Quiz Results</h1>
      <p>You answered {results.score} out of {results.count} questions correctly.</p>
      <button onClick={() => window.location.href = '/'}>Take Quiz Again</button>
    </div>
  );
}


export default Results;
