"use client"
import styles from './videos.module.css';
import { useLanguage } from '@/app/languageContextProvider';
export default function Videos(){
    const {language} = useLanguage();
    return (
        <>
        <h1 className={styles.heading}>{language === 'en' ? 'Watch how we work' : 'Nasıl çalıştığımızı izleyin'}</h1>
        <div className={styles.container}>
                <div className={styles.category}>
                    <img src="https://www.atabuttons.com/image/cache/catalog/kategoriler/makinalar-1000x1000.jpg.webp" alt="category" />
                </div>
                <div className={styles.category}>
                    <img src="https://www.atabuttons.com/image/cache/catalog/kategoriler/stainless-accessories-ata-buttons-500x500.jpg.webp" alt="category" />
                </div>
        </div>


        </>
    );
}