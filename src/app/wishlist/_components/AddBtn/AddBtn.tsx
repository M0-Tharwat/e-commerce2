'use client'
import { Button } from '@/components/ui/button'
import React from 'react'
import addToWishListaction from '../../_WishListAction/addToWishListaction'
import { toast } from 'react-toastify'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import addToWishList from '../../_WishListAction/addToWishListaction'

export default function AddBtn( {id}:{id:string} ) {

  const queryClient = useQueryClient()

  const {mutate,isPending,data} = useMutation({mutationFn:addToWishList
  ,onSuccess:(data)=>
    {toast.success(data.message)
    queryClient.invalidateQueries({queryKey:['wishlist']})  
  },
  onError:()=>{toast.error('login first!')}
  })
   
  
   
  return (
    <Button onClick={()=>mutate(id)} className='my-1  bg-pink-500 hover:bg-pink-700  w-full bg-main cursor-pointer rounded' > {isPending? <i className='fa-solid fa-spin fa-spinner'></i>: 'Add to Wish List'} </Button>
  )
}
