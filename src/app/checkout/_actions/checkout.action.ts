'use server'
import { getTokenAuth } from "@/utlitis/getTokenAuth";

type shippingAddressType = {
    "details": string,
    "phone": string,
    "city": string
};

export async function checkoutOnline (cartId:string,url=process.env.NEXT_URL,shippingAddress:shippingAddressType ){

const token = await getTokenAuth()
if(!token) throw new Error('you are not logged in')






const res = await fetch (`${process.env.API}/orders/checkout-session/${cartId}?url=${url}`,{
    method:'POST',  
    body:JSON.stringify({
        shippingAddress
    }),
    headers:{
        'content-type':'application/json',
        token
    }
})        

const data = await res.json()
return data
}