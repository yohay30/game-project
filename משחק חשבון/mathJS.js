document.querySelector("button").addEventListener("click", function () {
  document.querySelector("#tip").style.display = "none";
  document.querySelector(".gameM").style.display = "block";
  generateQuestion();
});

const answers = Array.from(document.querySelectorAll("#A >div"));

answers.forEach((answers) => {
  answer.addEventListener("click", function () {
    checkAnswer(answer);
  });
});

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const correctAnswer = num1 + num2;

  document.querySelector("#Q").textContent = `${num1} + ${num2}`;

  const correctPosition = Math.floor(Math.random() * 4);
  answers.forEach((answer, index) => {
    if (index === correctPosition) {
      answer.textContent = correctAnswer;
    } else {
      let wrongAnswer;
      do {
        wrongAnswer = Math.floor(Math.random() * 19);
      } while (wrongAnswer === correctAnswer);
      answer.textContent = wrongAnswer;
    }
  });
}

function checkAnswer(selectedAnswer) {
  const selectedValue = parseInt(selectedAnswer.textContent);
  const [num1, num2] = document
    .querySelector("#Q")
    .textContent.split(" + ")
    .map(Number);
  const correctAnswer = num1 + num2;

  if (selectedValue === correctAnswer) {
    alert("נכון! כל הכבוד!");
  } else {
    alert("לא נכון. נסו שוב!");
  }
}
