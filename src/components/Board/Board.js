import React, {useState} from "react";
import styles from './Board.module.scss';
import Square from "../Square/Square";

const Board = ({win, passWin, nextMove, passNextMove}) => {

    const [valuesArray, setValuesArray] = useState(["","","","","","","","","",])

    const playFn = (X) => {
        // 'X' tkaka nazwa w ogóle nie informuje czym jest ten argument
        setValuesArray((prevState) => {
            prevState[X] = nextMove;
            winCheck(nextMove);
            return [...prevState]
        });

        // ja bym powyszą funkcje zpisał tak jak niżej, to pozwala uniknąć modyfikowania argumentu funkcji,
        // co jest uznawane za złą praktykę
        // setValuesArray((prevState) => {
        //     const newState = [...prevState][X] = nextMove;
        //     winCheck(nextMove);
        //     return newState
        // });

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
            // poniższą linijkę warto rozbić na 3 linje
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
                        // w poniższej linijce najbardziej curly nawiasy nie są potrzebne
                        {win !==true ? playFn(indexOfItem) : winFn()}
                    }}
                    value={item}
                />
            )}
        </div>
    )
}

export default Board;
