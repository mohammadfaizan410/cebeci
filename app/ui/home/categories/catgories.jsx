import styles from './categories.module.css';
import Link from 'next/link'
import data from '../../../../public/data.json';
export default function Categories() {
    return (<>
            <h1 className={styles.heading}>Top Categories</h1>
        <div className={styles.container}>
           {data.map((category, index) => (
                <div key={index} className={styles.category}>
                    <Link href={{
                                pathname: "/products",
                                query: { categoryName: category.CategoryName }
                            }}>
                        <img className={styles.image} src={category.products.length > 0 ? category.products[0].image_url : 'https://www.atabuttons.com/image/cache/catalog/kategoriler/stainless-accessories-ata-buttons-500x500.jpg.webp'
                        } alt="category" />
                    </Link>
                    <h3>{category.CategoryName}</h3>
                </div>
           ))}
        </div>

    </>
    );
    }