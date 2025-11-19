export const scoringController = {
  incrementScore: (currentScore, currentCount) => {
    return {
      score: currentScore + 1,
      count: currentCount + 1,
      message: "You are correct!"
    };
  },

  dontIncrementScore: (currentCount) => {
    return {
      count: currentCount + 1,
      message: "Sorry - not correct"
    };
  },

  calculateFinalScore: (score, count) => {
    return `Total score: ${score}/${count}`;
  }
}