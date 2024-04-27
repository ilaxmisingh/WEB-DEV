// Define quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');

// Function to display current question
function displayQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;

    optionsElement.innerHTML = '';
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsElement.appendChild(button);
    });
}

// Function to check user's answer
function checkAnswer(answer) {
    const q = questions[currentQuestion];
    if (answer === q.answer) {
        score++;
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect!";
    }
    currentQuestion++;

    // Check if quiz is finished
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

// Function to show final result
function showResult() {
    questionElement.textContent = `Quiz Finished! Your Score: ${score}/${questions.length}`;
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
}

// Event listener for submit button
submitButton.addEventListener('click', () => {
    const selectedOption = document.querySelector('input[type=radio]:checked');
    if (selectedOption) {
        checkAnswer(selectedOption.value);
    } else {
        resultElement.textContent = "Please select an option!";
    }
});

// Display first question on page load
displayQuestion();
