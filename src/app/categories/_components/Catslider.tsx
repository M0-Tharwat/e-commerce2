
import getCategories from '@/app/apis/categories.api'
import React from 'react'
import CatSwiper from './CatSwiper'

export default async function Catslider() {

  const data = await getCategories()


  return (
    <>

     <p className='text-center text-lg font-bold my-2 text-main '>Categories</p>
    
     <CatSwiper data={data} />
   
    
    
    
    </>
  )
}
