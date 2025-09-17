'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';        
import { Autoplay } from 'swiper/modules';        
import 'swiper/css/bundle';
import { CategoryInterface } from '@/interfaces/category.interface';


export default function CatSwiper( {data} : {data : CategoryInterface[]} ) {
  return (
    <>
     <div className='w-[80%] mx-auto' >

            <Swiper
      spaceBetween={50}
      slidesPerView={7}
      modules={[Autoplay]}
      autoplay={{ delay: 2500}}
    >

        {data.map ((category : CategoryInterface)=><SwiperSlide key={category._id} >
             <img src={category.image} alt='slider1' className=' w-full h-[150px] ' /> 
             <p className='text-center font-bold' >{category.name}</p>     



        </SwiperSlide>) }
     
    
      
    </Swiper>
    

     </div>
   
    
    
    </>
  )
}
