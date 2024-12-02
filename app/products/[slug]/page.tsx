import ProductView from "@/components/ui/ProductView";

import { getProduct } from "@/lib/supabase/queries";

import { createClient } from "@/lib/supabase/server";






export default async function Page({ params }: { params: { slug: string } }) {
  const productId = params.slug;

  if (isNaN(Number(productId))) {
    return <div>Product not found</div>;
  }

  const supabase = await createClient();
  const product = await getProduct(supabase, Number(productId));

  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductView product={product} />;
}