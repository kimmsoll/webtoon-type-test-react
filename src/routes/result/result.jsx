import Button from '../../components/button/button';
import styles from './result.module.css';
import { Link } from 'react-router-dom';
import { shareKakao } from '../../kakao';
import { useEffect, useState } from 'react';
import Loading from '../../components/loading/loading';

const Result = ({sum, result}) => {
    const [loading, setLoading] = useState(true);
    const data = result[sum];
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
            <section className={styles.container}>
            <h1 className={styles.title}>"이 웹툰 어때요?"</h1>
            <h2 className={styles.subtitle}>{data.title}</h2>
            <div className={styles.img}>
                <img id={styles.img} src={data.img} alt="cartoonImg"/>
            </div>
            <span className={styles.span}>* 추천 *</span>
            <p className={styles.description}>{data.description}</p>
            <span className={styles.span}>시놉시스</span>
            <p className={styles.synopsis}>{data.synopsis}</p>
            <Link to="/">
                <Button text="테스트 다시 하기"/>        
            </Link>
            <a href={data.link}>
                <Button text="웹툰 보러 가기"/>
            </a>
            <div onClick={shareKakao}>
                <Button text="카카오톡으로 공유하기"/>
            </div>
            </section>
    );
}

export default Result;