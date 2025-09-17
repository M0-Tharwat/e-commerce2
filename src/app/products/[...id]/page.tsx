import getSingleProduct from '@/app/apis/singleproduct.api'
import { ProductInterface } from '@/interfaces/product.interface'
import React from 'react'
import Image from 'next/image'

import ProductItemBtn from '../_components/productItemBtn'
import getProductInCat from '@/app/apis/getProductsInCat.api'
import ProductItem from '../_components/ProductItem'

import AddBtn from '@/app/wishlist/_components/AddBtn/AddBtn'


export default async function page({params}:{params:Promise<{id:string}>  }) {
    const { id } = await params
    const data = await getSingleProduct(id[0]) as  ProductInterface
     const catProducts:ProductInterface[] = await getProductInCat(id[1])
 
if(!data||!catProducts){
  return <div>Product not found</div>
}

  return (
    <>
    <div className='flex flex-wrap items-center py-10'>
        <div className=' w-full md:w-1/3'>
        <Image alt={data.title} src={data.imageCover} width={300 } height={300} className='object-cover w-full'  />
        </div>
        <div className='w-full md:w-2/3 p-5'>
        <h3>{data.title}</h3>
        <p className='text-gray-400 my-3'>{data.description}</p>
        <p> {data.category.name} </p>
         <div className='flex justify-between my-5 items-center'>
                <span> {data.price} EGP </span>
                <span> {data.ratingsAverage} <i className="fa-solid text-rating fa-star"></i> </span>
            </div>
            <ProductItemBtn id={data._id} />
            
            <AddBtn id={data._id}/>


        </div>

       

    </div>
     <h2 className='my-5' >Related products</h2>


 <div className='flex flex-wrap'>
           {catProducts?.map((prod:ProductInterface)=><ProductItem key={prod._id} prod={prod} ></ProductItem>)}
          </div>
       </>
  )
}
