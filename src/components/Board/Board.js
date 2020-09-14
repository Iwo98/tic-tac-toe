import React from 'react';
import PropTypes from 'prop-types';
import styles from './Board.module.scss';
import Square from '../Square/Square';


const Board = ({
  win, valuesArray, playFn,
}) => (
  <div className={styles.board}>
    {valuesArray.map((item, indexOfItem) => (
      <Square
        playFn={() => playFn(indexOfItem)}
        value={item}
        win={win}
      />
    ))}
  </div>
);

Board.propTypes = {
  win: PropTypes.bool.isRequired,
  valuesArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  playFn: PropTypes.func.isRequired,
};

export default Board;

