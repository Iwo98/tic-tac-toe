import React from 'react';
import PropTypes from 'prop-types';
import styles from './Square.module.scss';


const Square = ({ value, onClickFn, win }) => (
  <button
    className={styles.square}
    type="button"
    onClick={onClickFn}
    disabled={value !== '' || win === true}
  >
    {value}
  </button>
);

Square.propTypes = {
  value: PropTypes.string,
  onClickFn: PropTypes.func.isRequired,
  win: PropTypes.bool.isRequired,
};

Square.defaultProps = {
  value: '',
};

export default Square;
