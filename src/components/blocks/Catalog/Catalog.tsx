import React, {FC} from 'react';
import cls from './Catalog.module.scss'
import ProductCard from "../../ui/ProductCard/ProductCard";
import Container from "../../wrappers/Container/Container";


import product1 from './products/product-1.png'
import product2 from './products/product-2.png'
import product3 from './products/product-3.png'
import product4 from './products/product-4.png'
import product5 from './products/product-5.png'
import RadioList from "../../ui/RadioList/RadioList";


const list = [
    {
        name: 'Casio G-Shock DW-5600E-1V',
        price: '12 340',
        discount: '-15%',
        image: product1,
    },
    {
        name: 'Metabo PowerMaxx BS Basic 600080500',
        price: '15 690',
        discount: '-20%',
        image: product2,
    },
    {
        name: 'Belshina Artmotion',
        price: '2 710',
        discount: '-10%',
        image: product3,
    },
    {
        name: 'Nikon 35mm f/1.8G AF-S DX Nikkor',
        price: '32 024',
        discount: '-7%',
        image: product4,
    },
    {
        name: 'Мобильный телефон Samsung Galaxy S20 FE (2021) 6/128GB',
        price: '41 050',
        discount: '-27%',
        image: product5,
    },
    {
        name: 'Belshina Artmotion',
        price: '2 710',
        discount: '-10%',
        image: product3,
    },
    {
        name: 'Nikon 35mm f/1.8G AF-S DX Nikkor',
        price: '32 024',
        discount: '-7%',
        image: product4,
    },
    {
        name: 'Casio G-Shock DW-5600E-1V',
        price: '12 340',
        discount: '-15%',
        image: product1,
    },
    {
        name: 'Casio G-Shock DW-5600E-1V',
        price: '12 340',
        discount: '-15%',
        image: product1,
    },
    {
        name: 'Metabo PowerMaxx BS Basic 600080500',
        price: '15 690',
        discount: '-20%',
        image: product2,
    },
    {
        name: 'Casio G-Shock DW-5600E-1V',
        price: '12 340',
        discount: '-15%',
        image: product1,
    },
    {
        name: 'Belshina Artmotion',
        price: '2 710',
        discount: '-10%',
        image: product3,
    },
    {
        name: 'Nikon 35mm f/1.8G AF-S DX Nikkor',
        price: '32 024',
        discount: '-7%',
        image: product4,
    },
    {
        name: 'Casio G-Shock DW-5600E-1V',
        price: '12 340',
        discount: '-15%',
        image: product1,
    },
    {
        name: 'Belshina Artmotion',
        price: '2 710',
        discount: '-10%',
        image: product3,
    },
]

const filterList = [
    {label: 'сутки', value: 'day', checked: true},
    {label: 'неделя', value: 'week'},
    {label: 'месяц', value: 'month'},
]


type CatalogProps = {}

const Catalog: FC<CatalogProps> = () => {

    return (
        <div className={cls.box}>
            <Container>

                <div className={cls.header}>
                    <h2 className={cls.title}>Выгодные предложения</h2>
                    <div className={cls.filters}>
                        <RadioList name={'filter'} list={filterList} mobileSmall={true}/>
                    </div>
                </div>
                <ul className={cls.list}>
                    {
                        Object.keys(list).map((keyName, i) => (
                            <li className={cls.item} key={i}>
                                <ProductCard
                                    name={list[i]['name']}
                                    price={list[i]['price']}
                                    discount={list[i]['discount']}
                                    image={list[i]['image']}
                                />
                            </li>
                        ))
                    }
                </ul>

            </Container>
        </div>
    );
};

export default Catalog;