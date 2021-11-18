import React, {FC} from 'react';
import cls from './Tag.module.scss'


type TagProps = {
    text: string
}

const Tag: FC<TagProps> = ({text}) => {
    return (
        <div className={cls.box}>
            <span className={cls.text}>{text}</span>
        </div>
    );
};

export default Tag;