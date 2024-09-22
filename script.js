const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const timerElement = document.getElementById('timer');

// Kérdések - formák és sorozatok
const myQuestions = [
  {
    question: "1. Melyik forma illik a sorozatba?",
    answers: {
      a: "Kör",
      b: "Négyzet",
      c: "Háromszög",
      d: "Ötszög"
    },
    correctAnswer: "b"
  },
  {
    question: "2. Melyik szám következik a sorozatban? 2, 4, 8, __",
    answers: {
      a: "10",
      b: "12",
      c: "16",
      d: "14"
    },
    correctAnswer: "c"
  },
  {
    question: "3. Melyik forma a tükörképe az előzőnek?",
    answers: {
      a: "Kör",
      b: "Négyzet",
      c: "Téglalap",
      d: "Trapéz"
    },
    correctAnswer: "d"
  },
  {
    question: "4. Melyik sorozat szabályos?",
    answers: {
      a: "1, 3, 5, 7",
      b: "2, 5, 8, 10",
      c: "1, 2, 4, 8",
      d: "3, 6, 9, 13"
    },
    correctAnswer: "a"
  },
  {
    question: "5. Melyik alakzatot kell forgatni a szimmetriához?",
    answers: {
      a: "Kör",
      b: "Háromszög",
      c: "Négyzet",
      d: "Ötszög"
    },
    correctAnswer: "b"
  }
];

// Teszt kirajzolása
function buildQuiz(){
  const output = [];

  myQuestions.forEach(
    (currentQuestion, questionNumber) => {
      const answers = [];
      for(letter in currentQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizContainer.innerHTML = output.join('');
}

// Eredmények kiértékelése
function showResults(){
  const answerContainers = quizContainer.querySelectorAll('.answers');
  let numCorrect = 0;

  myQuestions.forEach( (currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer === currentQuestion.correctAnswer){
      numCorrect++;
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    else{
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = `${numCorrect} helyes válasz az 5-ből.`;
}

// 20 perces időzítő
let timeLeft = 1200;
function startTimer() {
  const timerInterval = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerElement.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    timeLeft--;

    if(timeLeft < 0) {
      clearInterval(timerInterval);
      showResults();
      alert("Lejárt az idő! Az eredmény megtekinthető.");
    }
  }, 1000);
}

buildQuiz();
startTimer();

submitButton.addEventListener('click', showResults);
