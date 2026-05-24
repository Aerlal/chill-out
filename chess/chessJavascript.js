const gameBoard = document.querySelector("#gameBoard");
const player = document.querySelector("#player");
const infoDisplay = document.querySelector("#infoDisplay");
const width = 8;
const fileLabels = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rankLabels = ["1", "2", "3", "4", "5", "6", "7", "8"];
function createBoard() {
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = "50px";
        square.style.height = "50px";
        square.setAttribute("id", i);
        const row = Math.floor(i / width);
        const col = i % width;
        const isLight = (row + col) % 2 === 0;
        if (isLight) {
            square.classList.add("lightSquare");
            square.style.backgroundColor = "white";
        } else {
            square.classList.add("darkSquare");
            square.style.backgroundColor = "black";
        }
        if (row === 0) {
            const fileLabel = document.createElement("span");
            fileLabel.classList.add("squareLabel", "fileLabel");
            fileLabel.textContent = fileLabels[col];
            fileLabel.style.color = isLight ? "black" : "white";
            square.appendChild(fileLabel);
        }
        if (col === 0) {
            const rankLabel = document.createElement("span");
            rankLabel.classList.add("squareLabel", "rankLabel");
            rankLabel.textContent = rankLabels[row];
            rankLabel.style.color = isLight ? "black" : "white";
            square.appendChild(rankLabel);
        }
        gameBoard.appendChild(square);
    }
}
createBoard();