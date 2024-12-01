"use client";
import { Card, CardContent, CardFooter, CardTitle } from "./card";
import { ProductType } from "@/app/home/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CarteProps = {
  product: ProductType & { sellerName: string; logo: string; sellerProducts: ProductType[] };
};

export default function Carte({ product }: CarteProps) {
  const router = useRouter();

  const handleProductClicked = () => {
    router.push(`/products/${product.id}`);
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
          <a onClick={handleProductClicked}>
            <Image
              src={product.image_2}
              alt={`Image principale de ${product.title}`}
              className="rounded-xl object-contain cursor-pointer"
              layout="fill"
            />
          </a>
        </div>
        {/* Miniatures */}
        <div className="flex space-x-6 w-full justify-center">
          {product.sellerProducts.slice(0, 3).map((p, index) => (
            renderThumbnail(p.image_1, `Vignette ${index + 1} de ${p.title}`)
          ))}
          {product.sellerProducts.length < 3 && (
            Array.from({ length: 3 - product.sellerProducts.length }).map((_, index) => (
              renderThumbnail("/default-image.png", `Vignette ${index + 1} par défaut`)
            ))
          )}
        </div>
      </CardContent>
      <CardFooter className="mt-2 w-full flex items-center justify-between border-t pt-6">
        <div className="flex items-center space-x-2">
          {/* Logo de la marque */}
          <Image
            src={product.logo || "/default-logo.png"}
            width={30}
            height={40}
            alt={`Logo de ${product.sellerName}`}
            className="rounded-full"
          />
          {/* Nom de la marque */}
          <CardTitle className="font-bold text-xl">
            {product.sellerName}
          </CardTitle>
        </div>
        {/* Texte d'items à collectionner */}
        <p className="text-xs text-gray-500">4 items to collect</p>
      </CardFooter>
    </Card>
  );
}