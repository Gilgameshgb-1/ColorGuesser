jQuery(document).ready(function () {
  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;

  $(document).mousemove(function (e) {
    mouseX = e.pageX - 30;
    mouseY = e.pageY - 30;
  });

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  setInterval(function () {
    var xMin = 810,
      xMax = 1110,
      yMin = 177,
      yMax = 325;

    var divisor = 40;

    xp += (mouseX - xp) / divisor;
    yp += (mouseY - yp) / divisor;

    // Limit the position to stay within the given rectangle
    xp = clamp(xp, xMin, xMax);
    yp = clamp(yp, yMin, yMax);

    $("#circle").css({ left: xp + "px", top: yp + "px" });
  }, 20);
});
