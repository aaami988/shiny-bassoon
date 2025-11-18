/*TODO: "refactor the scoring functionality into a controller folder"
"build on your current quiz system by adding a page (e.g., /results, that displays
 the user's total score after they submit their answers. This page should 
 summarize how many questions were answered correctly out of the total number 
 of questions.)"
`work from the provided react quiz system (2024_simple_quiz-main)



TODO: switch from alerts to a results page that shows the score summary*/ //done?
        
        
            
//count - for total questions answered
//score - for total *correct* answers


class QuizController {
    constructor() {
        this.score = 0;
        this.count = 0;
    }

    incrementScore() {
        this.score += 1;
        this.count += 1;
        //alert("You are correct!");
    }

    dontIncrementScore() {
        this.count += 1;
        //alert("Sorry - not correct"); //final page instead of alerts
    }

    resetScore() {
        this.score = 0;
        this.count = 0;
    }

    scoreAnswers(answers) {
        this.resetScore();
        
        for (const questionId in answers) {
            if (answers[questionId] === true) {
                this.incrementScore();
            } else {
                this.dontIncrementScore();
            }
        }
        
        return { score: this.score, count: this.count };
    }
}

var quizController = new QuizController();
export default quizController;