function createSquareDivs(numSquares) {
  const container = document.getElementById("container");
  for (let i = 0; i < numSquares; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
    squareDiv.addEventListener("mouseover", function () {
      squareDiv.style.backgroundColor = "blueviolet";
    });
  }
}
function resetSketch () {
    if (btn.addEventListener("click", function () {
        squareDiv.style.backgroundColor = "black";
    }))

}
createSquareDivs(256);
