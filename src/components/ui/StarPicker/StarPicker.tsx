import React, {FC} from 'react';
import cls from './StarPicker.module.scss'
import Icons from "../Icons/Icons";


type StarPickerProps = {}

const StarPicker: FC<StarPickerProps> = () => {
    return (
        <div className={cls.list}>
            <input className={cls.input} type={'radio'} id={'star5'} name={'rate'} value={5}/>
            <label className={cls.label} htmlFor={'star5'}>
                <Icons name={'star'} size={32} className={cls.icon}/>
            </label>
            <input className={cls.input} type={'radio'} id={'star4'} name={'rate'} value={4}/>
            <label className={cls.label} htmlFor={'star4'}>
                <Icons name={'star'} size={32} className={cls.icon}/>
            </label>
            <input className={cls.input} type={'radio'} id={'star3'} name={'rate'} value={3}/>
            <label className={cls.label} htmlFor={'star3'}>
                <Icons name={'star'} size={32} className={cls.icon}/>
            </label>
            <input className={cls.input} type={'radio'} id={'star2'} name={'rate'} value={2}/>
            <label className={cls.label} htmlFor={'star2'}>
                <Icons name={'star'} size={32} className={cls.icon}/>
            </label>
            <input className={cls.input} type={'radio'} id={'star1'} name={'rate'} value={1}/>
            <label className={cls.label} htmlFor={'star1'}>
                <Icons name={'star'} size={32} className={cls.icon}/>
            </label>
        </div>
    );
};

export default StarPicker;