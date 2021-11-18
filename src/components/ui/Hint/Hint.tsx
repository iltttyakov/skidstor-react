import React, {FC} from 'react';
import cls from './Hint.module.scss'


type HintProps = {
    className?: string
}

const Hint: FC<HintProps> = ({children, className = ''}) => {
    const clsArr = [cls.box, className]

    return (
        <div className={clsArr.join(' ')}>
            <span className={cls.text}>{children}</span>
        </div>
    );
};

export default Hint;