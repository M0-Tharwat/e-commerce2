'use server'
import { getTokenAuth } from "@/utlitis/getTokenAuth"



export  default async function addToWishList(productId: string) {
    
    const token = await getTokenAuth()
    if(!token) throw new Error('you are not logged in')

     const res = await   fetch (`${process.env.API}/wishlist`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                token
            },
            body: JSON.stringify({productId})
        });

        const payload = await res.json()
        return payload  

}