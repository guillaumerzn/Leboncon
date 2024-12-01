import ProductView from "@/components/ui/ProductView";

import { getProduct } from "@/lib/supabase/queries";

import { createClient } from "@/lib/supabase/server";






export default async function Page({params}: {params: Promise<{ slug:string }>}) {

  const productId = (await params).slug;

  if (isNaN(productId as unknown as number)) {
    return(<div>Product not found</div>);       

  }

  const supabase = await createClient();

  const product = await Promise.resolve(getProduct(supabase, productId as unknown as number));

  console.log(product);

  if (!product) {
    return(<div>Product not found</div>);       

  }

  

 


  return( <ProductView product={product} />);
}