import React, {FC} from 'react';
import Breadcrumbs from "../ui/Breadcrumbs/Breadcrumbs";
import Product from "../blocks/Product/Product";


type ProductPageProps = {}

const ProductPage: FC<ProductPageProps> = () => {
    return (
        <>
            <Breadcrumbs/>
            <Product/>
        </>
    );
};

export default ProductPage;