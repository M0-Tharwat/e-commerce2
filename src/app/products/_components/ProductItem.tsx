import React from 'react'
import { ProductInterface } from '@/interfaces/product.interface'
import Image from 'next/image'
import Link from 'next/link'
import ProductItemBtn from './productItemBtn'
 
import AddBtn from '@/app/wishlist/_components/AddBtn/AddBtn'
export default function ProductItem({prod}:{prod:ProductInterface}) {

  return (
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/6'>
        <div className='p-5'>
            <Link href={`/products/${prod._id}/${prod.category._id}`}>
               <Image width={300} height={300} src={prod.imageCover} alt='' className='w-full'/>
            <span className='text-main'> {prod.category.name} </span>
            <p className='line-clamp-1'> {prod.title} </p>
            <div className='flex justify-between my-5 items-center'>
                <div>
                  <div > {prod.price} EGP </div>
                  {prod.priceAfterDiscount&&<div> {prod.priceAfterDiscount} EGP </div>}
                </div>
                <span> {prod.ratingsAverage} <i className="fa-solid text-rating fa-star"></i> </span>
            </div>
            </Link>

         <ProductItemBtn id={prod._id} />
         <AddBtn id={prod._id}/>

        </div>
    </div>
  )
}
