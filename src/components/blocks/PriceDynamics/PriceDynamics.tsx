import React, {FC} from 'react';
import cls from './PriceDynamics.module.scss'
import Container from "../../wrappers/Container/Container";
import {LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, Tooltip, Legend, YAxis} from 'recharts';

const data = [
    {
        price: 46000,
        priceLabel: '46 000',
        date: ''
    },
    {
        price: 40000,
        priceLabel: '40 000',
        date: '11.2020'
    },
    {
        price: 45000,
        priceLabel: '45 000',
        date: '01.2020'
    },
    {
        price: 38000,
        priceLabel: '38 000',
        date: '03.2020'
    },
    {
        price: 47000,
        priceLabel: '47 000',
        date: '05.2020'
    },
    {
        price: 37000,
        priceLabel: '37 000',
        date: '07.2020'
    },
    {
        price: 45500,
        priceLabel: '45 500',
        date: '09.2020'
    },
    {
        price: 46000,
        priceLabel: '46 000',
        date: ''
    },
]


type PriceDynamicsProps = {}

const PriceDynamics: FC<PriceDynamicsProps> = () => {
    return (
        <Container className={cls.container}>
            <div className={cls.box}>
                <div className={cls.legend}>
                    Цена, руб.
                </div>
                <ResponsiveContainer width={'100%'} height={'100%'}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray={'0'} strokeWidth={1} stroke={'#D9DCDD'}/>
                        <XAxis dataKey={'date'} tickSize={0} tickMargin={16}/>
                        <YAxis dataKey={'price'} tickSize={0} tickMargin={16}
                               tickFormatter={tick => tick.toLocaleString()}
                        />
                        <Line type={'monotone'} dataKey={'price'} stroke={'#609DD5'} dot={false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </Container>
    );
};

export default PriceDynamics;