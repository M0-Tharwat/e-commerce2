'use server'

import { getTokenAuth } from "@/utlitis/getTokenAuth";


export default async function getLoggedUserList() {
    const token = await getTokenAuth()


    if(!token)  {
      throw new Error('you are not logged in')
    }
    const res = await fetch (`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            token : token
        },
        
    });

    const payload = await res.json()
    return payload


}