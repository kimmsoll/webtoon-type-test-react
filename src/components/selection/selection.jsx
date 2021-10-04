import React from 'react';
import styles from './selection.module.css';

const Selection = ({item, onClick}) => {
    return(
        <button id={item.id} className={styles.button} onClick={onClick}>
            <h3>{item.title}</h3>
            <p>{item.sub}</p>
        </button>
    );
}
export default Selection;