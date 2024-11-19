import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FollowedBrandType } from "@/app/home/page";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselItem,
  CarouselNext,
} from "./carousel";
import Carte from "./Carte";
import { useRouter } from "next/navigation";

type HomeViewProps = {
  followedBrands: FollowedBrandType[];
};

export default function HomeView({




  followedBrands,
}: {
  followedBrands: FollowedBrandType[];
}) {

  
  return (
    <div>
      <Header/>
      <div className="w-full min-h-dvh bg-gray-100 flex flex-col items-center">
        <div className="w-full h-1/4 mt-48">
            <h1 className="text-3xl font-bold ml-[10vw] ">Les comptes populaires</h1>
        </div>
        
        <Carousel className=" max-w-7xl drop-shadow-xl mt-16" opts={{ align: "start" }}>
          <CarouselContent>
            {followedBrands.map((followedBrand, key) => (
              <CarouselItem
                key={key}
                className="basis-1/3 mr-40 md:basis-1/4 lg:basis-1/5"
              >
                <Carte followedBrand={followedBrand} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
        <div className="w-full min-h-dvh bg-gray-100 flex flex-col items-center">
          <div className="w-full">
            <h1 className="text-3xl font-bold ml-[10vw]">Tous les Items</h1>
            </div>
            <Carousel className=" max-w-7xl drop-shadow-xl mt-16" opts={{ align: "start" }}>
          <CarouselContent>
            {followedBrands.map((followedBrand, key) => (
              <CarouselItem
                key={key}
                className="basis-1/3 mr-40 md:basis-1/4 lg:basis-1/5"
              >
                <Carte followedBrand={followedBrand} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
            
        </div>
      <Footer/>

       
      
    </div>
  );
}

