import React from 'react';
import styles from './button.module.css';

const Button = ({text}) => {
    return(
        <button className={styles.button}>
            <h3>{text}</h3>
        </button>
    );
}

export default Button;