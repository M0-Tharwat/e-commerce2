'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';        
import { Autoplay } from 'swiper/modules';        
import 'swiper/css/bundle';
import { BrandInterface } from '@/interfaces/Brand.interface';


export default function BrSwiper( {data} : {data:BrandInterface[]} ) {
  return (
    <>
     <div className='w-[80%] mx-auto' >

            <Swiper
      spaceBetween={50}
      slidesPerView={7}
      modules={[Autoplay]}
      autoplay={{ delay: 2500}}
    >

        {data.map ((Brand : BrandInterface)=><SwiperSlide key={Brand._id} >
             <img src={Brand.image} alt='slider1' className=' w-full h-[150px] ' /> 
                



        </SwiperSlide>) }
     
    
      
    </Swiper>
    

     </div>
   
    
    
    </>
  )
}
