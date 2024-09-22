const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const timerElement = document.getElementById('timer');

// Sample questions
const myQuestions = [
  {
    question: "1. Which shape comes next in the sequence?",
    image: "/mnt/data/Q1-01.png", // Path to the first question image
    answers: {
      a: "<img src='/mnt/data/a.png' alt='Answer A' />",
      b: "<img src='/mnt/data/c.png' alt='Answer B' />",
      c: "<img src='/mnt/data/e.png' alt='Answer C' />"
    },
    correctAnswer: "b" // Assuming "b" is the correct answer
  }
  // Additional questions can go here...
];

function buildQuiz() {
    const output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <img src="${currentQuestion.image}" alt="Shape Sequence Question" style="width: 300px;">
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let correctAnswers = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            correctAnswers++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = `You got ${correctAnswers} out of ${myQuestions.length} correct.`;
}

buildQuiz();
