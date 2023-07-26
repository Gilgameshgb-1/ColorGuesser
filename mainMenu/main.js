document.getElementById("endless-mode").addEventListener("click", function () {
  window.location.href = "quiz.html?mode=endless";
});

document
  .getElementById("ten-questions-mode")
  .addEventListener("click", function () {
    window.location.href = "quiz.html?mode=ten-questions";
  });
