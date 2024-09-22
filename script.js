const questions = [
    {
        question: "1. Mi a következő szám: 2, 4, 8, 16, ...?",
        answers: {
            a: '20',
            b: '24',
            c: '32',
            d: '36'
        },
        correct: 'c'
    },
    {
        question: "2. Melyik szó nem illik a sorba: alma, körte, szőlő, autó?",
        answers: {
            a: 'alma',
            b: 'körte',
            c: 'szőlő',
            d: 'autó'
        },
        correct: 'd'
    },
    {
        question: "3. Mi az 5 + 3 × 2?",
        answers: {
            a: '11',
            b: '16',
            c: '10',
            d: '8'
        },
        correct: 'a'
    }
];

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter}: ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = document.querySelectorAll('.answers');
    let score = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            score++;
        }
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `Eredményed: ${score} / ${questions.length}`;
}

buildQuiz();
