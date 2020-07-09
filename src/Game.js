import React, {useState} from 'react';
import Board from "./components/Board/Board";
import styles from './Game.module.scss';


const Game = () => {

    const [win, setWin] = useState(false);
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
