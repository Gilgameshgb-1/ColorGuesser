const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function drawRect(fillColor) {
  ctx.fillStyle = fillColor;
  ctx.fillRect(0, 0, 100, 100);
}

drawRect("blue"); // Initial fill color

// Change the fill color dynamically
setTimeout(() => {
  drawRect("red");
}, 2000); // Change to red after 2 seconds
