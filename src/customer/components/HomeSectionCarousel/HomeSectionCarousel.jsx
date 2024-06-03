import React, { useRef, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { productExample } from '../../../Data/productExample';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { Button } from '@mui/material';

const HomeSectionCarousel = ({data, sectionName}) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null)

  const itemsPerSlide = 5

  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };
  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };


  const syncActiveIndex = ({ item }) => setActiveIndex(item)

  const items = data.slice(0, 10).map((item) => <HomeSectionCard product={item} />)
  return (
    <div className='relative px-4 lg:px-8 border'>
      <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          ref={carouselRef}
        />

        {activeIndex < items.length - itemsPerSlide && <Button variant='contained' className='z-50' onClick={slideNext} sx={{ position: 'absolute', top: "8rem", right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white" }} aria-label='next'>
          <ArrowBackIosNewIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>}

        {activeIndex !== 0 && <Button variant='contained' className='z-50' onClick={slidePrev} sx={{ position: 'absolute', top: "8rem", left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white" }} aria-label='next'>
          <ArrowBackIosNewIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
        </Button>}

      </div>

    </div>
  )
}

export default HomeSectionCarousel