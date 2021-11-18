import React, {FC, ReactNode} from 'react';
import cls from './Layout.module.scss'

type LayoutProps = {}

const Layout: FC<LayoutProps> = ({children}) => {
    return (
        <div className={cls.box}>
            {children}
        </div>
    );
};

export default Layout;