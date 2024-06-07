import styles from './services.module.css'
import { MdSettings, MdTypeSpecimen, MdCheckCircleOutline} from 'react-icons/md'
import { BiGlobe } from 'react-icons/bi'
export default function Services(){
    return (
        <>
        <h1 className={styles.heading}>Our Services</h1>
        <div className={styles.container}>
            <div className={styles.service}>
                <BiGlobe className={styles.icon} size={100} fill='teal'/>
                <h1>Service 4</h1>
            </div>
            <div className={styles.service}>
                <MdCheckCircleOutline className={styles.icon} size={100} fill='green'/>
                <h1>Service 3</h1>
            </div>
            <div className={styles.service}>
                <MdTypeSpecimen className={styles.icon} size={100}/>
                <h1>Service 2</h1>
            </div>
            <div className={styles.service}>
                <MdSettings className={styles.icon} size={100} fill='orange'/>
                <h1>Service 1</h1>
            </div>
        </div>


        </>
    )
}