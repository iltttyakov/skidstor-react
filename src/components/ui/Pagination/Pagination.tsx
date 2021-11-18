import React, {FC} from 'react';
import cls from './Pagination.module.scss'
import {Link} from "react-router-dom";


type PaginationProps = {}

const Pagination: FC<PaginationProps> = () => {
    return (
        <ul className={cls.list}>
            <li className={cls.item}>
                <span className={[cls.link, cls.active].join(' ')}>1</span>
            </li>
            <li className={cls.item}>
                <Link to={'#'} className={cls.link}>2</Link>
            </li>
            <li className={cls.item}>
                <Link to={'#'} className={cls.link}>3</Link>
            </li>
            <li className={cls.item}>
                <span className={cls.link}>...</span>
            </li>
            <li className={cls.item}>
                <Link to={'#'} className={cls.link}>5</Link>
            </li>
        </ul>
    );
};

export default Pagination;