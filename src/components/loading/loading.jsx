import React from 'react';
import styles from './loading.module.css';

const Loading = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>분석 중...!</h1>
        </section>
    );
}

export default Loading;