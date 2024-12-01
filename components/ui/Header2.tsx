"use client"
import React from "react";
import { Input } from "./input";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";
import { Avatar, AvatarImage } from "./avatar";
import { useRouter } from "next/navigation";

const Header2 = () => {
  const rooter = useRouter();

  const handleLogoClicked = () => {
    rooter.push("/home");
  };

  const handleAnnonceClicked = () => {
    rooter.push("/annonce");
  };

  const handleConnexionClicked = () => {
    rooter.push("/connexion");
  };

  return (
    <header className="bg-orange-600 text-white flex flex-col items-start rounded-t-3xl pb-[140px]">
      <div className=" w-full p-12 space-x-6 flex flex-row justify-between">
        <div className="flex flex-row items-center">
            <a className="cursor-pointer" onClick={ () => handleLogoClicked()}>
          <h1 className="text-4xl font-bold mr-14">Leboncon</h1>
          </a>

          {/*}
          <Input
            className="w-[25vw] h-12 rounded-xl text-black"
            type="text"
            placeholder=" 🔎  Recherchez vos items préférés..."
          />
          */}
        </div>
        <div className="flex space-x-8 flex-row items-center">
          <Avatar className="ml-auto  w-20 h-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          <ShoppingCart className=" w-12vw h-12vw" size={32} />
          <a onClick={() => handleAnnonceClicked()}>
          <Button
            className=" bg-orange-600 text-white border-white border-2"
            variant="secondary"
          >
            + Annonce
          </Button>
          </a>
          <Button className=" bg-black text-white" variant="secondary" onClick={() => handleConnexionClicked()}>
            Connexion
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header2;
