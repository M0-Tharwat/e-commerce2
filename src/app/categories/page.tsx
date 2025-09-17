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
import getCategories from '../apis/categories.api'
import { CategoriesInterface } from '@/interfaces/Categories.interface'
import Link from 'next/link'



export default async function Categories() {
 
  
 const data =  await getCategories()

  return (
    <>
    <div className='container w-[80%] mx-auto my-12 ' >
      <div className='flex flex-wrap' >
       {data.map((currentCatogory :CategoriesInterface)=> (
        <div className=' w-full md:w-1/2 lg:w-1/4 xl:w-1/5' key={currentCatogory._id}>
          <div className='p-4'>
          

          <Link href={`/categories/${currentCatogory._id}`} >
          
        <Card className='gap-2' >
        <CardHeader>
        <CardTitle><img className='w-full ' src={currentCatogory.image} alt={currentCatogory.name}/>  </CardTitle>
        <CardDescription className='text-emerald-600 font-bold'  >{currentCatogory.name}</CardDescription>
       
       </CardHeader>
       <CardContent className='font-bold' > 
       <p className='line-clamp-' >{currentCatogory.slug}</p>
       </CardContent>
       <CardFooter>
        <div className='flex justify-between  ' >
            <span className='text-xs'>
            Created:
          </span>
          <span className='text-xs'>
            {new Date(currentCatogory.createdAt).toLocaleDateString()}
          </span>
        </div>

      
     </CardFooter>
   
       <CardFooter>
        <div className='flex justify-between  ' >
            <span className='text-xs'>
            Updated:
          </span>
          <span className='text-xs'>
            {new Date(currentCatogory.updatedAt).toLocaleDateString()}
          </span>
        </div>

      
     </CardFooter>
   
        </Card>
          
          
         </Link>

        </div>




       

        </div> ))}

      </div>

    </div>





    </>
  )
}
