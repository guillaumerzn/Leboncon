import HomeView from "@/components/ui/HomeView";
import { getUsersWithProducts } from "@/lib/supabase/queries";
import { createClient } from "@/lib/supabase/server";

export type ProductType = {
  id: number;
  title: string;
  seller: string;
  description: string;
  price: number;
  image_1: string;
  image_2: string;
};

export type UserType = {
  id: string;
  first_name: string;
  last_name: string;
  logo: string;
};

export type UserWithProductsType = {
  user: UserType;
  products: ProductType[];
};

export default async function Page() {
  const supabase = await createClient();
  const usersWithProducts: UserWithProductsType[] = await getUsersWithProducts(supabase);

  console.log("Users with products:", usersWithProducts);

  return <HomeView usersWithProducts={usersWithProducts} />;
}
