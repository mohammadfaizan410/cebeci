import styles from './hero.module.css'
import Image from 'next/image';
export default function Hero({props}:{
    props: {
        title: string;
        description: string;
        image: string;
    }
}) {
    return (
    <div className={styles.container}>
        <div className={styles.image}>
            <img src={props.image} alt="hero"  />
        </div>
        
        {/* <div className={styles.text}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>         */}
    </div>
    );
}
