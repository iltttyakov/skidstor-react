import React, {FC} from 'react';
import cls from './Star.module.scss'
import Icons from "../Icons/Icons";


type StarProps = {
    className: string,
    active: boolean
}

const Star: FC<StarProps> = ({className, active}) => {
    const clsArr = [cls.box, className]
    if (active) clsArr.push(cls.active)

    return (
        <Icons name={'star'} size={16} className={clsArr.join(' ')}/>
    );
};

export default Star;