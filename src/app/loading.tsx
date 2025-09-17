'use client'
import React from 'react'


export default function loading() {
  return (
    <div className='flex h-[90%] justify-center items-center'>
      <i className='fa-solid fa-spinner fa-spin text-4xl text-main'></i>    <span className='ml-3'>Loading...</span>
    </div>
  )
}
