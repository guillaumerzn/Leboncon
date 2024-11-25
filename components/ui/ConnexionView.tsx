"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Apple, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {


  const router = useRouter();

  const handlehandleLogoClicked = () => {
    router.push(`/home`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8 space-y-8">
        <div className="text-center">
            <a className="cursor-pointer" onClick={ () => handlehandleLogoClicked()}>
          <h1 className="text-orange-600 text-4xl font-bold">Leboncon</h1>
          </a>
        </div>

        <h2 className="text-xl font-semibold text-center">
          Bienvenue à nouveau
        </h2>

        <div className="space-y-4">
          <Input
            type="email"
            placeholder="Adresse e-mail"
            className="w-full border-gray-300"
          />
          <Button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-medium">
            Continuer
          </Button>
        </div>

        <div className="text-sm flex flex-row justify-center space-x-1">
          <h1 className="text-gray-600">Vous n'avez pas de compte ?</h1>
          <Link href="#" className="text-orange-600 hover:underline">
            S'inscrire
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Separator className="flex-1" />
          <h1 className="text-sm text-gray-400">Ou</h1>
          <Separator className="flex-1" />
        </div>

        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full justify-between font-normal"
          >
            <Image
              src="https://imgs.search.brave.com/2WIXvTgy8DiiCOT1cASwizVqYK-fOcqsEFDwypTaI7A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/YTk1MTkzOWM0ZmZj/MzNlOGMxNDhhZjIu/cG5n"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="flex-1 text-left">Continuer avec Google</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Button>

          <Button
            variant="outline"
            className="w-full justify-between font-normal"
          >
            <Image
              src="https://imgs.search.brave.com/ajzEl5LEhBpP2BOY_cFKjwCJcJ2Kn4kAiQYQ603z-mE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/MW1pbjMwLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NC9TeW1ib2xlLVdp/bmRvd3MtNTAweDQ1/Ny5wbmc"
              alt="Microsoft"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="flex-1 text-left">Continuer avec Microsoft</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Button>

          <Button
            variant="outline"
            className="w-full justify-between font-normal"
          >
            <Image
              src="https://imgs.search.brave.com/1bhL6ufZamxoV5Ikhs9IXvQoGD4DPumk9Nh2polNLQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L0FwcGxlX2xvZ29f/Z3JleS02MjR4NDAw/LnBuZw"
              alt="Microsoft"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="flex-1 text-left">Continuer avec Apple</span>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </Button>
        </div>

    
        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <Link href="#" className="hover:underline">
            Conditions d'utilisation
          </Link>
          <Link href="#" className="hover:underline">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </div>
  );
}
