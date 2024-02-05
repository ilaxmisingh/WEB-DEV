const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "Berlin", "Madrid", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: "Mars"
    },
    // Add more questions as needed
];

let currentQuestion = 0;

const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const question = quizData[currentQuestion];
    questionText.innerText = question.question;
    answerButtons.innerHTML = '';

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedAnswer) {
    const question = quizData[currentQuestion];

    if (selectedAnswer === question.correct) {
        // Handle correct answer
        // For simplicity, you can show an alert or update a score here
    }

    // Move to the next question
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        // End of the quiz, you can display a summary or redirect to a result page
        alert("Quiz completed!");
    }
}

function nextQuestion() {
    currentQuestion++;
    showQuestion();
}

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', startQuiz);

