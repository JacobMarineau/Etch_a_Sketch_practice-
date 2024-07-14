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
    const squares = document.querySelectorAll(".square");
        squares.forEach(square => {
            square.style.backgroundcolor= 'black';
        })
    }))

}
createSquareDivs(256);
