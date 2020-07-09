import React, {useState} from 'react';
import Board from "./components/Board/Board";
import styles from './Game.module.scss';


const Game = () => {
    const [win, setWin] = useState(false);
    //  nextMove bez kontekstu to nie jest jasną nazwą, lepsze było by np. currentPlayer
    //  to by ułatwiło by czytanie kodu wewnątrz Board
    const [nextMove, setNextMove] = useState("X");

  return (
         <div className={styles.game}>
             {win === false ? <h2>Next player: {nextMove}</h2> : <h2>It's Over </h2>}
             <Board
                 passWin={setWin}
                 win={win}
                 passNextMove={setNextMove}
                 nextMove={nextMove}
             />
             {win &&  <h2>Player {nextMove === "X" ? "0" : "X"} won</h2> }
         </div>
  );
}

export default Game;
