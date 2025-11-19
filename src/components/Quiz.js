import React from 'react';
import quizPageStyle from '../QuizPageStyle';
import my_state from './my_state';
import my_questions from '../model/basic_questions.json';
import { scoringController } from '../controllers/scoringController';

class Quiz extends React.Component {

    state = {
        score: 0,
        count: 0
    };
    
    incrementScore = () => {
        const result = scoringController.incrementScore(this.state.score, this.state.count);
        this.setState({
            score: result.score,
            count: result.count
        });
        alert(result.message);
    };

    dontIncrementScore = () => {
        const result = scoringController.dontIncrementScore(this.state.count);
        this.setState({
            count: result.count
        });
        alert(result.message);
    };

    handleSubmit = () => {
        my_state.my_score = this.state.score;
        my_state.my_count = this.state.count;
        
        const finalScore = scoringController.calculateFinalScore(this.state.score, this.state.count);
        alert(finalScore);
    }
    
    render() {
        return(
           <div style={quizPageStyle}>
            <h1>My Questions</h1>
                {my_questions.map((quest) => (
                <div id="outer-div"> 
                    <h2>{quest["question"]}</h2>
                        {quest["answers"].map((ans) => (
                            <div id="mid-div">
                                <label>
                                <input  
                                        type = "radio"
                                        name = { quest["id"] }
                                        key = { quest["id"] }
                                        onClick = { ans["isCorrect"] ? this.incrementScore : this.dontIncrementScore }
                                        value = { ans["isCorrect"] } /> 
                                    { ans["answer"] }
                                </label> 
                                <br />
                            </div>
                        ))}
                    
                </div>
                ))}
                 <br />
                <button onClick={this.handleSubmit} >Done</button>
        </div>
        );
    }
}

export default Quiz;