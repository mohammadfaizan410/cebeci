import { Suspense } from "react";
import ProductsUi from "../ui/products/products";
export default function Products() {
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <ProductsUi />
        </Suspense>
    );
    }