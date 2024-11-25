import React from "react";
import { Button } from "./button";
import { Input } from "./input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import { Separator } from "./separator";
import { Layers3, Truck, LandPlot, CircleDollarSign } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="bg-white flex justify-center items-center w-[66vw] h-52 mt-10 absolute left-1/2 -translate-x-1/2 rounded-2xl drop-shadow-xl">
      <div className="flex flex-row items-center absolute top-8 left-6 space-x-4">
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black ">
                <Layers3 className="w-5 h-5 " />
                <h1 className=" ml-2 text-lg">Catégories</h1>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="text-black p-4 justify-center">
                  LinkAAAAAAAADDDDDDDD
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Input
          className="w-[25vw] h-12 rounded-2xl text-black"
          type="text"
          placeholder="🔎 Qu'êtes vous venu chercher aujourd'hui ?"
        />

        <Input
          className="w-[25vw] h-12 rounded-2xl text-black"
          type="text"
          placeholder="📍 Où cherchez vous ?"
        />
      </div>
      <div className="flex items-center">
        <Separator className="w-[62vw]" />
      </div>
      <div className="absolute mt-24 flex flex-row left-6">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-500 border-2 rounded-xl mr-6">
                <Truck className="w-5 h-5 " />
                <h1 className="ml-2">Livraison</h1>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="text-black p-4 justify-center">
                  Link1
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-500 border-2 rounded-xl mr-6">
                <LandPlot className="w-5 h-5 " />
                <h1 className="ml-2">Distance</h1>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="text-black p-4 justify-center">
                  Link2
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-gray-500 border-2 rounded-xl">
                <CircleDollarSign className="w-5 h-5 " />
                <h1 className="ml-2">Prix</h1>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink className="text-black p-4 justify-center">
                  Link3
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="absolute mt-24 flex flex-row right-6 mr-2 space-x-6">
        <Button
          className="bg-white text-orange-600 border-2 border-orange-600"
          variant="secondary"
        >
          Supprimer
        </Button>
        <Button
          className="bg-orange-600 text-white border-white border-2 hover:bg-orange-700 transition-colors"
          variant="secondary"
        >
          Rechercher
        </Button>
      </div>
    </div>
  );
};

export default Searchbar;
