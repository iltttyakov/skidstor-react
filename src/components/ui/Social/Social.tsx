import React, {FC} from 'react';
import cls from './Social.module.scss'

import telegram from './telegram.png'
import vk from './vk.png'

type SocialProps = {}

const Social: FC<SocialProps> = () => {
    return (
        <ul className={cls.list}>
            <li className={cls.item}>
                <img src={telegram} width={32} height={32} className={cls.icon}
                     alt={'Ссылка на аккаунт компании в Telegram'}/>
                <a className={cls.link} href={'https://telegram.org/'} target={'_blank'}/>
            </li>
            <li className={cls.item}>
                <img src={vk} width={32} height={32} className={cls.icon}
                     alt={'Ссылка на аккаунт компании в VK'}/>
                <a className={cls.link} href={'https://vk.com/'} target={'_blank'}/>
            </li>
        </ul>
    );
};

export default Social;