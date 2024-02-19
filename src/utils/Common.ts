export function calculateWinner(squares: any) {
  const winningPatterns = [
    { combo: [0, 1, 2], strikeClass: "winner-vertical" },
    { combo: [3, 4, 5], strikeClass: "winner-vertical" },
    { combo: [6, 7, 8], strikeClass: "winner-vertical" },

    //Columns
    { combo: [0, 3, 6], strikeClass: "winner-horizontal" },
    { combo: [1, 4, 7], strikeClass: "winner-horizontal" },
    { combo: [2, 5, 8], strikeClass: "winner-horizontal" },

    //Diagonals
    { combo: [0, 4, 8], strikeClass: "winner-diagonalLeft" },
    { combo: [2, 4, 6], strikeClass: "winner-diagonalRight" },
  ];
  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i].combo;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        combo: winningPatterns[i].combo,
        strikeClass: winningPatterns[i].strikeClass,
      };
    }
  }

  return;
}
