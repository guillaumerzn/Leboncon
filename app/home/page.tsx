import HomeView from "@/components/ui/HomeView";
import { getProducts, getUserById } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";


export type ProductType = {
  id: number;
  title: string;
  seller: number;
  description: string;
  price: number;
  image_1: string;
  image_2: string;
};


export type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  logo: string;
  products: number[];
};

export default async function Page() {
  const supabase = await createClient();
  const products: ProductType[] = await getProducts(supabase);

  // Récupérez les noms et les logos des vendeurs pour chaque produit
  const productsWithSellerInfo = await Promise.all(
    products.map(async (product) => {
      const user = await getUserById(supabase, product.seller) as UserType;
      return {
        ...product,
        sellerName: user ? user.first_name : "Unknown",
        logo: user ? user.logo : "Unknown",
        sellerProducts: user ? user.products : [],
      };
    })
  );

  return <HomeView products={productsWithSellerInfo} />;
}