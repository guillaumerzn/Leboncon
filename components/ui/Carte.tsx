"use client";
import { Card, CardContent, CardFooter, CardTitle } from "./card";
import { ProductType, UserWithProductsType } from "@/app/home/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CarteProps = {
  userWithProducts: UserWithProductsType;
};

export default function Carte({ userWithProducts }: CarteProps) {
  const router = useRouter();
  const { user, products } = userWithProducts;

  const handleProductClicked = (productId: number) => {
    router.push(`/products/${productId}`);
  };

  const renderThumbnail = (imageUri: string, altText: string) => (
    <div className="relative w-20 h-20">
      <Image
        src={imageUri}
        layout="fill"
        alt={altText}
        className="object-contain rounded-xl"
      />
    </div>
  );

  return (
    <Card className="w-[350px] h-[500px] rounded-lg shadow-xl flex flex-col items-center p-4 bg-white">
      <CardContent className="flex flex-col items-center w-full h-full">
        {/* Image principale */}
        <div className="relative w-full h-64 mb-4">
          <a onClick={() => handleProductClicked(products[0].id)}>
            <Image
              src={products[0].image_2}
              alt={`Image principale de ${products[0].title}`}
              className="rounded-xl object-contain cursor-pointer"
              layout="fill"
            />
          </a>
        </div>
        {/* Miniatures */}
        <div className="flex space-x-6 w-full justify-center opacity-90">
          {products.slice(1, 4).map((product, index) => (
            <a key={index} onClick={() => handleProductClicked(product.id)} className="p-1 border rounded-xl cursor-pointer">
              {renderThumbnail(product.image_1, `Vignette ${index + 1} de ${product.title}`)}
            </a>
          ))}
        </div>
      </CardContent>
      <CardFooter className="mt-2 w-full flex items-center justify-between border-t pt-6">
        <div className="flex items-center space-x-2">
          {/* Logo de la marque */}
          <Image
            src={user.logo || "/default-logo.png"}
            width={30}
            height={40}
            alt={`Logo de ${user.first_name}`}
            className="rounded-full"
          />
          {/* Nom de la marque */}
          <CardTitle className="font-bold text-xl">
            {user.first_name}
          </CardTitle>
        </div>
        {/* Texte d'items à collectionner */}
        <p className="text-xs text-gray-500">{products.length} items to collect</p>
      </CardFooter>
    </Card>
  );
}
