"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { WishListRes } from '../typescript/wishlist.interface'
import { Product } from '@/app/cart/typescript/cart.interface'
import { deleteItem } from '@/app/cart/_actions/deleteitem.action'
import { toast } from 'react-toastify'
import { RemoveWishList } from '../_WishListAction/removeWishList.action'
export default function WishList() {




  const queryClient = useQueryClient()

  const {mutate,isPending,data:deleteData } = useMutation({mutationFn:RemoveWishList,
    onSuccess:(data)=>{
      toast.success(data?.message)
       queryClient.invalidateQueries({queryKey:['wishlist']})
    },
    onError:()=>{
      toast.error('login first!') 
    }

  })
  






  const{data,isLoading,isError,error} = useQuery<WishListRes>({ queryKey: ['wishlist'], queryFn: async () => {

    const res = await fetch (`/api/wishlist`)
    const payload = await res.json() 
    return payload 

  }})

  if(isLoading) return <div className='flex h-[90%] justify-center items-center'>
      <i className='fa-solid fa-spinner fa-spin text-4xl text-main'></i>    <span className='ml-3'>Loading...</span>
      </div>
  if(isError) return <div>{error?.message}</div>

  if( data?.count == 0) return <div className='flex flex-col justify-center items-center py-10 '><h2 className='text-2xl font-bold text-main '>No Items in WishList</h2> </div>



  



  return (
    <div className='py-5'>
    <h2 className='text-center text-2xl font-bold my-2 text-main '>WishList Items count : <span className='text-2xl font-bold'>{data?.count}</span>   </h2>
  <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Rating
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
   
   {data?.data.map(prod=>            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={prod.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {prod.title}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            
            <div>
              <span
                id="first_product" className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   > {prod.ratingsAverage}  </span>
                


            </div>
            <i className='fa-solid fa-star text-yellow-400' ></i>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {prod.price} EGP
        </td>
        <td className="px-6 py-4">
          <span onClick={()=>mutate(prod._id)}  className="font-medium text-red-600 dark:text-blue-500 hover:underline">
            { isLoading?<i className="fa-solid fa-spin fa-spinner"></i>:<i className=" cursor-pointer fa-solid fa-trash test-red-500 "></i> }
          </span>
        </td>
      </tr>)}

    </tbody>
  </table>
</div>



    </div>
  )
}


