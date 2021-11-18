import React, {FC} from 'react';
import cls from './Category.module.scss'


type CategoryProps = {
    name: string,
    icon: string,
    background?: string,
    className?: string
}

const Category: FC<CategoryProps> = ({name, icon, background = '#F0F0F9', className = ''}) => {
    const clsArr = [cls.box, className]

    return (
        <div className={clsArr.join(' ')}>
            <div className={cls.inner}>
                <div className={cls.iconContainer} style={{backgroundColor: background}}>
                    <img className={cls.icon} src={icon} width={48} height={38} alt={`Иконка ${name}`}/>
                </div>
                <div className={cls.name}>{name}</div>
                <a href="#" className={cls.link}/>
            </div>
        </div>
    );
};

export default Category;