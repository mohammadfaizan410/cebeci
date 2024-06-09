"use client"
import styles from './categories.module.css';
import Link from 'next/link'
import data from '../../../../public/data.json';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


export default function Categories() {
    const options = {
        type         : 'loop',
        gap          : '2rem',
        autoplay     : true,
        pauseOnHover : false,
        resetProgress: false,
        arrow       : false,
        padding: { left: 10, right: 20 },
        height       : 'auto',
        perPage      : 4,
        speed : 800,
      };
    return (<>
            <h1 className={styles.heading}>Top Categories</h1>
        <div className={styles.container}>
            
        <Splide 
            options = {options}
        >
           {data.map((category, index) => (
            <SplideSlide className={styles.category} 
                key={index}
            >
                    <Link href={{
                        pathname: "/products",
                        query: { categoryName: category.CategoryName }
                        }}>
                        <img className={styles.image} src={category.products.length > 0 ? category.products[0].image_url : 'https://www.atabuttons.com/image/cache/catalog/kategoriler/stainless-accessories-ata-buttons-500x500.jpg.webp'
                        } alt="category" />
                    </Link>
                    <div>
                    <h3>{category.CategoryName}</h3>
                    </div>
            </SplideSlide>
           ))}
        </Splide>
        </div>

    </>
    );
    }