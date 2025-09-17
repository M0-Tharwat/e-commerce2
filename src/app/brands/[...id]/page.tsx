
import { BrandInterface } from '@/interfaces/Brand.interface';
import React from 'react'

export default async function Brand({params} : {params:BrandInterface}  ) {

    const { _id } = params

      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${_id}` ,)
      const {data} = await res.json();


  return (
     <><div className='flex flex-wrap items-center py-10'>
          <div className=' w-full md:w-1/3'>
              <img alt={data.title} src={data.image} className='object-cover w-full' />
          </div>
          <div className='w-full md:w-2/3 p-5'>
              <h3>{data.name}</h3>
              <p className='text-gray-400 my-3'>{data.slug}</p>

              <div className='flex justify-between my-5 items-center'>
                  <span> Created At:  {new Date(data.createdAt).toLocaleDateString()} </span>
                  <span> Updated At: {new Date(data.updatedAt).toLocaleDateString()}  </span>
              </div>

          </div>



      </div>
          
          
          </>
           
  )
}
