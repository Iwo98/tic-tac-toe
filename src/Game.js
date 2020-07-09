import React, {useState} from 'react';
import Board from "./components/Board/Board";
import styles from './Game.module.scss';


const Game = () => {
    const [win, setWin] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState("X");

  return (
         <div className={styles.game}>
             {win === false ? <h2>Next player: {currentPlayer}</h2> : <h2>It's Over </h2>}
             <Board
                 passWin={setWin}
                 win={win}
                 passCurrentPlayer={setCurrentPlayer}
                 currentPlayer={currentPlayer}
             />
             {win &&  <h2>Player {currentPlayer === "X" ? "0" : "X"} won</h2> }
         </div>
  );
}

export default Game;
