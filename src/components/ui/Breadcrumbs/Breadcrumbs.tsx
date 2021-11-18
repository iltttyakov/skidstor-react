import React, {FC} from 'react';
import cls from './Breadcrumbs.module.scss'
import {Link} from "react-router-dom";
import Container from "../../wrappers/Container/Container";
import Icons from "../Icons/Icons";


type BreadcrumbsProps = {}

const Breadcrumbs: FC<BreadcrumbsProps> = () => {
    return (
        <Container className={cls.container}>
            <ul className={cls.list}>
                <li className={cls.item}>
                    <Link className={cls.link} to={'/'}>
                        <span>Главная</span>
                        <Icons name={'breadcrumbs-arrow'} size={12} className={cls.icon}/>
                    </Link>
                </li>
                <li className={cls.item}>
                    <Link className={cls.link} to={'/'}>
                        <span>Смартфоны и мобильные телефоны</span>
                        <Icons name={'breadcrumbs-arrow'} size={12} className={cls.icon}/>
                    </Link>
                </li>
                <li className={cls.item}>
                    <span className={[cls.link, cls.active].join(' ')}>
                        Мобильный телефон Apple iPhone 12 Pro Max
                    </span>
                </li>
            </ul>
        </Container>
    );
};

export default Breadcrumbs;