import React, {FC} from 'react';
import cls from './Button.module.scss'


type ButtonProps = {
    type: string,
    size?: string,
    className?: string,
    onClick?: () => void
}

const Button: FC<ButtonProps> = ({children, type, size = 'normal', className = '', onClick = null}) => {
    const clsArr = [cls.box, className]
    if (type === 'fill') clsArr.push(cls.fill)
    if (type === 'stroke') clsArr.push(cls.stroke)

    if (size === 'small') clsArr.push(cls.small)

    return (
        <button className={clsArr.join(' ')} onClick={onClick}>
            <span className={cls.text}>{children}</span>
        </button>
    );
};

export default Button;