import React, { useState } from 'react';
import quizPageStyle from '../QuizPageStyle';
import { useNavigate } from 'react-router-dom';
import my_questions from '../model/basic_questions.json';
import quizController from '../controller/controller.js';

function Quiz({ onSubmit }) {
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const handleAnswerSelect = (questionId, isCorrect) => {
        setAnswers({
            ...answers,
            [questionId]: isCorrect
        });
    };

    const handleSubmit = () => {
        // Pass all answers to controller for scoring
        const results = quizController.scoreAnswers(answers);
        onSubmit(results);
        navigate('/results');
    };

    return (
        <div style={quizPageStyle}>
            <h1>Quiz</h1>
            {my_questions.map((question) => (
                <div key={question.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid white' }}>
                    <h3>{question.question}</h3>
                    {question.answers.map((answer, index) => (
                        <div key={index} style={{ marginBottom: '10px' }}>
                            <label>
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    onChange={() => handleAnswerSelect(question.id, answer.isCorrect)}
                                />
                                {answer.answer}
                            </label>
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleSubmit} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>Done</button>
        </div>
    );
}

export default Quiz;