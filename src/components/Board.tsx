import React from "react";
import { Square } from "./Square";

interface IBoard {
  squares: any;
  handleClick: (i: number) => void;
  strikeClass: string;
  winningCombo: any[];
}

function Board({ squares, handleClick, strikeClass, winningCombo }: IBoard) {
  return (
    <>
      <div className="board">
        <div className="row1">
          <Square
            strikeClass={strikeClass}
            value={squares[0]}
            winningCombo={winningCombo}
            onClickFn={() => {
              handleClick(0);
            }}
            indexTile={0}
          />
          <Square
            strikeClass={strikeClass}
            value={squares[1]}
            winningCombo={winningCombo}
            onClickFn={() => {
              handleClick(1);
            }}
            indexTile={1}
          />
          <Square
            strikeClass={strikeClass}
            value={squares[2]}
            indexTile={2}
            winningCombo={winningCombo}
            onClickFn={() => {
              handleClick(2);
            }}
          />
        </div>
        <div className="row1">
          <Square
            strikeClass={strikeClass}
            value={squares[3]}
            indexTile={3}
            winningCombo={winningCombo}
            onClickFn={() => {
              handleClick(3);
            }}
          />
          <Square
            strikeClass={strikeClass}
            value={squares[4]}
            indexTile={4}
            winningCombo={winningCombo}
            onClickFn={() => {
              handleClick(4);
            }}
          />
          <Square
            strikeClass={strikeClass}
            value={squares[5]}
            indexTile={5}
            winningCombo={winningCombo}
            onClickFn={() => {
              handleClick(5);
            }}
          />
        </div>
        <div className="row1">
          <Square
            strikeClass={strikeClass}
            value={squares[6]}
            indexTile={6}
            winningCombo={winningCombo}
            onClickFn={() => {
              handleClick(6);
            }}
          />
          <Square
            strikeClass={strikeClass}
            value={squares[7]}
            indexTile={7}
            winningCombo={winningCombo}
            onClickFn={() => {
              handleClick(7);
            }}
          />
          <Square
            strikeClass={strikeClass}
            value={squares[8]}
            indexTile={8}
            winningCombo={winningCombo}
            onClickFn={() => {
              handleClick(8);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Board;
