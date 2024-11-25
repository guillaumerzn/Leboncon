import ProductView from "@/components/ui/ProductView";

import { getProduct } from "@/lib/supabase/queries";

import { createClient } from "@/lib/supabase/server";






export default async function Page({params}: {params: Promise<{ slug:string }>}) {

  const productId = (await params).slug as unknown as number;

  const supabase = await createClient();

 


  return( <div></div>)
}