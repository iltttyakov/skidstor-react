import React, {FC} from 'react';
import cls from './Logo.module.scss'
import logo from './logo.svg'
import {Link} from "react-router-dom";

type LogoProps = {}

const Logo: FC<LogoProps> = () => {
    return (
        <div className={cls.box}>
            <img className={cls.image} src={logo} width={199} height={40} alt={'Логотип'}/>
            <Link className={cls.link} to={'/'}/>
        </div>
    );
};

export default Logo;