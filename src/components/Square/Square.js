import React from 'react';
import styles from './Square.module.scss';


const Square = ({value="",onClick,disable}) => {
    return (
            <button
                className={styles.square}
                type="button"
                onClick={onClick}
                disabled={value !== "" ? true : false }
              >
                {value}
            </button>
    )
};

export default Square;