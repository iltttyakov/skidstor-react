import React, {FC} from 'react';
import cls from './Radio.module.scss'
import randomString from "../../../../helpers/random-string";


type RadioProps = {
    label: string,
    name: string,
    value: string,
    checked?: boolean,
    mobileSmall?: boolean
}

const Radio: FC<RadioProps> = ({label, name, value, checked, mobileSmall = false}) => {
    const htmlFor = name + randomString(5)

    const labelClsArr = [cls.label]
    if (labelClsArr) labelClsArr.push(cls.mobileSmall)

    return (
        <div className={cls.box}>
            <input
                className={cls.input}
                type={'radio'}
                name={name}
                value={value}
                defaultChecked={checked}
                id={htmlFor}
            />
            <label className={labelClsArr.join(' ')} htmlFor={htmlFor}>
                <span>{label}</span>
            </label>
        </div>
    );
};

export default Radio;