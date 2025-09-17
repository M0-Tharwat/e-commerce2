
 
export default async function getProductInCat(catId: string )
{
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/?category[in]=${catId}` , 
    
  ) 
  const {data} = await res.json();
  return data;

}
