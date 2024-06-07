"use client"
import { useEffect, useState } from 'react';
import data from '../../../public/data.json';
import ProductDetails from '@/app/ui/products/productDetailsPage/productDetails';

export default function ProductDetail({
    params
}: {
    params: {
        detail: string;
    }
}) {
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

    const [product, setProduct] = useState<ProdInterface | null>(null);

    useEffect(() => {
        let foundProduct: ProdInterface | null = null;

        data.some(category =>
            category.products.some(prod => {
                if (prod.name.replace(/\s/g, '-').toLowerCase() === params.detail) {
                    foundProduct = {
                        name: prod.name,
                        image: prod.image_url,
                        description: prod.description_html,
                        spec_title: prod.spec_title,
                        specifications: prod.specifications,
                        category: category.CategoryName,
                        images: prod.images,
                        ul_product_tags: prod.ul_product_tags
                    };
                    return true;
                }
                return false;
            })
        );

        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [params.detail]);

    if (!product) {
        return <div>Loading</div>;
    }

    return (
        <div>
            <ProductDetails props={{ product }} />
        </div>
    );
}
