import React, {FC} from 'react';
import cls from './Overlay.module.scss'


type OverlayProps = {
    show: boolean,
    onClick: () => void,
    className?: string
}

const Overlay: FC<OverlayProps> = ({show = false, onClick = null, className = ''}) => {
    return (
        <div className={[cls.box, show ? cls.show : ''].join(' ')} onClick={onClick}/>
    );
};

export default Overlay;