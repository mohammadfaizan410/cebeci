"use client"
import data from '@/public/data.json';
import styles from './products.module.css';
import dataEn from "@/locales/en/data.json";
import dataTr from "@/locales/tr/data.json";

import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/app/languageContextProvider';


export default function ProductsUI() {
    const { language } = useLanguage();
    const data = language === 'en' ? dataEn : dataTr;
    const searchParams = useSearchParams();
    const category = searchParams.get('categoryName');
    const [selectedCategory, setSelectedCategory] = useState(category || 'All');
    const [products, setProducts] = useState(data.map((category) => category.products));
    const [prodCount, setProdCount] = useState(null || 0);
    const [prevLanguage, setPrevLanguage] = useState(language);
    //refresh page on language change
    useEffect(() => {
            setSelectedCategory('All');
        setProducts([]);
    setProdCount(0);
    setProducts(data.map((category) => category.products));
        
    }, [language]);

    useEffect(() => {
        setProducts(data.map((category) => {
            if (selectedCategory === 'All') {
                return category.products;
            }
            return category.CategoryName === selectedCategory ? category.products : [];
        }));

     
    }, [selectedCategory]);

    useEffect(() => {
        setProdCount(products.reduce((acc, category) => acc + category.length, 0));
    }, [products]);
    


    return (
        <Suspense
        fallback={<h1>
            {language === 'en' ? 'Loading...' : 'Yükleniyor...'}
        </h1>}
        >

        <div className={styles.container}>
            <div className={styles.categoryPicker}>
                <h3>Categories</h3>
            <li key='All' className={selectedCategory === 'All' ? styles.selected : ''} onClick={() => setSelectedCategory('All')}>
                <button>
                    {language === 'en' ? 'All' : 'Hepsi'}
                </button>
            </li>
            {data.map((category) => (
                <li key={category.CategoryName} 
                className={selectedCategory === category.CategoryName ? styles.selected : ''}
                onClick={
                    () => {
                        
                        setSelectedCategory(category.CategoryName)}
                        }>
                    <button className={styles.categoryBtn}>{category.CategoryName}</button>
                </li>
            ))}
            </div>
            <div className={styles.wrapper}>
            <div className={styles.productsWrapper}>
            <h1 className={styles.title}>
                {language === 'en' ? 'Products' : 'Ürünler'}
            </h1>
            <div className={styles.mobileCategory}>
                <h3>Select a category</h3>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} defaultValue='All'>
                    <option value='All' >
                        {language === 'en' ? 'All' : 'Hepsi'}
                    </option>
                    {data.map((category) => (
                        <option key={category.CategoryName} value={category.CategoryName}>{category.CategoryName}</option>
                        ))}
                </select>
            </div>
            <div className={styles.products}>
                {
                    prodCount === 0 ? <h1>
                        {language === 'en' ? 'No products found' : 'Ürün bulunamadı'}
                    </h1> :
                    products.map((category) => (
                        category.map((product) => (
                            <Link href={`/products/${
                               encodeURIComponent(product.name.replace(/\s/g, '-').toLowerCase())
                                }`} key={product.name}>
                        <div className={styles.product}>
                            <img src={product.image_url}></img>
                            <h1>{product.name}</h1>
                        </div>
                    </Link>
                    ))
                ))}
            </div>
            </div>
            </div>
        </div>

                </Suspense>    
    )
    }