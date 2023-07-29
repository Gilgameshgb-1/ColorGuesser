// JavaScript to handle the popup functionality
const playButton = document.getElementById("play-button");
const modal = document.getElementById("playModal");
const closeModal = document.getElementById("closeModal");
const endlessMode = document.getElementById("endlessMode");
const tenQuestionsMode = document.getElementById("tenQuestions");

// Function to show the modal
function showModal() {
  modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  modal.style.display = "none";
}

function redirectEndless() {
  window.location.href = "../quizMenu/quiz.html?mode=endless";
}

function redirectTenQuestions() {
  window.location.href = "../quizMenu/quiz.html?mode=ten-questions";
}

playButton.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);
endlessMode.addEventListener("click", redirectEndless);
tenQuestionsMode.addEventListener("click", redirectTenQuestions);
