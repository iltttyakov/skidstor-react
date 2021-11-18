import React, {FC, useEffect, useState} from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css';
import Icons from "../Icons/Icons";


type GalleryProps = {
    items: Array<string>
}

type ArrowProps = {
    className?: string,
    style?: string,
    onClick?: () => void
}


const PrevArrow: FC<ArrowProps> = ({className, style, onClick}) => {
    return (
        <button
            className={'gallery__arrow gallery__arrow--prev'}
            onClick={onClick}
        >
            <Icons name={'arrow-down'} size={32} className={'gallery__icon'}/>
        </button>
    )
}

const NextArrow: FC<ArrowProps> = ({className, style, onClick}) => {
    return (
        <button
            className={'gallery__arrow gallery__arrow--next'}
            onClick={onClick}
        >
            <Icons name={'arrow-down'} size={32} className={'gallery__icon'}/>
        </button>
    )
}


const Gallery: FC<GalleryProps> = ({items}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 764)
    const [main, setMain] = useState(null)
    const [thumbnails, setThumbnails] = useState(null)

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 764)
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize, false);
    }, [])


    return (
        <div className={'gallery__container'}>

            <div className={'gallery__thumbnails'}>
                <Slider
                    asNavFor={main}
                    ref={(slider) => setThumbnails(slider)}
                    slidesToShow={items.length <= 5 ? items.length - 1 : 5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    vertical={!isMobile}
                    arrows={true}
                    infinite={true}
                    prevArrow={<PrevArrow/>}
                    nextArrow={<NextArrow/>}
                    responsive={[
                        {
                            breakpoint: 764,
                            settings: {
                                slidesToShow: 7,
                            }
                        },
                        {
                            breakpoint: 625,
                            settings: {
                                slidesToShow: 5,
                            }
                        },
                        {
                            breakpoint: 450,
                            settings: {
                                slidesToShow: 3,
                            }
                        },
                    ]}
                >
                    {
                        Object.keys(items).map((keyName, i) => (
                            <div className={'gallery__thumbnail'} key={i}>
                                <div key={i} className={'gallery__thumbnail-inner'}>
                                    <img src={items[i]}/>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>

            <div className={'gallery__main'}>
                <Slider
                    asNavFor={thumbnails}
                    arrows={false}
                    infinite={true}
                    ref={(slider) => setMain(slider)}
                >
                    {
                        Object.keys(items).map((keyName, i) => (
                            <img src={items[i]} key={i}/>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Gallery;