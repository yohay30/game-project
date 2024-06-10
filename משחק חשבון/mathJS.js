"use strict";
document.querySelector("button").addEventListener("click", function () {
  document.querySelector("#tip").style.display = "none";
  document.querySelector(".gameM").style.display = "block";
  generateQuestion();
});

const answers = Array.from(document.querySelectorAll("#A > div"));

answers.forEach((answer) => {
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

let counter = 0;
let n = "ניקוד";

// קבלת המשתמש הנוכחי מ-Local Storage
const current = JSON.parse(localStorage.getItem("current") || "[]");
const userIndex = current.length - 1; // מקבל את המשתמש האחרון שנרשם
const user = current[userIndex] || { math: 0 };

// הצגת הניקוד הנוכחי
document.querySelector("#nickodM").textContent = `  ${n}   ${user.math} `;

function checkAnswer(selectedAnswer) {
  const selectedValue = parseInt(selectedAnswer.textContent);
  const [num1, num2] = document
    .querySelector("#Q")
    .textContent.split(" + ")
    .map(Number);
  const correctAnswer = num1 + num2;

  if (selectedValue === correctAnswer) {
    counter += 10;
    user.math += 10;
    updateUserData(user);
    displayFeedback("correct");
  } else {
    counter -= 5;
    user.math -= 5;
    updateUserData(user);
    displayFeedback("wrong");
  }
}

function updateUserData(user) {
  current[userIndex] = user; // עדכון המערך עם המשתמש המעודכן
  localStorage.setItem("current", JSON.stringify(current)); // שמירת המערך המעודכן
  document.querySelector("#nickodM").textContent = `  ${n}   ${user.math} `;
}

function displayFeedback(type) {
  if (type === "correct") {
    document.querySelector("#answer").style.display = "block";
    document.querySelector("#false").style.display = "none";
    document.querySelector("#nickodM").style.color = "green";
    document.querySelector("#nickodM").style.fontSize = "40px";
    setTimeout(generateQuestion, 1000); // מעבר לשאלה הבאה אחרי שנייה
  } else {
    document.querySelector("#false").style.display = "block";
    document.querySelector("#answer").style.display = "none";
    document.querySelector("#nickodM").style.color = "red";
    document.querySelector("#nickodM").style.fontSize = "35px";
  }
}
