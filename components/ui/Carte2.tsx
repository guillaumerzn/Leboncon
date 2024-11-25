"use client";
import { Card, CardContent, CardFooter, CardTitle } from "./card";
import { ProductType } from "@/app/home/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Carte2Props = {
  product: ProductType;
};

export default function Carte2({ product }: Carte2Props) {
  const router = useRouter();

  const handleProductClicked = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <Card className="w-[350px] h-[500px] rounded-lg shadow-xl flex flex-col items-center p-4 bg-white">
      
        <CardContent className="flex flex-col items-center w-full h-full">
          {/* Image principale */}
          <div className="relative  w-full h-64 mb-4">
            <a onClick={handleProductClicked}>
              <Image
                src={product.imageUri}
                alt={`Image principale de ${product.title}`}
                className="rounded-md object-contain cursor-pointer"
                layout="fill"
              />
            </a>
          </div>
          <div className="flex space-x-6 w-full items-center flex-col">
            <h1 className="text-3xl font-semibold text-gray-800 mt-2">{product.title}</h1>
            <p className="text-2xl font-semibold text-orange-600 mt-2">{product.price}</p>
          </div>
          {/* Miniatures */}
          
        </CardContent>
        <CardFooter className="mt-2  w-full flex items-center justify-between border-t pt-6">
          <div className="flex items-center space-x-2">
            {/* Logo de la marque */}
            <Image
              src={product.logoUri}
              width={30}
              height={40}
              alt={`Logo de ${product.logoUri}`}
              className="rounded-full"
            />
            {/* Nom de la marque */}
            <CardTitle className="font-semibold text-gray-800 text-xl">
              {product.user}
            </CardTitle>
          </div>
          {/* Texte d'items à collectionner */}
          <p className="text-xs text-gray-500">2 images</p>
        </CardFooter>
    
    </Card>
  );
}