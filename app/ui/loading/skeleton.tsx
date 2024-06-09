
import styles from './skeleton.module.css';
export default function LoadingSkeleton() {
    return (
        <>
        <div className={styles.textSkeleton}></div>
        <div className={styles.textSkeleton}></div>
        <div className={styles.containerSkeleton}></div>
        </>
    )
}