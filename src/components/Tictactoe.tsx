import React, { useState, useEffect } from "react";
import Confetti from "./Confetti";
import { calculateWinner } from "./../utils/Common";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import Board from "./Board";

// CSS file
import "./tictactoe.css";
import Footer from "./Footer";

const Tictactoe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [won, setIsWon] = useState(false);
  const [status, setStatus] = useState({
    string: "",
    value: "",
    strikeLine: "",
    winningCombo: Array(3) as number[] | undefined,
  });

  const handleClick = (i: any) => {
    if (calculateWinner(squares)?.winner || squares[i]) {
      return;
    }

    squares[i] = isX ? "X" : "O";
    setSquares(squares);
    setIsX(!isX);
    const winner = calculateWinner(squares)?.winner;
    const combo = calculateWinner(squares)?.combo;
    const strikeLine = calculateWinner(squares)?.strikeClass || "";
    const areAllTilesFilledIn = squares.every((tile) => tile !== null);

    if (winner) {
      setStatus({
        string: `Congratulations: Winner is ${winner}`,
        value: "",
        strikeLine: strikeLine,
        winningCombo: combo as number[],
      });
      console.log("combo", combo);
      setIsWon(true);
    } else if (areAllTilesFilledIn) {
      setIsWon(false);
      setStatus({
        string: `Opps!!! It's a Draw !`,
        value: "draw",
        strikeLine: "",
        winningCombo: [],
      });
    } else {
      setStatus({
        string: "Next player: " + (isX ? "X" : "O"),
        value: "",
        strikeLine: "",
        winningCombo: [],
      });
    }
  };

  const handleRestart = () => {
    setIsX(true);
    setIsWon(false);
    setSquares(Array(9).fill(null));
    setStatus({
      string: "",
      value: "",
      strikeLine: "",
      winningCombo: [],
    });
  };

  // useEffect(() => {
  //   won &&
  //     setTimeout(() => {
  //       setIsWon(false);
  //       setStatus("Shall we start New Game ?");
  //     }, 8000);
  // }, [won]);

  return (
    <div className="container">
      {won && <Confetti />}
      <div className="title">
        Tic Tac Toe Game In <span>React</span>{" "}
      </div>
      <div className="subtitle">
        <h2 dangerouslySetInnerHTML={{ __html: status.string }}></h2>
        {status.value === "draw" && (
          <BsFillHandThumbsDownFill color="white" width={80} height={80} />
        )}
      </div>
      <Board
        handleClick={(i) => handleClick(i)}
        squares={squares}
        strikeClass={status.strikeLine}
        winningCombo={status.winningCombo as number[]}
      />
      <button className="reset" onClick={handleRestart}>
        Reset
      </button>
      <Footer />
    </div>
  );
};

export default Tictactoe;
