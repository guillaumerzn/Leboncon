"use client";
import { useParams } from "next/navigation";
import ProductView from "@/components/ui/ProductView";
import { ProductType } from "@/components/ui/ProductView";

// Exemple de données de produits
const products: ProductType[] = [
  {
    id: 1,
    title: "Cool chaussures",
    description: "Description du product 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "100 $",
    imageUri: "https://media.foot-store.fr/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dm8968-800_0_nw.jpg",
    brandName: "Brand 1",
    imageUriThumbnail1: "https://www.sportinlove.com/110789-thickbox_default/chaussures-running-nike-nike-juniper-trail-2-nn-sportinlove.jpg",
    imageUriThumbnail2: "https://www.sportinlove.com/110789-thickbox_default/chaussures-running-nike-nike-juniper-trail-2-nn-sportinlove.jpg",
    imageUriThumbnail3: "https://www.sportinlove.com/110789-thickbox_default/chaussures-running-nike-nike-juniper-trail-2-nn-sportinlove.jpg",
  },
  {
    id: 2,
    title: "Cool skateboard",
    description: "Description du product 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "150 $",
    imageUri: "https://imgs.search.brave.com/0i6amR3GNaRrGQBpBB2tZIeZ2dlYAQigtT0UVxvbrTI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF3YWlpc3VyZi5j/b20vY2RuL3Nob3Av/ZmlsZXMvZGVjay1w/bGFuY2hlLWRlLXNr/YXRlLTgwLTg0ODQ0/MC5qcGc_dj0xNzMw/NDU1NDM4JndpZHRo/PTQ2MA",
    brandName: "Brand 2",
    imageUriThumbnail1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3X5KTXsr6QKngVGe_zaXDBU0EvHtlF1jzA&s",
    imageUriThumbnail2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3X5KTXsr6QKngVGe_zaXDBU0EvHtlF1jzA&s",
    imageUriThumbnail3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3X5KTXsr6QKngVGe_zaXDBU0EvHtlF1jzA&s",
  },
  // Ajoutez plus de produits ici
];

export default function Page() {
  const { productId } = useParams();

  // Trouver le produit correspondant à l'ID
  const product = products.find((product) => product.id === Number(productId));

  // Si le produit n'est pas trouvé
  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductView product={product} />;
}