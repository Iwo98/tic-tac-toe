import React, { useState } from 'react';
import Board from './components/Board/Board';
import styles from './Game.module.scss';


const Game = () => {
  const [win, setWin] = useState(false);
  const [winLine, setWinLine] = useState();
  const [currentPlayer, setCurrentPlayer] = useState('X');
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

    for (let index = 0; index < winLines.length; index += 1) {
      if ((arrayOfValues[winLines[index][0]] === figure)
                && (arrayOfValues[winLines[index][1]] === figure)
                && (arrayOfValues[winLines[index][2]] === figure)
      ) {
        setWin(true);
        setWinLine(index);
        break;
      }
    }
  };

  const playFn = (indexOfBox) => {
    const newState = [...valuesArray];
    newState[indexOfBox] = currentPlayer;

    winCheck(currentPlayer, newState);
    setValuesArray(newState);

    setCurrentPlayer(prevState => (prevState === 'X' ? 'O' : 'X'));
  };

  return (
    <>
      <div className={styles.game}>
        {win === false ? (
          <h2>
            Next player:
            {` ${currentPlayer}`}
          </h2>
        ) : <h2 className={styles.ending}>It is Over </h2>}
        {win === false ? false
          : <div className={`winningLine __${winLine}`} />}
        <Board
          win={win}
          valuesArray={valuesArray}
          playFn={playFn}
        />
        {win && (
          <h2 className={styles.playerWins}>
            Player
            {currentPlayer === 'X' ? ' 0 ' : ' X '}
            {' '}
            won
          </h2>
        )}
      </div>
    </>
  );
};

export default Game;
