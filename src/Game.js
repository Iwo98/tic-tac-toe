import React, {useState} from 'react';
import Board from "./components/Board/Board";
import styles from './Game.module.scss';



const Game = () => {
    const [win, setWin] = useState(false);
    const [winLine, setWinLine] = useState();
    const [currentPlayer, setCurrentPlayer] = useState("X");
    let classNameForLine;

    if(winLine === 0)
        classNameForLine=styles.winLine0;
    else if(winLine === 1)
        classNameForLine=styles.winLine1;
    else if(winLine === 2)
        classNameForLine=styles.winLine2;
    else if(winLine === 3)
        classNameForLine=styles.winLine3;
    else if(winLine === 4)
        classNameForLine=styles.winLine4;
    else if(winLine === 5)
        classNameForLine=styles.winLine5;
    else if(winLine === 6)
        classNameForLine=styles.winLine6;
    else if(winLine === 7)
        classNameForLine=styles.winLine7;



    return (
        <>
            <div className={styles.game}>
                {win === false ? <h2>Next player: {currentPlayer}</h2> : <h2 className={styles.ending}>It's Over </h2>}
                {win === false ? false :
                    <div className={classNameForLine}></div>}
                <Board
                    passWin={setWin}
                    win={win}
                    passCurrentPlayer={setCurrentPlayer}
                    currentPlayer={currentPlayer}
                    passWinLine = {setWinLine}
                />
                {win && <h2 className={styles.playerWins}>Player {currentPlayer === "X" ? "0" : "X"} won</h2>}
            </div>
        </>
    );
}

export default Game;
