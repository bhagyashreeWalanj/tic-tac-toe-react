interface ISquare {
  indexTile: number;
  value: string;
  onClickFn: () => void;
  strikeClass: string;
  winningCombo: any[];
}

export const Square = ({
  indexTile,
  value,
  onClickFn,
  strikeClass,
  winningCombo,
}: ISquare) => {
  return (
    <>
      <button
        className={`square ${
          winningCombo.includes(indexTile) ? strikeClass : ""
        }`}
        onClick={onClickFn}
      >
        {value}
      </button>
    </>
  );
};
