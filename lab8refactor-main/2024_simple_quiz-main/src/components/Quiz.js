import React from 'react';
import quizPageStyle from '../QuizPageStyle';
import { useNavigate } from 'react-router-dom';
import my_state from './my_state';

import  my_questions from '../model/basic_questions.json';

import quizController from '../controller/controller.js';


class Quiz extends React.Component {

    state = {
        answers: {}
    };
    //current score system; refactor into controller
    /*
    incrementScore = () => {
        this.setState({
            score: this.state.score + 1
        });
        this.setState({
            count: this.state.count + 1
        });
        alert("You are correct!"); // could be executed before the setStates are done!
    };

    dontIncrementScore = () => {
       this.setState({
            count: this.state.count + 1
        });
        alert("Sorry - not correct");
    };*/
    



    state = {
        answers: {}, // Store selected answers: { questionId: isCorrect }
    };

    handleAnswerSelect = (questionId, isCorrect) => {
        this.setState({
            answers: { ...this.state.answers, [questionId]: isCorrect }
        });
    };



    handleSubmit = () => {
        // Pass all answers to controller for scoring
        const results = quizController.scoreAnswers(this.state.answers);
        this.props.onSubmit(results);
        this.props.navigate('/results');
    };

    render() {
        return (
            <div>
                {/* Render questions with handleAnswerSelect callback */}
                <button onClick={this.handleSubmit}>Done</button>
            </div>
        );
    }
}

export default Quiz;