"use client";
import { Card, CardContent, CardFooter, CardTitle } from "./card";
import { FollowedBrandType } from "@/app/home/page";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CarteProps = {
  followedBrand: FollowedBrandType;
};

export default function Carte({ followedBrand }: CarteProps) {
  const router = useRouter();

  const handleBrandClicked = () => {
    router.push(`/products/${followedBrand.id}`);
  };

  return (
    <Card className="w-[350px] h-[500px] rounded-lg shadow-xl flex flex-col items-center p-4 bg-white">
      
        <CardContent className="flex flex-col items-center w-full h-full">
          {/* Image principale */}
          <div className="relative w-full h-64 mb-4">
            <a onClick={handleBrandClicked}>
              <Image
                src={followedBrand.imageUri}
                alt={`Image principale de ${followedBrand.brandName}`}
                className="rounded-xl object-contain cursor-pointer"
                layout="fill"

              />
            </a>
          </div>
          {/* Miniatures */}
          <div className="flex space-x-6 w-full justify-center">
            <div className="relative w-20 h-20">
              <Image
                src={followedBrand.imageUriThumbnail1}
                layout="fill"
                alt={`Vignette 1 de ${followedBrand.brandName}`}
                className="object-contain rounded-xl"
              />
            </div>
            <div className="relative w-20 h-20">
              <Image
                src={followedBrand.imageUriThumbnail2}
                layout="fill"
                alt={`Vignette 2 de ${followedBrand.brandName}`}
                className="object-contain rounded-xl"
              />
            </div>
            <div className="relative w-20 h-20">
              <Image
                src={followedBrand.imageUriThumbnail3}
                layout="fill"
                alt={`Vignette 3 de ${followedBrand.brandName}`}
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="mt-2 w-full flex items-center justify-between border-t pt-6">
          <div className="flex items-center space-x-2">
            {/* Logo de la marque */}
            <Image
              src={followedBrand.logoUri || "/default-logo.png"}
              width={30}
              height={40}
              alt={`Logo de ${followedBrand.brandName}`}
              className="rounded-full"
            />
            {/* Nom de la marque */}
            <CardTitle className="font-bold text-xl">
              {followedBrand.brandName}
            </CardTitle>
          </div>
          {/* Texte d'items à collectionner */}
          <p className="text-xs text-gray-500">4 items to collect</p>
        </CardFooter>
      
    </Card>
  );
}