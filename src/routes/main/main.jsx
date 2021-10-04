import React, { useState } from 'react';
import Question from '../../components/question/question';
import Selection from '../../components/selection/selection';
import Result from '../result/result';
import styles from './main.module.css';

const Main = ({question, selects, result}) => {
    const [step, setStep] = useState([1]);
    const [sum, setSum] = useState("");

    const goToNext = (event) => {
        const target = event.currentTarget;
        setStep(step => parseInt(step) + 1);
        setSum(sum => sum + target.id);
    }

    return(
        <>
        {step < 4 &&
        <section className={styles.main}>
        <Question q={question[step]}/>
        {Object.keys(selects[step]).map(key => 
            <Selection key={key} item={selects[step][key]} onClick={goToNext}></Selection>
        )}
        </section>
        }
        {step === 4 &&
        <section className={styles.result}>
            <Result sum={sum} result={result}/>
        </section>
        }
        </>
    )
};

export default Main;