import React, {FC} from 'react';
import cls from './Footer.module.scss'
import Container from "../../wrappers/Container/Container";
import Social from "../../ui/Social/Social";


type FooterProps = {}

const Footer: FC<FooterProps> = () => {
    return (
        <div className={cls.box}>
            <Container>

                <div className={cls.container}>
                    <p className={[cls.text, cls.copyright].join(' ')}>
                        © Skidstor 2021. Все права защищены
                    </p>
                    <p className={[cls.text, cls.details].join(' ')}>
                        ИП Бондарь Михаил Александрович / ОГРНИП: 321312300035189 / ИНН 310208225142
                    </p>
                    <div className={cls.contacts}>
                        <a className={[cls.text, cls.email].join(' ')} href="mailto:skidstor@gmail.com">
                            skidstor@gmail.com
                        </a>
                        <Social/>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Footer;