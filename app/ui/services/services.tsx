import styles from './services.module.css'
import { MdSettings, MdTypeSpecimen, MdCheckCircleOutline} from 'react-icons/md'
import { BiGlobe } from 'react-icons/bi'
export default function Services(){
    return (
        <>
        <h1 className={styles.heading}>Our Services</h1>
        <div className={styles.container}>
            <div className={styles.service}>
                <BiGlobe className={styles.icon}  fill='teal'/>
                <h1>Operating in 5 different cities</h1>
            </div>
            <div className={styles.service}>
                <MdCheckCircleOutline className={styles.icon}  fill='green'/>
                <h1>Suppliying Buttons</h1>
            </div>
            <div className={styles.service}>
                <MdTypeSpecimen className={styles.icon} />
                <h1>Button Manufacturing</h1>
            </div>
            <div className={styles.service}>
                <MdSettings className={styles.icon}  fill='orange'/>
                <h1>Sourcing</h1>
            </div>
        </div>


        </>
    )
}