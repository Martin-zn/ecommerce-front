import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { productExample } from '../../../Data/productExample'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className=' space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={productExample} sectionName={"Primeros Productos"}/>
            <HomeSectionCarousel data={productExample} sectionName={"Segundo Productos"}/>
        </div>
    </div>
  )
}

export default HomePage