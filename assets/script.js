var time = document.querySelector(".timer");
var score = document.querySelector("#score");
var secondsLeft = 50;

const start = document.querySelector("#start");

const codersIntro = document.querySelector("#challenge-begins");

var questionsEl = document.querySelector(".all-question");

let questionEl = document.querySelector("#question");
const correctWrong = document.querySelector("#right-wrong");
let questionCount = 0;

const finalEl = document.querySelector("#final-score");
let initialsInput = document.querySelector("#initials");

const highscoresEl = document.querySelector("#high-scores");
let scoreListEl = document.querySelector(".score-list");
let scoreList = [];

const ansBtn = document.querySelectorAll("button.answer-btn")

let submitScrBtn = document.querySelector("#submit-score");
let clearScrBtn = document.querySelector("#clearScores");
let viewScrBtn = document.querySelector("#view-scores");
let goBackBtn = document.querySelector("#goBack");


const ans1Btn = document.querySelector("#answer-1");
const ans2Btn = document.querySelector("#answer-2");
const ans3Btn = document.querySelector("#answer-3");
const ans4Btn = document.querySelector("#answer-4");


const questions = [ 
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["1. <js>", "2. <scripting>", "3. <script>", "4. <javascript>"],
        correctAnswer: "2"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: ["1. alertBox('Hello World');", "2. msg('Hello World');", "3. msgBox('Hello World');", "4. alert('Hello World');"],
        correctAnswer: "3"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["1. if i == 5 then", "2. if i = 5 then", "3. if (i == 5)", "4. if i = 5"],
        correctAnswer: "2"
    },
    {
        question: "How does a FOR loop start?",
        answers: ["1. for (i <= 5; i++)", "2. for (i = 0; i <= 5)", "3. for i = 1 to 5", "4. for (i = 0; i <= 5; i++)"],
        correctAnswer: "3"
    },
    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        answers: ["1. if(i<>5)", "2. if i=!5 then", "3. if(i!=5)", "4. if i <>5"],
        correctAnswer: "2"
    }
];

function startQuiz() {
    codersIntro.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}
function checkAnswer(event) {
    event.preventDefault();

    correctWrong.style.display = "block";
    let p = document.createElement("p");
    correctWrong.appendChild(p);

    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } 
   
    else if (questions[questionCount].correctAnswer !== event.target.value) {
        secondsLeft = secondsLeft - 10;
        p.textContent = "Wrong!";
    }
    
    if (questionCount < questions.length) {
        questionCount++;
    }
    setQuestion(questionCount);
}