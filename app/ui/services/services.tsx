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
                <h1>
                    Global Sourcing: Providing a wide range of products from around the world
                </h1>
            </div>
            <div className={styles.service}>
                <MdCheckCircleOutline className={styles.icon}  fill='green'/>
                <h1>Supllying Quality Products: We ensure that our products are of the highest quality</h1>
            </div>
            <div className={styles.service}>
                <MdTypeSpecimen className={styles.icon} />
                <h1>Manufacturing and Production: We have a wide range of products that we manufacture</h1>
            </div>
            <div className={styles.service}>
                <MdSettings className={styles.icon}  fill='orange'/>
                <h1>Customization: We provide customization services for our products</h1>
            </div>
        </div>


        </>
    )
}