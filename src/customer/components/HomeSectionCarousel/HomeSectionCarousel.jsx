import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import { Button } from '@mui/material';

const HomeSectionCarousel = () => {

    const [activeIndex, setActiveIndex]=useState(0);

const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
};

const slidePrev=()=>setActiveIndex(activeIndex-1);
const slideNext=()=>setActiveIndex(activeIndex+1);

const syncActiveIndex=({item})=>setActiveIndex(item)

const items = [1,1,1,1,1,1,1,1,1,1,1,1,1].map((item) => <HomeSectionCard/>)
  return (
    <div className='relative px-4 lg:px-8'>
        <div className='relative p-5'>
            <AliceCarousel
            items={items}
            disableButtonsControls
            infinite
            responsive={responsive}
            disableDotsControls
            onSlideChange={syncActiveIndex}
            activeIndex={activeIndex}
            />
            
            <Button variant='contained' className='z-50' onClick={slideNext} sx={{position:'absolute', top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)", bgcolor:"white"}}aria-label='next'>
<ArrowBackIosNewIcon sx={{transform:"rotate(90deg)", color:"black"}}/>
            </Button>

            {activeIndex !== items.length-5 && <Button variant='contained' className='z-50' onClick={slidePrev} sx={{position:'absolute', top:"8rem", left:"0rem", transform:"translateX(-50%) rotate(-90deg)", bgcolor:"white"}}aria-label='next'>
<ArrowBackIosNewIcon sx={{transform:"rotate(90deg)", color:"black"}}/>
            </Button>}

        </div>

    </div>
  )
}

export default HomeSectionCarousel