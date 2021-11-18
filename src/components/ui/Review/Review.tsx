import React, {FC} from 'react';
import cls from './Review.module.scss'
import Icons from "../Icons/Icons";
import Star from "../Star/Star";


type ReviewProps = {
    name: string,
    avatar: string,
    text: string
}

const Review: FC<ReviewProps> = ({name, avatar, text}) => {
    return (
        <div className={cls.box}>
            <img className={cls.avatar} src={avatar} width={48} height={48} alt={'Аватар пользователя'}/>
            <div className={cls.main}>
                <p className={cls.name}>{name}</p>
                <div className={cls.stars}>
                    <Star className={cls.star} active={true}/>
                    <Star className={cls.star} active={true}/>
                    <Star className={cls.star} active={true}/>
                    <Star className={cls.star} active={true}/>
                    <Star className={cls.star} active={true}/>
                </div>
                <div className={cls.text} dangerouslySetInnerHTML={{__html: text}}/>
                <button className={cls.discuss}>Обсудить</button>
            </div>
        </div>
    );
};

export default Review;