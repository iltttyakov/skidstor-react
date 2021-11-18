import React, {FC} from 'react';
import cls from './ProductCard.module.scss'
import Hint from "../Hint/Hint";
import {Link} from "react-router-dom";


type ProductCardProps = {
    name: string,
    price: string,
    image: string,
    discount?: string
}

const ProductCard: FC<ProductCardProps> = (
    {name, price, image, discount}
) => {
    return (
        <div className={cls.box}>
            {
                discount
                    ? <Hint className={cls.discount}>{discount}</Hint>
                    : null
            }
            <div className={cls.imageContainer}>
                <img className={cls.image} src={image} alt={`Изображение ${name}`}/>
            </div>
            <div className={cls.infoContainer}>
                <h3 className={cls.name}>
                    {name}
                </h3>
                <p className={cls.price}>
                    от {price} ₽
                </p>
            </div>
            <Link className={cls.link} to={'/product'}/>
        </div>
    );
};

export default ProductCard;