import React, {FC} from 'react';
import cls from './Search.module.scss'
import Icons from "../Icons/Icons";


import shop1 from './shops/shop-1.png'
import shop2 from './shops/shop-2.png'
import shop3 from './shops/shop-3.png'
import shop4 from './shops/shop-4.png'
import shop5 from './shops/shop-5.png'
import Tag from "../Tag/Tag";

const SHOP_LIST = [
    'Aliexpress', 'Яндекс.Маркет', 'Booking.com', 'М.Видео', 'SHEIN'
]

const PRODUCT_LIST = [
    'nvidia geforce rtx 3070', 'яндекс станция мини', 'amd ryzen 5 5600x', 'apple iphone 12 pro max',
    'xiaomi mi band 5', 'xiaomi poco x3', 'huawei p40 pro', 'apple watch se'
]


type SearchProps = {}

const Search: FC<SearchProps> = () => {
    return (
        <form className={cls.box}>
            <input type={'text'} name={'q'} className={cls.input} placeholder={'Найти товары или магазин'}
                   autoComplete={'off'}/>

            <div className={cls.hintContainer}>
                <div className={cls.hintBlock}>
                    <div className={cls.hintTitle}>Магазины</div>
                    <ul className={cls.hintList}>
                        {
                            Object.keys(SHOP_LIST).map((keyName, i) => {
                                return (
                                    <li className={cls.hintItem} key={i}>
                                        <Tag text={SHOP_LIST[i]}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={cls.hintBlock}>
                    <div className={cls.hintTitle}>Товары</div>
                    <ul className={cls.hintList}>
                        {
                            Object.keys(PRODUCT_LIST).map((keyName, i) => {
                                return (
                                    <li className={cls.hintItem} key={i}>
                                        <Tag text={PRODUCT_LIST[i]}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>

            <button className={cls.button}>
                <span className={cls.buttonText}>Поиск</span>
                <Icons name={'search'} size={24} className={cls.buttonIcon}/>
            </button>
        </form>
    );
};

export default Search;