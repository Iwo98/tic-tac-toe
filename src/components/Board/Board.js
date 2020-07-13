import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Board.module.scss';
import Square from '../Square/Square';


const Board = ({
  win, passWin, currentPlayer, passCurrentPlayer, passWinLine, 
}) => {
  const [valuesArray, setValuesArray] = useState(['', '', '', '', '', '', '', '', '']);

  const winCheck = (figure, arrayOfValues) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winLines.length; i += 1) {
      if ((arrayOfValues[winLines[i][0]] === figure)
                && (arrayOfValues[winLines[i][1]] === figure)
                && (arrayOfValues[winLines[i][2]] === figure)
      ) {
        passWin(true);
        passWinLine(i);
        break;
      }
    }
  };

    
  const playFn = (indexOfBox) => {
    const newState = [...valuesArray];
    newState[indexOfBox] = currentPlayer;

    winCheck(currentPlayer, newState);
    setValuesArray(newState);

    passCurrentPlayer(prevState => (prevState === 'X' ? 'O' : 'X'));
  };

  return (
    <div className={styles.board}>
      {valuesArray.map((item, indexOfItem) => (
        <Square
          onClickFn={() => {
            playFn(indexOfItem);
          }}
          value={item}
          win={win}
        />
      ))}
    </div>
  );
};

Board.propTypes = {
  win: PropTypes.bool.isRequired,
  passWin: PropTypes.func.isRequired,
  passWinLine: PropTypes.func.isRequired,
  currentPlayer: PropTypes.string.isRequired,
  passCurrentPlayer: PropTypes.func.isRequired,
};

export default Board;

