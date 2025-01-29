const quizData = {
    html: [
        { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Hyperlinks Text Markup Language", "Home Tool Markup Language", "Hyper Transfer Markup Language"], answer: 0 },
        { question: "Which HTML tag is used to define an internal style sheet?", options: ["<css>", "<style>", "<script>", "<link>"], answer: 1 }
    ],
    css: [
        { question: "Which property is used to change the background color?", options: ["color", "background-color", "bgcolor", "background"], answer: 1 },
        { question: "Which CSS property controls the text size?", options: ["text-size", "font-style", "font-size", "text-style"], answer: 2 }
    ],
    javascript: [
        { question: "Which company developed JavaScript?", options: ["Microsoft", "Apple", "Netscape", "Google"], answer: 2 },
        { question: "What is used to declare a variable in JavaScript?", options: ["var", "let", "const", "All of the above"], answer: 3 }
    ],
    react: [
        { question: "What is JSX in React?", options: ["Java XML", "JavaScript XML", "JSON XML", "None of the above"], answer: 1 },
        { question: "What is the command to create a new React app?", options: ["react-new myApp", "npm create-react-app myApp", "npx create-react-app myApp", "create-react myApp"], answer: 2 }
    ]
};

let currentCategory, currentQuestionIndex, score, timeLeft, timer;

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("score-value").innerText = score;
    document.getElementById("category-selection").classList.add("hidden");
    document.getElementById("quiz-box").classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timer);
    if (currentQuestionIndex >= quizData[currentCategory].length) {
        endQuiz();
        return;
    }

    let questionData = quizData[currentCategory][currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    
    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questionData.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.classList.add("category-btn");
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    timeLeft = 15;
    document.getElementById("time-left").innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time-left").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selectedIndex) {
    let correctAnswer = quizData[currentCategory][currentQuestionIndex].answer;
    if (selectedIndex === correctAnswer) {
        score += 10;
    } else {
        score -= 5;
    }
    document.getElementById("score-value").innerText = score;
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("final-score").innerText = score;
}

function restartQuiz() {
    document.getElementById("result-box").classList.add("hidden");
    document.getElementById("category-selection").classList.remove("hidden");
}
