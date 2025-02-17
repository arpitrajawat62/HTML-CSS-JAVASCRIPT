const questions = [
    {
        question: "What is the capital of France?",
        options: ["New York", "Paris", "London", "Dublin"],
        answer: 1
    },
    {
        question: "What is the capital of Ireland?",
        options: ["New York", "Paris", "London", "Dublin"],
        answer: 3
    },
    {
        question: "What is the capital of England?",
        options: ["New York", "Paris", "London", "Dublin"],
        answer: 2
    },
    {
        question: "What is the capital of USA?",
        options: ["New York", "Paris", "London", "Dublin"],
        answer: 0
    }
];

const questionEl = document.getElementById('question');
const options = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = questions[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.options[0];
    b_text.innerText = currentQuizData.options[1];
    c_text.innerText = currentQuizData.options[2];
    d_text.innerText = currentQuizData.options[3];

    options.forEach(option => option.checked = false);
}

function getSelected() {
    let selectedIndex = null;
    
    options.forEach((option, index) => {
        if (option.checked) {
            selectedIndex = index;
        }
    });

    return selectedIndex;
}

submitBtn.addEventListener('click', () => {
    const selectedAnswer = getSelected();

    if (selectedAnswer !== null) {
        if (selectedAnswer === questions[currentQuiz].answer) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < questions.length) {
            loadQuiz();
        } else {
            alert(`You have completed the quiz. Your score is ${score}/${questions.length}`);
        }
    } else {
        alert("Please select an answer before submitting!");
    }
});
