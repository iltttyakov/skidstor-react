import React, {FC} from 'react';
import cls from './Description.module.scss'
import Container from "../../wrappers/Container/Container";


type DescriptionProps = {}

const Description: FC<DescriptionProps> = () => {
    return (
        <Container>
            <div className={cls.box}>
                <div className={cls.main}>
                    <p>
                        Apple iPhone 12 Pro Max – крупноформатная версия флагмана 2020 года от купертинской компании.
                        Смартфон
                        получил обновленный дизайн, сочетающий строгие стальные грани и новые выразительные цвета
                        корпуса.
                    </p>

                    <p>
                        Apple iPhone 12 Pro Max оснащается 6,7-дюймовым экраном, который прикрыт специально
                        разработанным
                        защитным керамическим стеклом, способным, по заверению Apple, до 4 раз лучше защищать его от
                        ударов.
                    </p>

                    <p>
                        Довести производительность устройства до еще более невероятных высот позволяет процессор A14.
                        Обновленная система камер имеет ультраширокоугольный, широкоугольный и телефото объектив.
                        Улучшения коснулись качества ночной съемки и оптического увеличения. Дополнительно для смартфона
                        компанией был разработан совершенно новый продвинутый формат фотографий Apple ProRAW.
                    </p>

                    <p>
                        Новинкой стал встроенный LiDAR, способный сканировать объекты в комнате с удивительной
                        точностью,
                        что важно для съемки и виртуальной реальности. Apple iPhone 12 Pro Max получил магнит на задней
                        крышке,
                        названный MagSafe. Он создан для того, чтобы удерживать устройство на беспроводной зарядке,
                        автомобильном держателе, а также крепить огромное количество новых.
                    </p>
                </div>
                <table className={cls.table} cellPadding={0} cellSpacing={0}>
                    <tbody className={cls.tbody}>
                    <tr className={cls.tr}>
                        <th className={cls.th}>Производитель</th>
                        <td className={cls.td}>Apple</td>
                    </tr>
                    <tr className={cls.tr}>
                        <th className={cls.th}>Линейка</th>
                        <td className={cls.td}>iPhone 12 Pro Max</td>
                    </tr>
                    <tr className={cls.tr}>
                        <th className={cls.th}>Тип</th>
                        <td className={cls.td}>Смартфон</td>
                    </tr>
                    <tr className={cls.tr}>
                        <th className={cls.th}>Предустановленная ОС</th>
                        <td className={cls.td}>Apple iOS 14</td>
                    </tr>
                    <tr className={cls.tr}>
                        <th className={cls.th}>Оперативная память, ГБ</th>
                        <td className={cls.td}>6</td>
                    </tr>
                    <tr className={cls.tr}>
                        <th className={cls.th}>Встроенная память, ГБ</th>
                        <td className={cls.td}>128</td>
                    </tr>
                    <tr className={cls.tr}>
                        <th className={cls.th}>Слот расширения</th>
                        <td className={cls.td}>нет</td>
                    </tr>
                    <tr className={cls.tr}>
                        <th className={cls.th}>Тип SIM-карты</th>
                        <td className={cls.td}>Nano-SIM + eSIM</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default Description;