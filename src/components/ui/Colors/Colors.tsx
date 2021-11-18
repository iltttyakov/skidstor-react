import React, {FC} from 'react';
import cls from './Colors.module.scss'


type ColorsProps = {
    list: Array<string>
}

const Colors: FC<ColorsProps> = ({list}) => {
    return (
        <ul className={cls.list}>
            {
                Object.keys(list).map((keyName, i) => (
                    <li key={i} className={cls.item} style={{backgroundColor: list[i]}}/>
                ))
            }
        </ul>
    );
};

export default Colors;