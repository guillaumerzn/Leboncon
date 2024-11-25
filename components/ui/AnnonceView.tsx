import React, { useState } from "react";
import Header from "./Header2";
import Footer from "./Footer";
import FileUpload from "./fileUpload";
import { Button } from "./button";
import { useRouter } from "next/navigation";
import DescriptionUpload from "./descriptionUpload";
import { Input } from "@/components/ui/input";
import { FollowedBrandType } from "@/app/home/page";


export default function AnnonceView() {
    const router = useRouter();
    const [imageUri1, setImageUri1] = useState<string>("");
    const [imageUri2, setImageUri2] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [title, setTitle] = useState<string>("");
  
    const handleAddProduct = () => {
      if (imageUri1 && imageUri2 && description && price) {
        const newProduct: FollowedBrandType = {
          id: Date.now(), // Utilisez un ID unique
          imageUri: imageUri1,
          brandName: `Brand ${Date.now()}`, // Utilisez un nom unique
          title: title,
          imageUriThumbnail1: imageUri1,
          imageUriThumbnail2: imageUri2,
          imageUriThumbnail3: imageUri1,
          logoUri: imageUri1,
        }
  
        // Stocker le produit dans localStorage
        const storedProducts = localStorage.getItem("followedBrands");
        const products = storedProducts ? JSON.parse(storedProducts) : [];
        products.push(newProduct);
        localStorage.setItem("followedBrands", JSON.stringify(products));
    }
  }

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }
  
  const handleLogoClicked = () => {
    router.push("/home");
  };
  



  return (
    <div className="w-full min-h-dvh bg-gray-100">
      <Header />
      <div className="flex justify-center mt-20">
        <div className="flex justify-center space-x-12">
          
              <FileUpload
                onAddProduct={(imageUri: string) => {
                  console.log(imageUri);
                }}
              />
            

          
              <FileUpload
                onAddProduct={(imageUri: string) => {
                  console.log(imageUri);
                }}
              />
            
          <div className="w-[400px] h-[400px] rounded-lg shadow-md bg-black bg-opacity-90  hover:shadow-2xl flex justify-center ">
            
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold p-8 text-white">Titre :</h1>
                <Input
                    id="title"
                    type="text"
                    placeholder="Titre de l'annonce"
                    className="w-[300px] h-12 rounded-md focus-visible:ring-2 focus-visible:ring-orange-600"
                    value={title}
                    onChange={handleTitleChange}
                />
              <Button
                className="  bg-orange-600  text-white mt-[100px] w-[200px] h-[50px] disabled:border border-gray-300 border-dashed"
                variant="secondary"
                disabled={!imageUri1 || !imageUri2 || !description || !price || !title}
                onClick={handleAddProduct}
              >
                Déposer cette Annonce
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-start mt-20">
      <div className="w-[840px] h-[400px] ml-[10vw] rounded-lg shadow-md border-4 border-dashed border-gray-300 bg-gray-200 hover:shadow-xl flex flex-col">
  <div className="flex flex-row items-center">
    <h1 className="text-2xl font-bold p-8">Décrivez votre Annonce</h1>
    <h1 className="text-2xl ml-[265px] text-orange-600 font-bold p-8">Prix</h1>
    <Input
          id="price"
          type="text"
          placeholder="000 $"
          value={price}
          onChange={handlePriceChange}
          className=" text-center w-[100px]  h-12  rounded-md"
        />

  </div>
  
    <DescriptionUpload
      onAddProduct={(imageUri: string) => {
        console.log(imageUri);
      }}
    />
  
        </div>
        <div className="flex flex-end items-center">
          <a className="ml-[9vw] cursor-pointer" onClick={() => handleLogoClicked()}>
            <h1 className="text-5xl text-orange-600 font-bold  mt-2">Leboncon</h1>
          </a>
        </div>
      </div>
      <div className="flex justify-center mt-24"></div>
      <Footer />
    </div>
  );
}
