import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1500: { items: 2 },
};


const MainCarousel = () => {
    const items = mainCarouselData.map((item) => <img className='cursor-pointer items-center' role='presentation' src={item.image} alt="" />)

    return (
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            // autoHeight
            // autoWidth
            infinite
            syncStateOnPropsUpdate
            responsive={responsive}

        />
    )

}

export default MainCarousel;