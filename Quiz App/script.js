const quizData = [{
    question: "Javascript is an _______ language?",
    a: "Object-oriented",
    b: "Object-Based",
    c: "Procedural",
    d: "None of the above",
    correct: "a",
}, {
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    a: "stringify()",
    b: "parse()",
    c: "convert()",
    d: "None of the above",
    correct: "a",
}, {
    question: "Which of the following are closures in Javascript?",
    a: "Variables",
    b: "Functions",
    c: "Objects",
    d: "All of the above",
    correct: "d",
}, {
    question: "What year was JavScript launched?",
    a: "1994",
    b: "1995",
    c: "1997",
    d: "none of the above",
    correct: "b",
}
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
deselectAnswer();

const currentQuizData = quizData[currentQuiz];

questionEl.innerText = currentQuizData.question;
a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;
}

function deselectAnswer() {
answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
let answer;

answerEls.forEach(answerEl => {
    if(answerEl.checked) {
       answer = answerEl.id;
    }
});

return answer;
}

submitBtn.addEventListener('click', () => {
const answer = getSelected();

if(answer) {
    if(answer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    } else { 
        quiz.innerHTML = `
        <h2> You answered correctly at ${score}/${quizData.length} questions correctly</h2>

        <button onclick="location.reload()">
        Reload
        </button>
        `
    }
}
})
