import React, {FC} from 'react';
import cls from './ProductGallery.module.scss'


import img1 from '../../blocks/ProductGallery/images/product-1.png'
import img2 from '../../blocks/ProductGallery/images/product-2.png'
import img3 from '../../blocks/ProductGallery/images/product-3.png'
import img4 from '../../blocks/ProductGallery/images/product-4.png'
import img5 from '../../blocks/ProductGallery/images/product-5.png'

import Gallery from "../../ui/Gallery/Gallery";

const images = [img1, img2, img3, img4, img5, img3, img4, img5]


type ProductGalleryProps = {}

const ProductGallery: FC<ProductGalleryProps> = () => {
    return (
        <div className={cls.box}>
            <Gallery items={images}/>
        </div>
    );
};

export default ProductGallery;