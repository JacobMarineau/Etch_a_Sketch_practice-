function createSquareDivs(numSquares) {
  const container = document.getElementById("container");
  for (let i = 0; i < numSquares; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
  }
}
createSquareDivs(16);
