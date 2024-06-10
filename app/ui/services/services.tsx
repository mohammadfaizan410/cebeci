"use client"
import styles from './services.module.css'
import { MdSettings, MdTypeSpecimen, MdCheckCircleOutline} from 'react-icons/md'
import { BiGlobe } from 'react-icons/bi'
import { useLanguage } from '@/app/languageContextProvider';
import serviceData from '../../../locales/en/services.json'
import serviceDataTr from '../../../locales/tr/services.json'
export default function Services(){
    const { language } = useLanguage();
    const services = language === 'en' ? serviceData : serviceDataTr;
    return (
        <>
        <h1 className={styles.heading}>{services.title}</h1>
        <div className={styles.container}>
            <div className={styles.service}>
                <BiGlobe className={styles.icon}  fill='teal'/>
                <h1>
                   {services.service1}
                </h1>
            </div>
            <div className={styles.service}>
                <MdCheckCircleOutline className={styles.icon}  fill='green'/>
                <h1>{services.service2}</h1>
            </div>
            <div className={styles.service}>
                <MdTypeSpecimen className={styles.icon} />
                <h1>{services.service3}</h1>
            </div>
            <div className={styles.service}>
                <MdSettings className={styles.icon}  fill='orange'/>
                <h1>{services.service4}</h1>
            </div>
        </div>


        </>
    )
}