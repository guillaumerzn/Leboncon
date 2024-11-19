import React from "react";
import Header2 from "./Header2";
import Image from "next/image";
import { Avatar, AvatarImage } from "./avatar";
import { Button } from "./button";
import Footer from "./Footer";

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUri: string;
  brandName: string;
  imageUriThumbnail1: string;
  imageUriThumbnail2: string;
  imageUriThumbnail3: string;
  logoUri?: string;
};

type ProductViewProps = {
  product: ProductType;
};

export default function ProductView({ product }: ProductViewProps) {
  return (
    <div className="w-full min-h-dvh bg-gray-100">
      <Header2 />
      <div className="flex justify-center mt-20">
        <div className="flex justify-center space-x-12">
        <div className="relative w-[400px] h-[400px]">
            <Image
              src={product.imageUri}
              alt={`Image de ${product.title}`}
              layout="fill"
              className="object-contain rounded-xl shadow-md"
            />
          </div>
          {/* Deuxième image */}
          <div className="relative w-[400px] h-[400px]">
            <Image
              src={product.imageUri}
              alt={`Image de ${product.title}`}
              layout="fill"
              className="object-contain rounded-xl shadow-md"
            />
          </div>
          <div className="w-[400px] rounded-lg shadow-md border-4 border-orange-200 bg-orange-100 hover:shadow-xl">
            <div className="flex flex-row items-center mt-8">
              <Avatar className="ml-8 w-16 h-16">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
              </Avatar>
              <h1 className="text-2xl font-bold ml-6 text-orange-600">
                Michel_Brésil76
              </h1>
            </div>
            <div className="mt-20">
                <h1 className="ml-8"></h1>

            </div>
            <div className="flex flex-col items-center space-y-8 mt-36">
              <Button
                className="bg-orange-600 text-white w-[200px] h-[50px]"
                variant="secondary"
              >
                Contacter
              </Button>
              <Button
                className="bg-black text-white w-[200px] h-[50px]"
                variant="secondary"
              >
                Acheter
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20">
        <div className="flex flex-row">
          <h1 className="text-4xl font-bold ml-36 mt-2">{product.title}</h1>
          <h1 className="text-4xl font-bold ml-[525px] mt-2 text-orange-600">{product.price}</h1>
        </div>
        <p className="text-lg  ml-36 mt-8 w-[880px]">{product.description}</p>
        <div className="flex flex-row">
          <h1 className="text-4xl font-bold ml-36 mt-20">Livraison</h1>
        </div>
        <p className="text-lg  ml-36 mt-8 w-[880px]">{product.description}</p>
      </div>
      <div className="flex flex-col mt-32"></div>
      <Footer />
    </div>
  );
}