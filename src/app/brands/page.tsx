import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import getBrands from '../apis/brands.api'
import { BrandsInterface } from '@/interfaces/Brands.interface'
import Link from 'next/link'



export default async function Brands() {
 
  
 const data =  await getBrands()

  return (

    <>

    <Link href={`/brands/${data[0]._id}`} >
    <div className='container w-[80%] mx-auto my-12 ' >
      <div className='flex flex-wrap' >
       {data.map((currentbrand :BrandsInterface)=> (
        <div className=' w-full md:w-1/2 lg:w-1/4 xl:w-1/5' key={currentbrand._id}>
          <div className='p-4'>
          
          
        <Card className='gap-2' >
        <CardHeader>
        <CardTitle><img className='w-full ' src={currentbrand.image} alt={currentbrand.name}/>  </CardTitle>
        <CardDescription className='text-emerald-600 font-bold'  >{currentbrand.name}</CardDescription>
       
       </CardHeader>
       <CardContent className='font-bold' > 
       <p className='line-clamp-' >{currentbrand.slug}</p>
       </CardContent>
       <CardFooter>
        <div className='flex justify-between  ' >
            <span className='text-xs'>
            Created:
          </span>
          <span className='text-xs'>
            {new Date(currentbrand.createdAt).toLocaleDateString()}
          </span>
        </div>

      
     </CardFooter>
   
       <CardFooter>
        <div className='flex justify-between  ' >
            <span className='text-xs'>
            Updated:
          </span>
          <span className='text-xs'>
            {new Date(currentbrand.updatedAt).toLocaleDateString()}
          </span>
        </div>

      
     </CardFooter>
   
     </Card>
          
          
         

        </div>




       

        </div> ))}

      </div>

    </div>



    </Link>

    </>
  )
}
