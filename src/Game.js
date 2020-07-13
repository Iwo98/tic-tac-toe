import React, { useState } from 'react';
import Board from './components/Board/Board';
import styles from './Game.module.scss';


const Game = () => {
  const [win, setWin] = useState(false);
  const [winLine, setWinLine] = useState();
  const [currentPlayer, setCurrentPlayer] = useState('X');

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
          passWin={setWin}
          win={win}
          passCurrentPlayer={setCurrentPlayer}
          currentPlayer={currentPlayer}
          passWinLine={setWinLine}
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
