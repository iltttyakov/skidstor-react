import React, {FC} from 'react';
import cls from './Container.module.scss'


type ContainerProps = {
    className?: string
}

const Container: FC<ContainerProps> = ({children, className = ''}) => {
    const clsArr = [cls.box, className]

    return (
        <div className={clsArr.join(' ')}>
            {children}
        </div>
    );
};

export default Container;