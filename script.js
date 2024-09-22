const questions = [
    {
        question: "1. Mi a következő szám: 3, 6, 9, 12, ...?",
        answers: {
            a: '15',
            b: '18',
            c: '21',
            d: '24'
        },
        correct: 'b',
        category: "Logikai gondolkodás"
    },
    {
        question: "2. Melyik szó nem illik a sorba: alma, körte, szőlő, róka?",
        answers: {
            a: 'alma',
            b: 'körte',
            c: 'szőlő',
            d: 'róka'
        },
        correct: 'd',
        category: "Nyelvi készségek"
    },
    {
        question: "3. Melyik forma nem illik a többi közé?",
        answers: {
            a: 'kör',
            b: 'háromszög',
            c: 'térd',
            d: 'négyzet'
        },
        correct: 'c',
        category: "Térbeli érzékelés"
    },
    {
        question: "4. Mi következik: A, B, C, ...?",
        answers: {
            a: 'D',
            b: 'E',
            c: 'F',
            d: 'G'
        },
        correct: 'a',
        category: "Logikai gondolkodás"
    },
    {
        question: "5. Hogyan mondod angolul, hogy 'kutya'?",
        answers: {
            a: 'dog',
            b: 'cat',
            c: 'mouse',
            d: 'bird'
        },
        correct: 'a',
        category: "Nyelvi készségek"
    },
    // ... (itt további 15 kérdést adhatsz hozzá)
];

let timeLimit = 1200; // 20 perc
let timerId;

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
            <div class="
