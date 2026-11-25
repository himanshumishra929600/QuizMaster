const startForm = document.getElementById("start-form");
const playerNameInput = document.getElementById("player-name");
const nameError = document.getElementById("name-error");

const homeSection = document.getElementById("home");
const quizSection = document.getElementById("quiz");
const resultSection = document.getElementById("result");

const questionText = document.getElementById("question-text");
const questionNumber = document.getElementById("question-number");
const answerOptions = document.getElementById("answer-options");
const answerFeedback = document.getElementById("answer-feedback");
const currentScore = document.getElementById("current-score");
const timerDisplay = document.getElementById("timer");

const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const reviewTableBody = document.getElementById("review-table-body");

const questionBank = [
  {
    question: "Who certifies whether a Bill is a Money Bill in the Lok Sabha?",
    options: [
      "The President",
      "The Speaker of the Lok Sabha",
      "The Prime Minister",
      "The Finance Minister"
    ],
    correctAnswer: "The Speaker of the Lok Sabha",
    explanation: "The Lok Sabha Speaker certifies whether a Bill is a Money Bill."
  },
  {
    question: "Which Article provides for the Finance Commission?",
    options: ["Article 110", "Article 280", "Article 324", "Article 356"],
    correctAnswer: "Article 280",
    explanation: "Article 280 provides for the constitution of a Finance Commission."
  },
  {
    question: "Fundamental Duties were added by which Constitutional Amendment?",
    options: ["24th", "42nd", "44th", "52nd"],
    correctAnswer: "42nd",
    explanation: "The 42nd Amendment Act, 1976 added Fundamental Duties."
  },
  {
    question: "The idea of Directive Principles was borrowed from which Constitution?",
    options: ["Irish", "Canadian", "Australian", "Japanese"],
    correctAnswer: "Irish",
    explanation: "India's Directive Principles were inspired by the Irish Constitution."
  },
  {
    question: "The anti-defection provisions are in which Schedule?",
    options: ["Eighth", "Ninth", "Tenth", "Twelfth"],
    correctAnswer: "Tenth",
    explanation: "The Tenth Schedule contains the anti-defection provisions."
  },
  {
    question: "Which Harappan site is famous for its ancient dockyard?",
    options: ["Kalibangan", "Lothal", "Rakhigarhi", "Banawali"],
    correctAnswer: "Lothal",
    explanation: "Lothal, in present-day Gujarat, is known for its dockyard."
  },
  {
    question: "The Lucknow Pact of 1916 was between which two organisations?",
    options: [
      "Congress and Muslim League",
      "Congress and Hindu Mahasabha",
      "Muslim League and Justice Party",
      "Congress and Swaraj Party"
    ],
    correctAnswer: "Congress and Muslim League",
    explanation: "The Indian National Congress and the Muslim League reached the pact in 1916."
  },
  {
    question: "Who introduced the Permanent Settlement in Bengal in 1793?",
    options: [
      "Lord Wellesley",
      "Lord Cornwallis",
      "Warren Hastings",
      "Lord Dalhousie"
    ],
    correctAnswer: "Lord Cornwallis",
    explanation: "The Permanent Settlement was introduced under Lord Cornwallis in 1793."
  },
  {
    question: "The original Great Stupa at Sanchi is associated with which ruler?",
    options: ["Kanishka", "Harsha", "Ashoka", "Chandragupta II"],
    correctAnswer: "Ashoka",
    explanation: "The original stupa at Sanchi is traditionally associated with Emperor Ashoka."
  },
  {
    question: "Indian Standard Time is based on which longitude?",
    options: ["75°30′ E", "82°30′ E", "90° E", "68°7′ E"],
    correctAnswer: "82°30′ E",
    explanation: "The 82°30′ E meridian is India's Standard Meridian."
  },
  {
    question: "Western Disturbances mainly bring winter rainfall to which region?",
    options: [
      "North-western India",
      "Tamil Nadu coast",
      "North-east India",
      "Deccan Plateau"
    ],
    correctAnswer: "North-western India",
    explanation: "Western Disturbances bring winter rain to north-western India."
  },
  {
    question: "Black soil is especially suitable for growing which crop?",
    options: ["Jute", "Cotton", "Tea", "Coconut"],
    correctAnswer: "Cotton",
    explanation: "Black soil retains moisture and is especially suitable for cotton."
  },
  {
    question: "The Narmada flows through a rift valley between which ranges?",
    options: [
      "Aravalli and Western Ghats",
      "Vindhya and Satpura",
      "Himalaya and Shivalik",
      "Eastern Ghats and Nilgiri"
    ],
    correctAnswer: "Vindhya and Satpura",
    explanation: "The Narmada flows west through a rift valley between the Vindhya and Satpura ranges."
  },
  {
    question: "The Ramsar Convention is primarily concerned with conserving what?",
    options: ["Deserts", "Wetlands", "Mountains", "Coral islands"],
    correctAnswer: "Wetlands",
    explanation: "The Ramsar Convention focuses on wetlands and their wise use."
  },
  {
    question: "Kaziranga National Park is especially known for which animal?",
    options: [
      "Asiatic lion",
      "One-horned rhinoceros",
      "Snow leopard",
      "Wild ass"
    ],
    correctAnswer: "One-horned rhinoceros",
    explanation: "Kaziranga in Assam is famous for its one-horned rhinoceros."
  },
  {
    question: "Coral bleaching is commonly triggered by prolonged exposure to what?",
    options: [
      "Lower sea temperatures",
      "Higher sea temperatures",
      "Stronger tides only",
      "Reduced sunlight only"
    ],
    correctAnswer: "Higher sea temperatures",
    explanation: "Prolonged heat stress can cause corals to lose the algae they depend on."
  },
  {
    question: "“Blue carbon” is mainly stored by which ecosystems?",
    options: [
      "Mangroves, seagrasses and salt marshes",
      "Deserts and grasslands",
      "Alpine forests",
      "Freshwater lakes only"
    ],
    correctAnswer: "Mangroves, seagrasses and salt marshes",
    explanation: "These coastal ecosystems capture and store carbon."
  },
  {
    question: "Fiscal deficit broadly equals total expenditure minus which receipts?",
    options: [
      "Revenue receipts and non-debt capital receipts",
      "Tax revenue only",
      "Borrowings only",
      "Interest payments only"
    ],
    correctAnswer: "Revenue receipts and non-debt capital receipts",
    explanation: "Fiscal deficit measures the funding gap after these receipts are counted."
  },
  {
    question: "The repo rate is most directly connected to which transaction?",
    options: [
      "RBI lending to banks against eligible securities",
      "Government collecting income tax",
      "Banks issuing debit cards",
      "Companies issuing shares"
    ],
    correctAnswer: "RBI lending to banks against eligible securities",
    explanation: "The repo rate is the rate at which the RBI lends short-term funds to banks against securities."
  },
  {
    question: "GDP measured at constant prices is commonly called what?",
    options: ["Nominal GDP", "Real GDP", "Fiscal GDP", "Potential tax"],
    correctAnswer: "Real GDP",
    explanation: "Constant prices adjust for price changes, so this measure is called real GDP."
  }
];

let quizQuestions = [];
let selectedAnswers = [];
let timeRemaining = [];
let currentQuestionIndex = 0;
let score = 0;
let timerId = null;

function getRandomQuestions() {
  const shuffledQuestions = [...questionBank];

  for (let i = shuffledQuestions.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    const temporaryQuestion = shuffledQuestions[i];
    shuffledQuestions[i] = shuffledQuestions[randomIndex];
    shuffledQuestions[randomIndex] = temporaryQuestion;
  }

  return shuffledQuestions.slice(0, 10);
}

function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

function disableAnswers() {
  const buttons = answerOptions.querySelectorAll("button");

  buttons.forEach(function (button) {
    button.disabled = true;
  });
}

function updateScore() {
  score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    if (selectedAnswers[i] === quizQuestions[i].correctAnswer) {
      score = score + 1;
    }
  }

  currentScore.textContent =
    "Score so far: " + score + " / " + quizQuestions.length;
}

function startTimer() {
  stopTimer();
  timerDisplay.textContent = timeRemaining[currentQuestionIndex];

  if (
    selectedAnswers[currentQuestionIndex] !== null ||
    timeRemaining[currentQuestionIndex] <= 0
  ) {
    return;
  }

  timerId = setInterval(function () {
    timeRemaining[currentQuestionIndex] =
      timeRemaining[currentQuestionIndex] - 1;

    timerDisplay.textContent = timeRemaining[currentQuestionIndex];

    if (timeRemaining[currentQuestionIndex] <= 0) {
      stopTimer();
      disableAnswers();
      answerFeedback.textContent = "Time is up. Use Next to continue.";
    }
  }, 1000);
}

function showQuestion(index) {
  stopTimer();
  currentQuestionIndex = index;

  const question = quizQuestions[currentQuestionIndex];
  const savedAnswer = selectedAnswers[currentQuestionIndex];

  questionText.textContent = question.question;
  questionNumber.textContent =
    "Question " + (currentQuestionIndex + 1) +
    " of " + quizQuestions.length;

  answerFeedback.textContent = "";
  answerOptions.replaceChildren();

  previousButton.disabled = currentQuestionIndex === 0;

  if (currentQuestionIndex === quizQuestions.length - 1) {
    nextButton.textContent = "Finish Quiz";
  } else {
    nextButton.textContent = "Next";
  }

  question.options.forEach(function (optionText) {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = optionText;

    if (savedAnswer !== null || timeRemaining[currentQuestionIndex] <= 0) {
      button.disabled = true;
    }

    if (savedAnswer !== null && optionText === question.correctAnswer) {
      button.classList.add("correct-answer");
    }

    if (
      savedAnswer !== null &&
      optionText === savedAnswer &&
      savedAnswer !== question.correctAnswer
    ) {
      button.classList.add("wrong-answer");
    }

    button.addEventListener("click", function () {
      if (
        selectedAnswers[currentQuestionIndex] !== null ||
        timeRemaining[currentQuestionIndex] <= 0
      ) {
        return;
      }

      selectedAnswers[currentQuestionIndex] = optionText;
      stopTimer();
      disableAnswers();

      answerOptions.querySelectorAll("button").forEach(function (answerButton) {
        if (answerButton.textContent === question.correctAnswer) {
          answerButton.classList.add("correct-answer");
        }
      });

      if (optionText === question.correctAnswer) {
        button.classList.add("correct-answer");
        answerFeedback.textContent = "Correct! " + question.explanation;
      } else {
        button.classList.add("wrong-answer");
        answerFeedback.textContent =
          "Incorrect. Correct answer: " +
          question.correctAnswer +
          ". " +
          question.explanation;
      }

      updateScore();
    });

    answerOptions.appendChild(button);
  });

  if (savedAnswer !== null) {
    if (savedAnswer === question.correctAnswer) {
      answerFeedback.textContent = "Correct! " + question.explanation;
    } else {
      answerFeedback.textContent =
        "Incorrect. Correct answer: " +
        question.correctAnswer +
        ". " +
        question.explanation;
    }
  } else if (timeRemaining[currentQuestionIndex] <= 0) {
    answerFeedback.textContent = "Time is up. Use Next to continue.";
  }

  startTimer();
}

function addReviewCell(row, text) {
  const cell = document.createElement("td");
  cell.textContent = text;
  row.appendChild(cell);
}

function finishQuiz() {
  stopTimer();
  updateScore();

  quizSection.hidden = true;
  resultSection.hidden = false;

  finalScore.textContent =
    "Your score: " + score + " / " + quizQuestions.length;

  const savedBestScore =
    Number(localStorage.getItem("quizMasterBestScore")) || 0;

  if (score > savedBestScore) {
    localStorage.setItem("quizMasterBestScore", score);
    resultMessage.textContent = "New best score! Your best is " + score + ".";
  } else {
    resultMessage.textContent =
      "Your best score is " + savedBestScore + " / 10.";
  }

  reviewTableBody.replaceChildren();

  for (let i = 0; i < quizQuestions.length; i++) {
    const question = quizQuestions[i];
    const selectedAnswer = selectedAnswers[i];
    const row = document.createElement("tr");

    addReviewCell(row, question.question);
    addReviewCell(row, selectedAnswer || "Not answered");
    addReviewCell(row, question.correctAnswer);

    if (selectedAnswer === question.correctAnswer) {
      addReviewCell(row, "Correct");
    } else {
      addReviewCell(row, "Incorrect");
    }

    reviewTableBody.appendChild(row);
  }
}

startForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const playerName = playerNameInput.value.trim();

  if (playerName.length === 0) {
    nameError.textContent = "Please enter your name.";
    playerNameInput.focus();
    return;
  }

  if (playerName.length < 2) {
    nameError.textContent = "Name must be at least 2 characters.";
    playerNameInput.focus();
    return;
  }

  nameError.textContent = "";

  quizQuestions = getRandomQuestions();
  selectedAnswers = Array(quizQuestions.length).fill(null);
  timeRemaining = Array(quizQuestions.length).fill(15);
  currentQuestionIndex = 0;
  score = 0;

  currentScore.textContent = "Score so far: 0 / " + quizQuestions.length;

  homeSection.hidden = true;
  quizSection.hidden = false;
  resultSection.hidden = true;

  showQuestion(0);
});

previousButton.addEventListener("click", function () {
  if (currentQuestionIndex > 0) {
    showQuestion(currentQuestionIndex - 1);
  }
});

nextButton.addEventListener("click", function () {
  if (currentQuestionIndex < quizQuestions.length - 1) {
    showQuestion(currentQuestionIndex + 1);
  } else {
    finishQuiz();
  }
});

restartButton.addEventListener("click", function () {
  stopTimer();

  resultSection.hidden = true;
  quizSection.hidden = true;
  homeSection.hidden = false;

  startForm.reset();
});