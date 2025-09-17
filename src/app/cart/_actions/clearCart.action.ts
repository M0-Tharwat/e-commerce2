'use server'
import { getTokenAuth } from "@/utlitis/getTokenAuth"



export async function clearCart(){
    
    
    const token = await getTokenAuth()
    if(!token) throw new Error('you are not logged in')

    const res = await fetch (`${process.env.API}/cart`,{
        cache:'no-store',
        method:'DELETE',
        headers:{
            'Content-Type':'application/json',
            token
        }
        
    })

    const payload = await res.json()    
    return payload  

}


 