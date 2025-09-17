'use client'
import Link from 'next/link'

import React, { useState } from 'react'
import logo from '../../assets/images/freshcart-logo.svg'
import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import { useQuery } from '@tanstack/react-query'
import { CartRes } from '../cart/typescript/cart.interface'
import { WishListRes } from '../wishlist/typescript/wishlist.interface'

export default function Navbar() {
 


  const{data : wishlist} = useQuery<WishListRes>({ queryKey: ['wishlist'], queryFn: async () => {

    const res = await fetch (`/api/wishlist`)
    const payload = await res.json() 
    return payload 

  }})





  const{data} = useQuery<CartRes>({queryKey:['cart'],queryFn:async()=>{
        const res = await fetch(`/api/cart`)
        const payload = await res.json()
        return payload
    }
  })
  


    const [isOpen,setOpen] = useState(true)


  const { data: session, status } = useSession()

    const links = [
        {path:'/brands',element:'brands' },
        {path:'/categories',element:'categories' },
    ]
    const auths = [
        {path:'/auth/login',element:'login' },
        {path:'/auth/register',element:'register' }
    ]

      function handleLogOut(){
        signOut({callbackUrl:'/'}) 
      }


  return (
    <div>
        

 <nav className="bg-light w-full border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl gap-5 flex flex-wrap md:flex-nowrap items-center justify-between mx-auto p-4">
    <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
     <Link href="/"><Image src={logo} alt='freshcart'/></Link>
    </Link>
    <button onClick={()=>setOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className={ ` ${isOpen&&'hidden'} w-full md:flex justify-between`} id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row gap-5 md:mt-0 md:border-0  dark:bg-gray-800  dark:border-gray-700">
      
        {links.map(link=>(
      
        <li key={link.path}>
          <Link href={link.path} className=" text-gray-500 block py-2 px-3 rounded-sm md:bg-transparent  md:p-0 dark:text-white " aria-current="page">{link.element.toUpperCase()}</Link>
        </li>
        ))}

      </ul>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row gap-5 md:mt-0 md:border-0  dark:bg-gray-800  dark:border-gray-700">
        

        <li><i className='fa-brands fa-facebook' ></i></li>
        <li><i className='fa-brands fa-twitter' ></i></li>
        <li><i className='fa-brands fa-google' ></i></li>

        { status=='unauthenticated'?
        <>
          {auths.map(link=>(
      
        <li key={link.path}>
          <Link href={link.path} className=" text-gray-500 block py-2 px-3 rounded-sm md:bg-transparent  md:p-0 dark:text-white " aria-current="page">{link.element.toUpperCase()}</Link>
        </li>
        ))}
        
        </>: <>
         <li>
           <Link href={'/cart'}className='relative'>

          <span className='bg-main text-white rounded-full px-2 py-1 text-xs absolute -top-2 -right-8 font-bold rounded-full h-5 w-5 items-center justify-center'>{data?.numOfCartItems}</span> 
          </Link>
          <i className='fa-solid fa-cart-shopping'></i>
          </li>
         <li>
           <Link href={'/wishlist'}className='relative'>

          <span className='bg-main text-white rounded-full px-2 py-1 text-xs absolute -top-2 -right-8 font-bold rounded-full h-5 w-5 items-center justify-center'> { wishlist?.count }   </span> 
          </Link>
          <i className='fa-solid fa-heart'></i>
          </li>





          <li className='cursor-pointer' onClick={handleLogOut} >LogOut</li>
          
          <li>Hi {session?.user?.name}</li>
          {session?.user.image&&<li><img className='size-[20px] rounded-full ' src={session?.user?.image} alt='' /></li>}
         
        </>
        }
        




      </ul>
    </div>
  </div>
 </nav>

    </div>
  )
}
