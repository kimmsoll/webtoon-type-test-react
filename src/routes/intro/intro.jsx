import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/button';
import styles from './intro.module.css';

const Intro = () => {
    return(
        <>
        <main className={styles.main}>
        <h1 className={styles.title}>내 취향에 딱!맞는 웹툰은?</h1>
        <div className={styles.img}>
            <i className="fas fa-question" id={styles.i}></i>
        </div>
        <Link to={"/question"}>
            <Button text="시작하기!"/>
        </Link>
        </main>
        </>
    );
}

export default Intro;