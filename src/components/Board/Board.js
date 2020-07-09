import React, {useState} from "react";
import styles from './Board.module.scss';
import Square from "../Square/Square";

const Board = ({win, passWin, currentPlayer, passCurrentPlayer}) => {

    const [valuesArray, setValuesArray] = useState(["","","","","","","","","",])

    const playFn = (indexOfBox) => {

        const newState = [...valuesArray];
        newState[indexOfBox] = currentPlayer;
        //Pomogło przesłanie tablicy jako kolejny argument funkcji
        winCheck(currentPlayer,newState);
        setValuesArray(newState);

        passCurrentPlayer(prevState => prevState === "X" ? "O" : "X")
    }

    const winFn = () => {
        console.log("Juz przegrałes")
    }

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
        ]

        for (let i = 0 ; i < winLines.length; i++) {
           if (
               (arrayOfValues[winLines[i][0]] === figure) &&
               (arrayOfValues[winLines[i][1]] === figure) &&
               (arrayOfValues[winLines[i][2]] === figure)
           ) {
                passWin(true);
               break;
           }
        }
    }

    return (
        <div className={styles.board} >
            {valuesArray.map((item, indexOfItem) =>
                <Square
                    onClick={() => {
                        win !==true ? playFn(indexOfItem) : winFn()
                    }}
                    value={item}
                />
            )}
        </div>
    )
}

export default Board;
