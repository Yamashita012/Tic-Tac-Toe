var board = ["", "", "", "", "", "", "", "", ""];
var currentPlayer = "X";
var scores = { X: 0, O: 0 };

function Move(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        document.getElementsByClassName("board-cell")[index].innerText = currentPlayer;
        if (checkWin()) {
            scores[currentPlayer]++;
            updateScores();
            alert(currentPlayer + " wins!");
            resetBoard();
        } else if (checkDraw()) {
            alert("It's a draw!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWin() {
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
            return true;
        }
    }

    return false;
}

function checkDraw() {
    return !board.includes("");
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    var cells = document.getElementsByClassName("board-cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = "";
    }
    currentPlayer = "X";
}

function updateScores() {
    document.getElementById("score-x").innerText = scores["X"];
    document.getElementById("score-o").innerText = scores["O"];
}
