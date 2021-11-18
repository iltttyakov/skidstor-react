import React, {FC, useState} from 'react';
import cls from './Lang.module.scss'
import Icons from "../Icons/Icons";

const LANG_LIST = [
    'RU', 'EN'
]
const DEFAULT_LANG = LANG_LIST[0]

type LocaleProps = {}

const Lang: FC<LocaleProps> = () => {
    const [currentLang, setCurrentLang] = useState(DEFAULT_LANG)
    const [showList, setShowList] = useState(false)

    const changeLang = (lang: string) => {
        setCurrentLang(lang)
        setShowList(false)
    }

    return (
        <div className={cls.container}>
            <button className={cls.box} onClick={() => {
                setShowList(!showList)
            }}>
                <span className={cls.label}>{currentLang}</span>
                <Icons name={'arrow-down'} size={16} className={cls.icon}/>
            </button>
            {
                showList
                    ? <div className={cls.list}>
                        {
                            Object.keys(LANG_LIST).map((keyName, i) => {
                                const lang = LANG_LIST[i]

                                return (
                                    <button
                                        key={i}
                                        className={cls.button}
                                        onClick={() => changeLang(lang)}
                                    >
                                        {lang}
                                    </button>
                                )
                            })
                        }
                    </div>
                    : null
            }
        </div>
    );
};

export default Lang;