import React, {FC, useState} from 'react';
import cls from './Location.module.scss'
import Icons from "../Icons/Icons";

const LOCATION_LIST = [
    'Ярославль', 'Москва', 'Санкт-Петербург', 'Казань', 'Томск', 'Ярославль'
]
const DEFAULT_LOCATION = LOCATION_LIST[0]


type LocationProps = {}

const Location: FC<LocationProps> = () => {
    const [location, setLocation] = useState(DEFAULT_LOCATION)
    const [showList, setShowList] = useState(false)

    const changeLocation = (location: string) => {
        setLocation(location)
        setShowList(false)
    }

    return (
        <div className={cls.container}>
            <button className={cls.box} onClick={() => setShowList(!showList)}>
                <Icons name={'location'} size={16} className={cls.icon}/>
                <span className={cls.name}>
                    {location}
                </span>
            </button>
            <div className={[cls.list, showList ? cls.show : ''].join(' ')}>
                {
                    Object.keys(LOCATION_LIST).map((keyName, i) => {
                        const location = LOCATION_LIST[i]
                        return (
                            <button
                                key={i}
                                className={cls.button}
                                onClick={() => changeLocation(location)}
                            >
                                {location}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Location;