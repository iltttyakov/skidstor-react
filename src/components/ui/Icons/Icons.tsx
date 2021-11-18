import React, {FC} from 'react';
import IconsSVG from './sprite.svg';

type Props = {
    name: string,
    size: number,
    className?: string,
}

const Icons: FC<Props> = ({name, size, className = ''}) =>
    <svg className={className} width={size} height={size}>
        <use xlinkHref={`${IconsSVG}#${name}`}/>
    </svg>

export default Icons;