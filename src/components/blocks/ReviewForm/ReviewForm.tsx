import React, {FC} from 'react';
import cls from './ReviewForm.module.scss'
import Button from "../../ui/Button/Button";
import StarPicker from "../../ui/StarPicker/StarPicker";


type ReviewFormProps = {}

const ReviewForm: FC<ReviewFormProps> = () => {
    return (
        <form className={cls.box}>
            <p className={cls.title}>Оставить отзыв</p>

            <div className={cls.group}>
                <label className={cls.label}>Ваша оценка</label>
                <StarPicker/>
            </div>

            <div className={cls.group}>
                <label className={cls.label}>Ваше имя</label>
                <input className={cls.input} type={'text'}/>
            </div>

            <div className={cls.group}>
                <label className={cls.label}>Ваш email</label>
                <input className={cls.input} type={'email'}/>
            </div>

            <div className={cls.group}>
                <label className={cls.label}>Ваше имя</label>
                <textarea className={cls.textarea}/>
            </div>

            <Button type={'fill'}>Отправить</Button>

        </form>
    );
};

export default ReviewForm;