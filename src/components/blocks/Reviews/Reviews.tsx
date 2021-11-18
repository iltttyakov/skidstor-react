import React, {FC, useState} from 'react';
import Review from "../../ui/Review/Review";
import cls from './Reviews.module.scss'

import avatar1 from './avatars/avatar-1.png'
import avatar2 from './avatars/avatar-2.png'
import avatar3 from './avatars/avatar-3.png'
import avatar4 from './avatars/avatar-4.png'
import avatar5 from './avatars/avatar-5.png'
import ReviewForm from "../ReviewForm/ReviewForm";
import Button from "../../ui/Button/Button";
import Container from "../../wrappers/Container/Container";

const list = [
    {
        name: 'Руслан Супруненко',
        avatar: avatar1,
        text: '<p>Айфон очень дорогой, потому что он самый крутой. А еще он очень быстро разряжается, потому что его часто ставят на зарядку.</p>'
    },
    {
        name: 'Владимир Онищенко',
        avatar: avatar2,
        text: '<p>Купил жене на замену Xs Max, очень довольна. Все работает как заявлено Apple. Рассказы горе-блогеров и статьи в интернете о проблемах данной модели - фейк. </p>'
    },
    {
        name: 'Paul Greben',
        avatar: avatar3,
        text: '<p>Топ не за свои деньги</p>'
    },
    {
        name: 'Funkwish',
        avatar: avatar4,
        text: '<p>13 лет пользования айфоном и не знать что желтый экран это технология трутон, которая выключается в разделе экран… Камера ужасная? В сравнении с чем?</p>'
    },
    {
        name: 'Мария Подтыкан',
        avatar: avatar5,
        text: '<p>У меня было 3 модели Pro, и я считаю, что iPhone 12 Pro - лучший из них. Мне нравится экран и камера. Телефон также является самым быстрым iPhone, которым я когда-либо пользовался, что очень важно для меня</p>'
    }
]

type ReviewsProps = {}

const Reviews: FC<ReviewsProps> = () => {
    const [showForm, setShowForm] = useState(false)

    return (
        <Container>
            <div className={cls.box}>
                <Button
                    type={'fill'}
                    className={cls.showForm}
                    onClick={() => {
                        setShowForm(!showForm)
                    }}
                >
                    {
                        showForm ? 'скрыть форму' : 'оставить отзыв'
                    }
                </Button>
                <div className={cls.main}>
                    <div className={cls.listContainer}>
                        <ul className={cls.list}>
                            {
                                Object.keys(list).map((keyName, i) => (
                                    <li className={cls.item}>
                                        <Review
                                            name={list[i]['name']}
                                            avatar={list[i]['avatar']}
                                            text={list[i]['text']}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                        <Button className={cls.loadMore} type={'stroke'}>Смотреть ещё</Button>
                    </div>
                    <div className={[cls.formContainer, showForm ? cls.show : ''].join(' ')}>
                        <ReviewForm/>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Reviews;