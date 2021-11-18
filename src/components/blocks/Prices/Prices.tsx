import React, {FC} from 'react';
import cls from './Prices.module.scss'
import Button from "../../ui/Button/Button";
import Pagination from "../../ui/Pagination/Pagination";


import shop1 from './shops/shop-1.png'
import shop2 from './shops/shop-2.png'
import shop3 from './shops/shop-3.png'
import shop4 from './shops/shop-4.png'
import shop5 from './shops/shop-5.png'
import Container from "../../wrappers/Container/Container";


type PricesProps = {}

const Prices: FC<PricesProps> = () => {
    return (
        <Container className={cls.container}>
            <div className={cls.box}>
                <div className={cls.table}>
                    <div className={cls.row}>
                        <div className={cls.logoContainer}>
                            <img className={cls.logo} src={shop1} alt={'Логотип магазина'}/>
                        </div>
                        <div className={cls.main}>
                            <p className={cls.name}>
                                Смартфон Apple iPhone 12 Pro max 128GB Black (MGMM3/MGLQ3)
                            </p>
                            <div className={[cls.delivery, cls.info].join(' ')}>
                                <span className={cls.label}>Доставка: </span>
                                <span className={cls.value}>по Москве бесплатно</span>
                            </div>
                            <div className={[cls.guarantee, cls.info].join(' ')}>
                                <span className={cls.label}>Гарантия: </span>
                                <span className={cls.value}>12 месяцев</span>
                            </div>
                            <p className={cls.price}>
                                37 000 ₽
                            </p>
                            <Button type={'stroke'} size={'small'}>купить</Button>
                        </div>
                    </div>
                    <div className={cls.row}>
                        <div className={cls.logoContainer}>
                            <img className={cls.logo} src={shop2} alt={'Логотип магазина'}/>
                        </div>
                        <div className={cls.main}>
                            <p className={cls.name}>
                                Смартфон Apple iPhone 12 Pro max 128GB Black (MGMM3/MGLQ3)
                            </p>
                            <div className={[cls.delivery, cls.info].join(' ')}>
                                <span className={cls.label}>Доставка: </span>
                                <span className={cls.value}>по Москве бесплатно</span>
                            </div>
                            <div className={[cls.guarantee, cls.info].join(' ')}>
                                <span className={cls.label}>Гарантия: </span>
                                <span className={cls.value}>12 месяцев</span>
                            </div>
                            <p className={cls.price}>
                                42 400 ₽
                            </p>
                            <Button type={'stroke'} size={'small'}>купить</Button>
                        </div>
                    </div>
                    <div className={cls.row}>
                        <div className={cls.logoContainer}>
                            <img className={cls.logo} src={shop3} alt={'Логотип магазина'}/>
                        </div>
                        <div className={cls.main}>
                            <p className={cls.name}>
                                Смартфон Apple iPhone 12 Pro max 128GB Black (MGMM3/MGLQ3)
                            </p>
                            <div className={[cls.delivery, cls.info].join(' ')}>
                                <span className={cls.label}>Доставка: </span>
                                <span className={cls.value}>по Москве бесплатно</span>
                            </div>
                            <div className={[cls.guarantee, cls.info].join(' ')}>
                                <span className={cls.label}>Гарантия: </span>
                                <span className={cls.value}>12 месяцев</span>
                            </div>
                            <p className={cls.price}>
                                37 000 ₽
                            </p>
                            <Button type={'stroke'} size={'small'}>купить</Button>
                        </div>
                    </div>
                    <div className={cls.row}>
                        <div className={cls.logoContainer}>
                            <img className={cls.logo} src={shop4} alt={'Логотип магазина'}/>
                        </div>
                        <div className={cls.main}>
                            <p className={cls.name}>
                                Смартфон Apple iPhone 12 Pro max 128GB Black (MGMM3/MGLQ3)
                            </p>
                            <div className={[cls.delivery, cls.info].join(' ')}>
                                <span className={cls.label}>Доставка: </span>
                                <span className={cls.value}>по Москве бесплатно</span>
                            </div>
                            <div className={[cls.guarantee, cls.info].join(' ')}>
                                <span className={cls.label}>Гарантия: </span>
                                <span className={cls.value}>12 месяцев</span>
                            </div>
                            <p className={cls.price}>
                                42 400 ₽
                            </p>
                            <Button type={'stroke'} size={'small'}>купить</Button>
                        </div>
                    </div>
                    <div className={cls.row}>
                        <div className={cls.logoContainer}>
                            <img className={cls.logo} src={shop5} alt={'Логотип магазина'}/>
                        </div>
                        <div className={cls.main}>
                            <p className={cls.name}>
                                Смартфон Apple iPhone 12 Pro max 128GB Black (MGMM3/MGLQ3)
                            </p>
                            <div className={[cls.delivery, cls.info].join(' ')}>
                                <span className={cls.label}>Доставка: </span>
                                <span className={cls.value}>по Москве бесплатно</span>
                            </div>
                            <div className={[cls.guarantee, cls.info].join(' ')}>
                                <span className={cls.label}>Гарантия: </span>
                                <span className={cls.value}>12 месяцев</span>
                            </div>
                            <p className={cls.price}>
                                37 000 ₽
                            </p>
                            <Button type={'stroke'} size={'small'}>купить</Button>
                        </div>
                    </div>
                </div>
                <Pagination/>
            </div>
        </Container>
    );
};

export default Prices;