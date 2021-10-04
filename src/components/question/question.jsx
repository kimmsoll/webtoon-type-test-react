import React from 'react';
import styles from './question.module.css';

const Question = ({q}) => {
    return(
        <h1 className={styles.q}>{q}</h1>
    );
}

export default Question;