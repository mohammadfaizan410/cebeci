import { Suspense } from "react";
import ProductsUi from "../ui/products/products";
import LoadingSkeleton from "../ui/loading/skeleton";
export default function Products() {
    return (
        <Suspense fallback={
            <LoadingSkeleton />
        }>
            <ProductsUi />
        </Suspense>
    );
    }