import React from 'react';
import PropTypes from 'prop-types';
import styles from './Square.module.scss';


const Square = ({ value, playFn, win }) => (
  <button
    className={styles.square}
    type="button"
    onClick={playFn}
    disabled={value !== '' || win === true}
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  playFn: PropTypes.func.isRequired,
  win: PropTypes.bool.isRequired,
};

Square.defaultProps = {
  value: '',
};

export default Square;
