'use server'
import { getTokenAuth } from "@/utlitis/getTokenAuth"



export async function updateCount({productId,count}:{productId:string,count:number}){
    
    
    const token = await getTokenAuth()
    if(!token) throw new Error('you are not logged in')

    const res = await fetch (`${process.env.API}/cart/${productId}`,{
        cache:'no-store',
        method:'PUT',
        headers:{
            'Content-Type':'application/json',
            token
        },
        body:JSON.stringify({count})
    })

    const payload = await res.json()    
    return payload  

}