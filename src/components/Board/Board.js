import React, {useState} from "react";
import styles from './Board.module.scss';
import Square from "../Square/Square";

const Board = ({win, passWin, nextMove, passNextMove}) => {

    const [valuesArray, setValuesArray] = useState(["","","","","","","","","",])

    const playFn = (X) => {

        setValuesArray((prevState) => {
            prevState[X] = nextMove;
            winCheck(nextMove);
            return [...prevState]
        });

        passNextMove(prevState => prevState === "X" ? "O" : "X")
    }

    const winFn = () => {
        console.log("Juz przegrałes")
    }

    const winCheck = (figure) => {

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
           if ( (valuesArray[winLines[i][0]] === figure) && (valuesArray[winLines[i][1]] === figure) && (valuesArray[winLines[i][2]] === figure)) {
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
                        {win !==true ? playFn(indexOfItem) : winFn()}
                    }}
                    value={item}
                />
            )}
        </div>
    )
}

export default Board;