import React from 'react';
import styles from './result.module.css';

const Result = ({sum, result}) => {
    const data = result[sum];
    return(
        <section className={styles.container}>

            <h2 className={styles.title}>이 웹툰 어때요?</h2>
            <h3>{data.title}</h3>

        
        <div className={styles.img}>
            <img id={styles.img} src={data.img} alt="cartoonImg"/>
        </div>
        <span className={styles.span}>* 추천 *</span>
        <p className={styles.description}>{data.description}</p>
        <span className={styles.span}>시놉시스</span>
        <p className={styles.description}>{data.synopsis}</p>
        
        </section>
    );
}

export default Result;