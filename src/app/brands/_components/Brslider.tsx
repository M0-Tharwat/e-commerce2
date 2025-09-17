

import React from 'react'
import getBrands from '@/app/apis/brands.api'
import BrSwiper from './BrSwiper'


export default async function Catslider() {

  const data = await getBrands()


  return (
    <>

     <p className='text-center text-lg font-bold my-2 text-main '>Brands</p>
    
     <BrSwiper data={data} />
   
    
    
    
    </>
  )
}
