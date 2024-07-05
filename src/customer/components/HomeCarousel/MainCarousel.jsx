import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import "./MainCarousel.css"

const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1500: { items: 3 },
};


const MainCarousel = () => {
    const items = mainCarouselData.map((item) => (
        <div className="carousel-item-wrapper">
            <img 
                className='cursor-pointer object-cover w-full h-full'
                role='presentation'
                src={item.image}
                alt=""
            />
        </div>
    ))

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            syncStateOnPropsUpdate
            responsive={responsive}
        />
    )
}

export default MainCarousel;