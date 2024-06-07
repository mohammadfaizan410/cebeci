"user client"
import data from '../../../../public/data.json';
import { useState } from 'react';
import styles from './productDetails.module.css';
import { MdCheckBox } from 'react-icons/md';
import Link from 'next/link';
interface ProdInterface {
    name: string;
    image: string;
    description: string | undefined;
    spec_title: string | undefined;
    specifications: string[] | undefined;
    images: string[] | undefined;
    category: string;
    ul_product_tags: string | undefined;
}

export default function ProductDetails({props}: {
    props: {
        product: ProdInterface;
    }
}) {

    const [selectedImage, setSelectedImage] = useState(props.product.image);
    return (
        <div className={styles.container}>
            <div className={styles.heroTitle}>Product Details</div>
            <div className={styles.top}>
                <div className={styles.topLeft}>
                <div className={styles.mainImg}>
                    <img src={selectedImage} alt="product" />
                </div>
                <div className={styles.images }>
                    {props.product.images?.map((img, index) => {
                    if(index !== 0)
                     return(
                        <img 
                        key={index} 
                        src={img} 
                        alt="product" 
                        className={ `${styles.imageInner} ${selectedImage === img ? styles.selected : ""}`}
                        onClick={() => setSelectedImage(img)} 
                      />
                     )
                    }
                    )}
                </div>
            </div>
            <div className={styles.topRight}>
                <h1>{props.product.name}</h1>
                <h3></h3>
                <div className={styles.product_tags} dangerouslySetInnerHTML={
                    props.product.ul_product_tags ? {__html: props.product.ul_product_tags} : {__html: ""}}></div>
                </div>
            </div>

            <div className={styles.dimensionsContainer}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>Dimensions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.product.specifications?.map((spec, index) => (
                            <tr key={index}>
                                <td>{spec}</td>
                                <td>
                                    <MdCheckBox size={20} color="limegreen" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <h2 className={styles.title}>Description</h2>
            <div className={styles.descriptions} dangerouslySetInnerHTML={
                props.product.description ? {__html: props.product.description} : {__html: ""}}></div>
            <h2 className={styles.title}>Other products in this category</h2>
                <div className={styles.otherProducts}>
                    {
                        data.filter(category => category.CategoryName === props.product.category)[0].products.map((prod, index) => (
                            <div key={index}>
                                <Link href={`/products/${prod.name.replace(/\s/g, '-').toLowerCase()}`}>
                                <img src={prod.image_url} alt="product" />
                                <h3>{prod.name}</h3>
                                </Link>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
}