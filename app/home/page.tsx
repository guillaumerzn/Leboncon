"use client";
import HomeView from "@/components/ui/HomeView";
import React, { useState, useEffect } from "react";

export type FollowedBrandType = {
  id: number;
  imageUri: string;
  brandName: string;
  title: string;
  imageUriThumbnail1: string;
  imageUriThumbnail2: string;
  imageUriThumbnail3: string;
  logoUri?: string;
};

export type ProductType = {
  id: number;
  title: string;
  user:string;
  description: string;
  price: string;
  imageUri: string;
  logoUri: string;
  imageUriThumbnail1: string;
  imageUriThumbnail2: string;
  imageUriThumbnail3: string;
  

};


const products: ProductType[] = [
  {
    id: 1,
    title: "Cool chaussures",
    description: "Description du product 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "100 $",
    imageUri: "https://media.foot-store.fr/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dm8968-800_0_nw.jpg",
    user: "Nike",
    imageUriThumbnail1: "https://www.sportinlove.com/110789-thickbox_default/chaussures-running-nike-nike-juniper-trail-2-nn-sportinlove.jpg",
    imageUriThumbnail2: "https://www.sportinlove.com/110789-thickbox_default/chaussures-running-nike-nike-juniper-trail-2-nn-sportinlove.jpg",
    imageUriThumbnail3: "https://www.sportinlove.com/110789-thickbox_default/chaussures-running-nike-nike-juniper-trail-2-nn-sportinlove.jpg",
    logoUri: "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
  },
  {
    id: 2,
    title: "Casquette Fortnite",
    description: "Description du product 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "150 $",
    imageUri: "https://boutiquefortnite.com/652-medium_default/casquette-battle-royale.jpg",
    user: "Alain_Bg76",
    
    imageUriThumbnail1: "https://boutiquefortnite.com/652-medium_default/casquette-battle-royale.jpg",
    imageUriThumbnail2: "https://boutiquefortnite.com/652-medium_default/casquette-battle-royale.jpg",
    imageUriThumbnail3: "https://boutiquefortnite.com/652-medium_default/casquette-battle-royale.jpg",
    logoUri: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    title: "Cool skateboard",
    description: "Description du product 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "350 $",
    imageUri: "https://imgs.search.brave.com/0i6amR3GNaRrGQBpBB2tZIeZ2dlYAQigtT0UVxvbrTI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF3YWlpc3VyZi5j/b20vY2RuL3Nob3Av/ZmlsZXMvZGVjay1w/bGFuY2hlLWRlLXNr/YXRlLTgwLTg0ODQ0/MC5qcGc_dj0xNzMw/NDU1NDM4JndpZHRo/PTQ2MA",
    user: "TotoLeDozo",
    imageUriThumbnail1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3X5KTXsr6QKngVGe_zaXDBU0EvHtlF1jzA&s",
    imageUriThumbnail2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3X5KTXsr6QKngVGe_zaXDBU0EvHtlF1jzA&s",
    imageUriThumbnail3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3X5KTXsr6QKngVGe_zaXDBU0EvHtlF1jzA&s",
    logoUri: "https://github.com/shadcn.png",
  },
  {
    id: 4,
    title: "Scar légendaire",
    description: "Description du product 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    price: "150 $",
    user: "Alain_Bg76",
    imageUri: "https://imgs.search.brave.com/dq71n2-1bUX-XVZNYY2CuRqiYW-976E3-5H1FOX3Be0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFueFVwcDdQTUwu/anBn",
    imageUriThumbnail1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3X5KTXsr6QKngVGe_zaXDBU0EvHtlF1jzA&s",
    imageUriThumbnail2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3X5KTXsr6QKngVGe_zaXDBU0EvHtlF1jzA&s",
    imageUriThumbnail3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3X5KTXsr6QKngVGe_zaXDBU0EvHtlF1jzA&s",
    logoUri: "https://github.com/shadcn.png",
  },
  // Ajoutez plus de produits ici
];

export default function Page() {
  const [followedBrands, setFollowedBrands] = useState<FollowedBrandType[]>([
    {
      id: 1,
      imageUri:
        "https://media.foot-store.fr/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/n/i/nike_dm8968-800_0_nw.jpg",
      brandName: "Nike",
      imageUriThumbnail1: "https://www.sportinlove.com/110789-thickbox_default/chaussures-running-nike-nike-juniper-trail-2-nn-sportinlove.jpg",
      imageUriThumbnail2: "https://www.sportinlove.com/124797-large_default/chaussures-running-nike-nike-zoom-rival-distance-sportinlove.jpg",
      imageUriThumbnail3: "https://www.sportinlove.com/117339-large_default/chaussures-sneakers-nike-nike-air-max-systm-sportinlove.jpg",
      logoUri: "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      title: "Nike",
    },
    {
      id: 2,
      imageUri:
        "https://boutiquefortnite.com/652-medium_default/casquette-battle-royale.jpg",
      brandName: "Alain_Bg76",
      imageUriThumbnail1: "https://imgs.search.brave.com/dq71n2-1bUX-XVZNYY2CuRqiYW-976E3-5H1FOX3Be0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFueFVwcDdQTUwu/anBn",
      imageUriThumbnail2: "https://www.timberland-shop.fr/16475-large_default/earthkeepers-authentics-teddy-fleece-wp-fold-down.jpg",
      imageUriThumbnail3: "https://assets.timberland.eu/images/t_img/f_auto,h_650,w_650/e_sharpen:60/dpr_2.0/v1702434204/TB0A5VE9G58-HERO/Timberland-50th-Edition-Premium-6Inch-Waterproof-Boot-for-Men-in-Blue.png",
      logoUri: "https://github.com/shadcn.png",
      title: "Alain_Bg76",
    },
    {
      id: 3,
      imageUri:
        "https://imgs.search.brave.com/0i6amR3GNaRrGQBpBB2tZIeZ2dlYAQigtT0UVxvbrTI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF3YWlpc3VyZi5j/b20vY2RuL3Nob3Av/ZmlsZXMvZGVjay1w/bGFuY2hlLWRlLXNr/YXRlLTgwLTg0ODQ0/MC5qcGc_dj0xNzMw/NDU1NDM4JndpZHRo/PTQ2MA",
      brandName: "TotoLeDozo",
      imageUriThumbnail1: "https://imgs.search.brave.com/_0TEXxgycpATgSOqe0FMl4VgneAX0s6kejeyvqgzEVg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIzL2U5/LzllLzIzZTk5ZWI5/ZTUzMTM5YzM2MWJm/OWNkM2FmYjk4OTI1/LmpwZw",
      imageUriThumbnail2: "https://imgs.search.brave.com/takq0_6YGlokQ9_5za7ENDYIYyg1g4fy8hVpaMAbfOw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS40MTg2/ODg1OTIzLjMwMTUv/c3NyY28sY2xhc3Np/Y190ZWUsd29tZW5z/LDEwMTAxMDowMWM1/Y2EyN2M2LGZyb250/X2FsdCxzcXVhcmVf/cHJvZHVjdCw2MDB4/NjAwLmpwZw",
      imageUriThumbnail3: "https://imgs.search.brave.com/0i6amR3GNaRrGQBpBB2tZIeZ2dlYAQigtT0UVxvbrTI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGF3YWlpc3VyZi5j/b20vY2RuL3Nob3Av/ZmlsZXMvZGVjay1w/bGFuY2hlLWRlLXNr/YXRlLTgwLTg0ODQ0/MC5qcGc_dj0xNzMw/NDU1NDM4JndpZHRo/PTQ2MA",
      logoUri: "https://github.com/shadcn.png",
      title: "TotoLeDozo",
    },
    {
      id: 4,
      imageUri:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      brandName: "Reebok",
      imageUriThumbnail1:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      imageUriThumbnail2:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      imageUriThumbnail3:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      logoUri: "https://github.com/shadcn.png",
      title: "Reebok",
    },
    {
      id: 5,
      imageUri:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      brandName: "New Balance",
      imageUriThumbnail1:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      imageUriThumbnail2:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      imageUriThumbnail3:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      logoUri:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
        title: "New Balance",
    },
    {
      id: 6,
      imageUri:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      brandName: "Converse",
      imageUriThumbnail1:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      imageUriThumbnail2:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      imageUriThumbnail3:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      logoUri:
        "https://cdn.lesitedelasneaker.com/wp-content/images/2021/12/logo-nike-pic05.jpg",
      title: "Converse",
    },
  ]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("followedBrands");
    if (storedProducts) {
      setFollowedBrands(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("followedBrands", JSON.stringify(followedBrands));
  }, [followedBrands]);

  return <HomeView followedBrands={followedBrands} products={products}/>;
}
