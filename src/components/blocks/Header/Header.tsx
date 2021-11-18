import React, {FC, useState} from 'react';
import cls from './Header.module.scss';
import Logo from "../../ui/Logo/Logo";
import Container from "../../wrappers/Container/Container";
import Search from "../../ui/Search/Search";
import Location from "../../ui/Location/Location";
import Lang from "../../ui/Lang/Lang";
import Icons from "../../ui/Icons/Icons";
import Overlay from "../../ui/Overlay/Overlay";


type HeaderProps = {};

const Header: FC<HeaderProps> = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [showLocation, setShowLocation] = useState(false)

    const overlayClick = () => {
        setShowLocation(false)
        setShowSearch(false)
    }

    return (
        <>
            <div className={cls.box}>
                <Container>
                    <div className={cls.container}>

                        <div className={cls.logo}>
                            <Logo/>
                        </div>

                        <div className={[cls.search, showSearch ? cls.show : ''].join(' ')}>
                            <Search/>
                        </div>

                        <div className={cls.mobileControls}>
                            <button className={cls.mobileControl} onClick={() => {
                                setShowSearch(true)
                            }}>
                                <Icons name={'search'} size={24} className={cls.mobileIcon}/>
                            </button>
                            <button className={cls.mobileControl} onClick={() => {
                                setShowLocation(true)
                            }}>
                                <Icons name={'location'} size={24} className={cls.mobileIcon}/>
                            </button>
                        </div>


                        <div className={[cls.location, showLocation ? cls.show : ''].join(' ')}>
                            <Location/>
                        </div>
                        <div className={cls.lang}>
                            <Lang/>
                        </div>


                    </div>
                </Container>
            </div>
            <Overlay show={showLocation || showSearch} onClick={overlayClick}/>
        </>
    );
};

export default Header;