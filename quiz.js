function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector('input[name="quiz"]:checked');
  if (userAnswer) {
    const userAnswerValue = userAnswer.value; 
    const feedbackElement = document.getElementById("feedback");
    if (userAnswerValue === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
} 
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
