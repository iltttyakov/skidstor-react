import React, {FC, ReactNode, useEffect, useState} from 'react';
import cls from './Product.module.scss'
import Container from "../../wrappers/Container/Container";
import Button from "../../ui/Button/Button";
import RadioList from "../../ui/RadioList/RadioList";
import Colors from "../../ui/Colors/Colors";
import Description from "../Description/Description";
import Prices from "../Prices/Prices";
import Reviews from "../Reviews/Reviews";
import PriceDynamics from "../PriceDynamics/PriceDynamics";
import ProductGallery from "../ProductGallery/ProductGallery";


const info = {
    name: 'Мобильный телефон Apple iPhone 12 Pro Max',
    memory: [
        {label: '128 Гб', value: '128', checked: true},
        {label: '256 Гб', value: '256'},
        {label: '512 Гб', value: '512'},
    ],
    colors: [
        '#0F0E0E', '#FA5050', '#5ACE57', '#FF9E01', '#2093F2'
    ]
}

type ProductProps = {}

const description = <Description/>
const prices = <Prices/>
const reviews = <Reviews/>
const dynamics = <PriceDynamics/>

const Product: FC<ProductProps> = () => {
    const [tabContent, setTabContent] = useState<ReactNode>(description)
    const [activeTab, setActiveTab] = useState<string>('description')

    const tabCLs = (tabName: string) => {
        const clsArr = [cls.tabName]
        if (activeTab === tabName) clsArr.push(cls.active)

        return clsArr.join(' ')
    }

    useEffect(() => {
        switch (activeTab) {
            case 'description':
                setTabContent(description)
                break;
            case 'prices':
                setTabContent(prices)
                break;
            case 'reviews':
                setTabContent(reviews)
                break;
            case 'dynamics':
                setTabContent(dynamics)
                break;
        }
    }, [activeTab]);


    return (
        <div className={cls.box}>
            <Container>

                <h1 className={cls.name}>
                    {info['name']}
                </h1>

                <div className={cls.main}>

                    <div className={cls.gallery}>
                        <ProductGallery/>
                    </div>

                    <div className={cls.params}>
                        <p className={cls.price}>
                            от <span className={cls.priceValue}>37 000 ₽</span> до <span className={cls.priceValue}>42 340 ₽</span>
                        </p>

                        <div className={cls.paramsBlock}>
                            <div className={cls.buttons}>
                                <Button type={'fill'} className={[cls.button, cls.compare].join(' ')}>
                                    Сравнить цены
                                </Button>
                                <Button type={'stroke'} className={[cls.button, cls.dynamics].join(' ')}>
                                    Динамика<span className={cls.mobileNone}> цен</span>
                                </Button>
                            </div>
                        </div>

                        <div className={cls.paramsBlock}>
                            <p className={cls.paramsTitle}>Кол-во памяти</p>
                            <RadioList name={'memory'} list={info['memory']}/>
                        </div>

                        <div className={cls.paramsBlock}>
                            <p className={cls.paramsTitle}>Цвет</p>
                            <Colors list={info['colors']}/>
                        </div>

                        <div className={cls.paramsBlock}>
                            <p className={cls.paramsTitle}>Характеристики</p>
                            <p className={cls.paragraph}>
                                Смартфон 2 SIM экран: 6,7" OLED 1284x2778
                                встроенная память: 128 ГБ оперативная память:
                                6 ГБ процессор: Apple A14 Bionic ОС...
                            </p>
                        </div>

                        <div className={cls.paramsBlock}>
                            <p className={cls.paramsTitle}>Описание</p>
                            <p className={cls.paragraph}>
                                Apple iPhone 12 Pro Max – крупноформатная версия
                                флагмана 2020 года от купертинской компании.
                                Смартфон получил обновленный дизайн...
                            </p>
                        </div>

                    </div>

                </div>
            </Container>

            <Container className={cls.tabsContainer}>
                <ul className={cls.tabsList}>
                    <li className={cls.tabsItem}>
                        <button
                            className={tabCLs('description')}
                            onClick={() => setActiveTab('description')}
                        >
                            Описание
                        </button>
                    </li>
                    <li className={cls.tabsItem}>
                        <button
                            className={tabCLs('prices')}
                            onClick={() => setActiveTab('prices')}
                        >
                            Цены
                        </button>
                    </li>
                    <li className={cls.tabsItem}>
                        <button
                            className={tabCLs('reviews')}
                            onClick={() => setActiveTab('reviews')}
                        >
                            Отзывы
                        </button>
                    </li>
                    <li className={cls.tabsItem}>
                        <button
                            className={tabCLs('dynamics')}
                            onClick={() => setActiveTab('dynamics')}
                        >
                            Динамика цен
                        </button>
                    </li>
                </ul>
            </Container>

            <div className={cls.tabsContent}>
                {tabContent}
            </div>


        </div>
    );
};

export default Product;