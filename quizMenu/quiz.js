const colors = [
  {
    name: "Black",
    value: "#000000",
    description: "The color of darkness and absence of light.",
  },
  {
    name: "Navy",
    value: "#000080",
    description: "A dark shade of blue often used in naval uniforms.",
  },
  {
    name: "Dark Blue",
    value: "#00008B",
    description: "A deep and intense shade of blue.",
  },
  {
    name: "Medium Blue",
    value: "#0000CD",
    description: "A medium-toned shade of blue.",
  },
  {
    name: "Blue",
    value: "#0000FF",
    description: "The color of the sky and ocean.",
  },
  {
    name: "Dark Green",
    value: "#006400",
    description: "A deep shade of green resembling forest foliage.",
  },
  {
    name: "Green",
    value: "#008000",
    description: "The color of most plants and vegetation.",
  },
  {
    name: "Teal",
    value: "#008080",
    description: "A bluish-green color often seen in tropical seas.",
  },
  {
    name: "Dark Cyan",
    value: "#008B8B",
    description: "A dark shade of cyan, a mix of blue and green.",
  },
  {
    name: "Deep Sky Blue",
    value: "#00BFFF",
    description: "A bright and vibrant sky blue color.",
  },
  {
    name: "Dark Turquoise",
    value: "#00CED1",
    description: "A deep bluish-green color resembling turquoise gemstones.",
  },
  {
    name: "Medium Spring Green",
    value: "#00FA9A",
    description: "A medium-toned green with a hint of blue.",
  },
  {
    name: "Lime",
    value: "#00FF00",
    description: "A vivid green color often associated with fresh limes.",
  },
  {
    name: "Spring Green",
    value: "#00FF7F",
    description: "A lively green color reminiscent of new leaves in spring.",
  },
  {
    name: "Aqua",
    value: "#00FFFF",
    description: "A refreshing blue-green color like tropical waters.",
  },
  {
    name: "Cyan",
    value: "#00FFFF",
    description: "A bright and pure blue-green color.",
  },
  {
    name: "Midnight Blue",
    value: "#191970",
    description: "A dark blue color resembling the night sky.",
  },
  {
    name: "Dodger Blue",
    value: "#1E90FF",
    description: "A bright and energetic blue color.",
  },
  {
    name: "Light Sea Green",
    value: "#20B2AA",
    description: "A light, bluish-green color like shallow seawater.",
  },
  {
    name: "Forest Green",
    value: "#228B22",
    description: "A rich green color found in dense forests.",
  },
  {
    name: "Sea Green",
    value: "#2E8B57",
    description: "A green color inspired by the hues of the sea.",
  },
  {
    name: "Dark Slate Gray",
    value: "#2F4F4F",
    description: "A dark gray color with a slight blueish tone.",
  },
  {
    name: "Dark Slate Grey",
    value: "#2F4F4F",
    description: "A dark grey color with a slight blueish tone.",
  },
  {
    name: "Lime Green",
    value: "#32CD32",
    description: "A bright green color resembling the color of fresh limes.",
  },
  {
    name: "Medium Sea Green",
    value: "#3CB371",
    description: "A medium-toned green color like calm ocean waters.",
  },
  {
    name: "Turquoise",
    value: "#40E0D0",
    description: "A blue-green color inspired by the gemstone turquoise.",
  },
  {
    name: "Royal Blue",
    value: "#4169E1",
    description: "A rich and deep blue color associated with royalty.",
  },
  {
    name: "Steel Blue",
    value: "#4682B4",
    description: "A bluish-gray color like the shade of steel.",
  },
  {
    name: "Dark Slate Blue",
    value: "#483D8B",
    description: "A dark bluish-gray color resembling slate rocks.",
  },
  {
    name: "Medium Turquoise",
    value: "#48D1CC",
    description: "A medium-toned blue-green color like turquoise waters.",
  },
  {
    name: "Indigo",
    value: "#4B0082",
    description: "A deep and rich purple-blue color.",
  },
  {
    name: "Dark Olive Green",
    value: "#556B2F",
    description: "A dark green color with an olive-like tone.",
  },
  {
    name: "Cadet Blue",
    value: "#5F9EA0",
    description: "A light bluish-gray color often used in uniforms.",
  },
  {
    name: "Cornflower Blue",
    value: "#6495ED",
    description: "A medium-toned blue color like the cornflower plant.",
  },
  {
    name: "Rebecca Purple",
    value: "#663399",
    description: "A bluish-purple color named in honor of Rebecca.",
  },
  {
    name: "Medium Aqua Marine",
    value: "#66CDAA",
    description: "A medium-toned blue-green color like tropical waters.",
  },
  {
    name: "Dim Gray",
    value: "#696969",
    description: "A medium gray color with a slight brownish tone.",
  },
  {
    name: "Dim Grey",
    value: "#696969",
    description: "A medium grey color with a slight brownish tone.",
  },
  {
    name: "Slate Blue",
    value: "#6A5ACD",
    description: "A bluish-gray color like slate rocks.",
  },
  {
    name: "Olive Drab",
    value: "#6B8E23",
    description: "A dull green color often used in military uniforms.",
  },
  {
    name: "Slate Gray",
    value: "#708090",
    description: "A gray color with a slight bluish tone, like slate rocks.",
  },
  {
    name: "Slate Grey",
    value: "#708090",
    description: "A grey color with a slight bluish tone, like slate rocks.",
  },
  {
    name: "Light Slate Gray",
    value: "#778899",
    description: "A light gray color with a slight bluish tone.",
  },
  {
    name: "Light Slate Grey",
    value: "#778899",
    description: "A light grey color with a slight bluish tone.",
  },
  {
    name: "Medium Slate Blue",
    value: "#7B68EE",
    description: "A medium-toned bluish-gray color like slate rocks.",
  },
  {
    name: "Lawn Green",
    value: "#7CFC00",
    description: "A bright green color resembling the lushness of a lawn.",
  },
  {
    name: "Chartreuse",
    value: "#7FFF00",
    description:
      "A yellow-green color like the color of the chartreuse liqueur.",
  },
  {
    name: "Aquamarine",
    value: "#7FFFD4",
    description: "A bluish-green color like the gemstone aquamarine.",
  },
  {
    name: "Maroon",
    value: "#800000",
    description: "A dark red-brown color like the color of chestnuts.",
  },
  {
    name: "Purple",
    value: "#800080",
    description: "A deep and rich shade of purple.",
  },
  {
    name: "Olive",
    value: "#808000",
    description: "A dark yellowish-green color like green olives.",
  },
  { name: "Gray", value: "#808080", description: "A neutral gray color." },
  { name: "Grey", value: "#808080", description: "A neutral grey color." },
  {
    name: "Sky Blue",
    value: "#87CEEB",
    description: "A light and pale blue color like the color of the sky.",
  },
  {
    name: "Light Sky Blue",
    value: "#87CEFA",
    description:
      "A light and pale blue color resembling the sky on a clear day.",
  },
  {
    name: "Blue Violet",
    value: "#8A2BE2",
    description: "A blue-purple color like a mix of blue and violet.",
  },
  {
    name: "Dark Red",
    value: "#8B0000",
    description: "A deep and intense shade of red.",
  },
  {
    name: "Dark Magenta",
    value: "#8B008B",
    description: "A deep purplish-red color like the magenta ink.",
  },
  {
    name: "Saddle Brown",
    value: "#8B4513",
    description: "A warm and rich brown color like a leather saddle.",
  },
  {
    name: "Dark Sea Green",
    value: "#8FBC8F",
    description: "A pale green color like shallow sea waters.",
  },
  {
    name: "Light Green",
    value: "#90EE90",
    description: "A light and pale green color.",
  },
  {
    name: "Medium Purple",
    value: "#9370DB",
    description: "A medium-toned purple color.",
  },
  {
    name: "Dark Violet",
    value: "#9400D3",
    description: "A deep and intense shade of purple.",
  },
  {
    name: "Pale Green",
    value: "#98FB98",
    description: "A pale and light green color.",
  },
  {
    name: "Dark Orchid",
    value: "#9932CC",
    description: "A deep and intense shade of purple with a hint of pink.",
  },
  {
    name: "Yellow Green",
    value: "#9ACD32",
    description: "A greenish-yellow color.",
  },
  {
    name: "Sienna",
    value: "#A0522D",
    description: "A reddish-brown color like the earth pigment sienna.",
  },
  {
    name: "Brown",
    value: "#A52A2A",
    description: "A common color resembling the color of earth.",
  },
  { name: "Dark Gray", value: "#A9A9A9", description: "A dark gray color." },
  { name: "Dark Grey", value: "#A9A9A9", description: "A dark grey color." },
  {
    name: "Light Blue",
    value: "#ADD8E6",
    description: "A pale and light blue color.",
  },
  {
    name: "Green Yellow",
    value: "#ADFF2F",
    description: "A greenish-yellow color.",
  },
  {
    name: "Pale Turquoise",
    value: "#AFEEEE",
    description: "A pale and light turquoise color.",
  },
  {
    name: "Light Steel Blue",
    value: "#B0C4DE",
    description: "A pale blue-gray color resembling steel.",
  },
  {
    name: "Powder Blue",
    value: "#B0E0E6",
    description: "A pale and powdery blue color.",
  },
  {
    name: "Fire Brick",
    value: "#B22222",
    description: "A deep reddish-brown color like bricks used in kilns.",
  },
  {
    name: "Dark Golden Rod",
    value: "#B8860B",
    description: "A dark yellow-brown color like the golden rod plant.",
  },
  {
    name: "Medium Orchid",
    value: "#BA55D3",
    description: "A medium-toned purple color like the orchid flower.",
  },
  {
    name: "Rosy Brown",
    value: "#BC8F8F",
    description: "A warm and muted brownish-pink color.",
  },
  {
    name: "Dark Khaki",
    value: "#BDB76B",
    description: "A dark yellow-brown color like khaki fabric.",
  },
  { name: "Silver", value: "#C0C0C0", description: "A metallic silver color." },
  {
    name: "Medium Violet Red",
    value: "#C71585",
    description: "A medium-toned reddish-purple color.",
  },
  {
    name: "Indian Red",
    value: "#CD5C5C",
    description: "A deep and warm reddish-brown color.",
  },
  {
    name: "Peru",
    value: "#CD853F",
    description: "A reddish-brown color like the color of Peru's earth.",
  },
  {
    name: "Chocolate",
    value: "#D2691E",
    description: "A rich and deep brown color like chocolate.",
  },
  {
    name: "Tan",
    value: "#D2B48C",
    description: "A light brown color resembling tanned leather.",
  },
  { name: "Light Gray", value: "#D3D3D3", description: "A light gray color." },
  { name: "Light Grey", value: "#D3D3D3", description: "A light grey color." },
  {
    name: "Thistle",
    value: "#D8BFD8",
    description: "A pale and light purple color like the thistle flower.",
  },
  {
    name: "Orchid",
    value: "#DA70D6",
    description: "A pale and soft purple color like the orchid flower.",
  },
  {
    name: "Golden Rod",
    value: "#DAA520",
    description: "A warm and golden yellow color.",
  },
  {
    name: "Pale Violet Red",
    value: "#DB7093",
    description: "A pale and soft purplish-red color.",
  },
  {
    name: "Crimson",
    value: "#DC143C",
    description: "A rich and deep red color like the color of crimson cloth.",
  },
  {
    name: "Gainsboro",
    value: "#DCDCDC",
    description: "A pale and light gray color.",
  },
  {
    name: "Plum",
    value: "#DDA0DD",
    description: "A soft and muted purple color like a ripe plum.",
  },
  {
    name: "Burly Wood",
    value: "#DEB887",
    description: "A warm and light brown color resembling burl wood.",
  },
  {
    name: "Light Cyan",
    value: "#E0FFFF",
    description: "A pale and light blue-green color.",
  },
  {
    name: "Lavender",
    value: "#E6E6FA",
    description: "A pale and soft purple color like the lavender flower.",
  },
  {
    name: "Dark Salmon",
    value: "#E9967A",
    description: "A warm and pinkish-orange color like salmon flesh.",
  },
  {
    name: "Violet",
    value: "#EE82EE",
    description: "A rich and deep purple color.",
  },
  {
    name: "Pale Golden Rod",
    value: "#EEE8AA",
    description: "A pale and soft yellow color like the golden rod plant.",
  },
  {
    name: "Light Coral",
    value: "#F08080",
    description: "A pale and soft coral pink color.",
  },
  {
    name: "Khaki",
    value: "#F0E68C",
    description: "A pale and light yellow-brown color.",
  },
  {
    name: "Alice Blue",
    value: "#F0F8FF",
    description: "A pale and light blue color like the color of Alice's dress.",
  },
  {
    name: "HoneyDew",
    value: "#F0FFF0",
    description: "A pale and soft greenish-white color.",
  },
  {
    name: "Azure",
    value: "#F0FFFF",
    description:
      "A pale and light blue color resembling the sky on a clear day.",
  },
  {
    name: "Sandy Brown",
    value: "#F4A460",
    description: "A warm and sandy brown color.",
  },
  {
    name: "Wheat",
    value: "#F5DEB3",
    description: "A pale and soft yellow-brown color like wheat grains.",
  },
  {
    name: "Beige",
    value: "#F5F5DC",
    description: "A pale and soft light brown color.",
  },
  {
    name: "White Smoke",
    value: "#F5F5F5",
    description: "A pale and light gray color like white smoke.",
  },
  {
    name: "Mint Cream",
    value: "#F5FFFA",
    description: "A pale and soft mint green color.",
  },
  {
    name: "Ghost White",
    value: "#F8F8FF",
    description: "A pale and almost white color like a ghostly apparition.",
  },
  {
    name: "Salmon",
    value: "#FA8072",
    description:
      "A warm and pinkish-orange color like the color of salmon flesh.",
  },
  {
    name: "Antique White",
    value: "#FAEBD7",
    description: "A pale and soft off-white color with a hint of beige.",
  },
  {
    name: "Linen",
    value: "#FAF0E6",
    description: "A pale and soft beige color like linen fabric.",
  },
  {
    name: "Light Golden Rod Yellow",
    value: "#FAFAD2",
    description: "A pale and light yellow color like the golden rod plant.",
  },
  {
    name: "Old Lace",
    value: "#FDF5E6",
    description: "A pale and soft off-white color like old lace fabric.",
  },
  {
    name: "Red",
    value: "#FF0000",
    description: "A bright and intense red color.",
  },
  {
    name: "Fuchsia",
    value: "#FF00FF",
    description: "A bright and vivid purplish-red color.",
  },
  {
    name: "Magenta",
    value: "#FF00FF",
    description: "A bright and vivid purplish-red color.",
  },
  {
    name: "Deep Pink",
    value: "#FF1493",
    description: "A deep and intense pink color.",
  },
  {
    name: "Orange Red",
    value: "#FF4500",
    description: "A bright and intense orange-red color.",
  },
  {
    name: "Tomato",
    value: "#FF6347",
    description: "A bright and intense red color like a ripe tomato.",
  },
  {
    name: "Hot Pink",
    value: "#FF69B4",
    description: "A bright and intense pink color like hot pink flowers.",
  },
  {
    name: "Coral",
    value: "#FF7F50",
    description: "A warm and orange-pink color like coral reefs.",
  },
  {
    name: "Dark Orange",
    value: "#FF8C00",
    description: "A deep and intense orange color.",
  },
  {
    name: "Light Salmon",
    value: "#FFA07A",
    description: "A pale and soft pinkish-orange color.",
  },
  {
    name: "Orange",
    value: "#FFA500",
    description: "A bright and intense orange color like the fruit.",
  },
  {
    name: "Light Pink",
    value: "#FFB6C1",
    description: "A pale and soft pink color.",
  },
  {
    name: "Pink",
    value: "#FFC0CB",
    description: "A bright and soft pink color.",
  },
  {
    name: "Gold",
    value: "#FFD700",
    description: "A warm and rich golden yellow color.",
  },
  {
    name: "Peach Puff",
    value: "#FFDAB9",
    description: "A pale and soft peach color.",
  },
  {
    name: "Navajo White",
    value: "#FFDEAD",
    description: "A warm and pale off-white color.",
  },
  {
    name: "Moccasin",
    value: "#FFE4B5",
    description: "A warm and pale yellow-brown color.",
  },
  {
    name: "Bisque",
    value: "#FFE4C4",
    description: "A pale and soft peach color like unglazed porcelain.",
  },
  {
    name: "Misty Rose",
    value: "#FFE4E1",
    description: "A pale and soft pink color like rose petals.",
  },
  {
    name: "Blanched Almond",
    value: "#FFEBCD",
    description: "A warm and pale beige color like blanched almonds.",
  },
  {
    name: "Papaya Whip",
    value: "#FFEFD5",
    description: "A pale and soft peach color like papaya flesh.",
  },
  {
    name: "Lavender Blush",
    value: "#FFF0F5",
    description: "A pale and soft lavender-pink color.",
  },
  {
    name: "Sea Shell",
    value: "#FFF5EE",
    description: "A pale and soft pinkish-white color like sea shells.",
  },
  {
    name: "Cornsilk",
    value: "#FFF8DC",
    description: "A pale and soft yellow-white color like cornsilk.",
  },
  {
    name: "Lemon Chiffon",
    value: "#FFFACD",
    description: "A pale and soft yellow color like lemon chiffon cake.",
  },
  {
    name: "Floral White",
    value: "#FFFAF0",
    description: "A warm and pale off-white color like white flowers.",
  },
  {
    name: "Snow",
    value: "#FFFAFA",
    description: "A pale and soft white color like freshly fallen snow.",
  },
  {
    name: "Yellow",
    value: "#FFFF00",
    description: "The color of ripe lemons and sunshine.",
  },
  {
    name: "Light Yellow",
    value: "#FFFFE0",
    description: "A pale and soft shade of yellow.",
  },
  {
    name: "Ivory",
    value: "#FFFFF0",
    description: "A creamy white color resembling ivory material.",
  },
  {
    name: "White",
    value: "#FFFFFF",
    description: "The color representing purity and lightness.",
  },
];

console.log(colors); // Check the list of colors in the browser console.

const mode = new URLSearchParams(window.location.search).get("mode");

const colorBox = document.getElementById("bgRetina");
const optionsContainer = document.getElementById("options");
const scoreDisplay = document.getElementById("score");
const progressDisplay = document.getElementById("progressDisplay");
const hexColorDisplay = document.getElementById("hexNumber");
/* const leaveButton = document.getElementById("leave-button"); */

let score = 0;
let currentQuestion = 0;
const totalQuestions = 10;
let currentColorIndex = Math.floor(Math.random() * colors.length);

function generateRandomIncorrectColorIndex(excludeIndex) {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * colors.length);
  } while (randomIndex === excludeIndex);
  return randomIndex;
}

function generateOptions() {
  const options = [];
  const correctColorIndex = currentColorIndex;
  const correctColor = colors[correctColorIndex].name;
  options.push(correctColor);

  const usedIndices = new Set(); // Store used indices to avoid duplicates

  while (options.length < 4) {
    let randomIncorrectColorIndex;
    do {
      randomIncorrectColorIndex = Math.floor(Math.random() * colors.length);
    } while (
      randomIncorrectColorIndex === correctColorIndex ||
      usedIndices.has(randomIncorrectColorIndex)
    );

    usedIndices.add(randomIncorrectColorIndex);

    const randomIncorrectColor = colors[randomIncorrectColorIndex].name;
    options.push(randomIncorrectColor);
  }

  console.log("Generated Options:", options); // Log the generated options to the console
  return shuffleArray(options);
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function updateColorBox(color) {
  const newColor = color.value;
  const blackPath = document.querySelector("#bgRetina path:not(.cls-1)");
  blackPath.style.fill = newColor;

  const circleElement = document.getElementById("circle");
  circleElement.style.fill = newColor;
  hexColorDisplay.innerHTML = color.value;
}

function updateOptions(options) {
  optionsContainer.innerHTML = "";
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.innerHTML = `<span class="option-number">${
      index + 1
    }.</span> ${option}`;
    button.classList.add("option-button");
    button.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(chosenColor) {
  const currentColor = colors[currentColorIndex].name;
  if (chosenColor === currentColor) {
    score++;
  }
  currentQuestion++;
  currentColorIndex = Math.floor(Math.random() * colors.length); // Cycle through colors randomly (no protection yet)
  /*   updateScoreDisplay(); */
  if (mode === "ten-questions") {
    updateProgressDisplay();
    if (currentQuestion == totalQuestions) {
      endQuiz();
    }
  }
  nextQuestion();
}

/* function updateScoreDisplay() {
  scoreDisplay.textContent = `Score: ${score}`;
} */

function updateProgressDisplay() {
  progressDisplay.textContent = `${currentQuestion}/${totalQuestions}`;
}

function nextQuestion() {
  const options = generateOptions();
  updateOptions(options);
  const currentColor = colors[currentColorIndex];
  updateColorBox(currentColor);
}

/* leaveButton.addEventListener("click", function () {
  window.location.href = "../mainMenu/index.html";
}); */

function endQuiz() {
  optionsContainer.innerHTML = "";
  colorBox.style.backgroundColor = "";
  scoreDisplay.textContent = `Final Score: ${score}/${totalQuestions}`;
  /*   leaveButton.style.display = "block"; */

  const popupContainer = document.getElementById("popup-container");
  const popupMessage = document.getElementById("popup-message");
  const closePopupButton = document.getElementById("close-popup");

  popupMessage.textContent = `Your score: ${score}/${totalQuestions}`;
  popupContainer.style.display = "flex";

  closePopupButton.addEventListener("click", () => {
    popupContainer.style.display = "none";
  });
}

jQuery(document).ready(function () {
  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;

  $(document).mousemove(function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  setInterval(function () {
    var xMin = 823,
      xMax = 1087,
      yMin = 200,
      yMax = 380;

    var divisor = 40;

    xp += (mouseX - xp) / divisor;
    yp += (mouseY - yp) / divisor;

    // Limit the position to stay within the given rectangle
    xp = clamp(xp, xMin, xMax);
    yp = clamp(yp, yMin, yMax);

    $("#circle").css({ left: xp + "px", top: yp + "px" });
  }, 20);
});

// Main flow starts here
if (mode === "endless") {
  console.log("Endless mode active");
  progressDisplay.style.display = "none";
  updateColorBox(colors[currentColorIndex]); // Show the initial color
  nextQuestion(); // Start the quiz in endless mode
  updateOptions(generateOptions()); // Generate and show initial options
} else if (mode === "ten-questions") {
  updateColorBox(colors[Math.floor(Math.random() * colors.length)]);
  nextQuestion();
  updateOptions(generateOptions());
} else {
  // Invalid mode, redirect back to the main page
  window.location.href = "index.html";
}

const registerButton = document.getElementById("registerButton");
const logInButton = document.getElementById("logInButton");
const closeButton = document.getElementById("closeButton");

function registerUser() {
  window.location.href = "../mainMenu/index.html";
}

function logInUser() {
  window.location.href = "../mainMenu/index.html";
}

function closeSideBar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

registerButton.addEventListener("click", registerUser);
logInButton.addEventListener("click", logInUser);
closeButton.addEventListener("click", closeSideBar);

//This has to be at the bottom, synchronicity issue?
// Toggle the sidebar when the hamburger button is clicked
document.querySelector(".hamburger-button").addEventListener("click", () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
});
