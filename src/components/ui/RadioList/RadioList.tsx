import React, {FC} from 'react';
import cls from './RadioList.module.scss'
import Radio from "./Radio/Radio";


type RadioListProps = {
    name: string,
    list: Array<any>,
    mobileSmall?: boolean
}

const RadioList: FC<RadioListProps> = ({name, list, mobileSmall= false}) => {
    return (
        <ul className={cls.list}>
            {
                Object.keys(list).map((keyName, i) => (
                    <li key={i} className={cls.item}>
                        <Radio
                            checked={list[i]['checked']}
                            label={list[i]['label']}
                            name={name}
                            value={list[i]['value']}
                            mobileSmall={mobileSmall}
                        />
                    </li>
                ))
            }
        </ul>
    );
};

export default RadioList;