import React, {FC, useEffect, useState} from 'react';
import cls from './Categories.module.scss'
import Container from "../../wrappers/Container/Container";
import Category from "../../ui/Category/Category";
import Glider from '../../libs/Glider/glider.min.js'

import icon1 from './icons/category-1.png'
import icon2 from './icons/category-2.png'
import icon3 from './icons/category-3.png'
import icon4 from './icons/category-4.png'
import icon5 from './icons/category-5.png'
import icon6 from './icons/category-6.png'
import icon7 from './icons/category-7.png'
import icon8 from './icons/category-8.png'
import icon9 from './icons/category-9.png'
import icon10 from './icons/category-10.png'
import Icons from "../../ui/Icons/Icons";


const list = [
    {
        name: 'Все магазины',
        icon: icon1
    },
    {
        name: 'Маркетплейсы',
        icon: icon2
    },
    {
        name: 'Электроника',
        icon: icon3
    },
    {
        name: 'Бытовая техника',
        icon: icon4
    },
    {
        name: 'Одежда и обувь',
        icon: icon5
    },
    {
        name: 'Красота и здоровье',
        icon: icon6
    },
    {
        name: 'Дом и сад',
        icon: icon7
    },
    {
        name: 'Детям',
        icon: icon8
    },
    {
        name: 'Спорт и отдых',
        icon: icon9
    },
    {
        name: 'Автотовары',
        icon: icon10
    },
    {
        name: 'Бытовая техника',
        icon: icon4
    },
    {
        name: 'Одежда и обувь',
        icon: icon5
    },
    {
        name: 'Красота и здоровье',
        icon: icon6
    },
    {
        name: 'Дом и сад',
        icon: icon7
    },
    {
        name: 'Детям',
        icon: icon8
    },
    {
        name: 'Спорт и отдых',
        icon: icon9
    },
    {
        name: 'Автотовары',
        icon: icon10
    },
]

const responsive = {
    desktop: {
        breakpoint: {max: 9000, min: 1024},
        items: 10
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

type CategoriesProps = {}

const Categories: FC<CategoriesProps> = () => {
    const handleResize = () => {
        if (window.innerWidth > 764) {
            new Glider(
                document.querySelector('.categories'),
                {
                    slidesToShow: 12,
                    draggable: true,
                    dragVelocity: 1,
                    arrows: {
                        prev: '.categories-prev',
                        next: '.categories-next'
                    }
                }
            )
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize, false)
    }, [])


    return (
        <div className={cls.box}>
            <Container className={cls.container}>

                <div className={cls.innerContainer}>
                    <button className={['categories-prev', cls.navButton, cls.prev].join(' ')}>
                        <Icons name={'arrow-left'} size={32} className={cls.icon}/>
                    </button>
                    <div className={['categories', cls.list].join(' ')}>
                        {
                            Object.keys(list).map((keyName, i) => (
                                <Category
                                    key={i}
                                    name={list[i]['name']}
                                    icon={list[i]['icon']}
                                    className={cls.item}
                                />
                            ))
                        }
                    </div>
                    <button className={['categories-next', cls.navButton, cls.next].join(' ')}>
                        <Icons name={'arrow-left'} size={32} className={cls.icon}/>
                    </button>
                </div>

            </Container>
        </div>
    );
};

export default Categories;