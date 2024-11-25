import Header from "@/components/ui/Header2";
import { Input } from "@/components/ui/input";
import Footer from "./Footer";
import { Avatar, AvatarImage } from "./avatar";
import TexteAnime from "./TexteAnime";

export default function ChatView() {
  return (
    <div className="w-full min-h-dvh bg-orange-600">
      <Header />
      <div className="pb-44 mr-14">
        <div className="flex flex-row">
          <div className="w-1/2 flex justify-center mt-32">
            <TexteAnime text= "Pose une question au Bon Con" className="text-4xl font-bold text-white"/>
          </div>
          <div className="w-1/2 flex justify-center h-[550px] rounded-t-2xl rounded-bl-2xl shadow-lg bg-gray-100">
          <div className="flex flex-col justify-end items-center w-full">
            <div className="flex flex-row w-2/3">
            <div className="flex items-center mb-10">
          <Avatar className="w-12 h-12 mr-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          </Avatar>
          </div>
          <Input className="mb-6 border border-orange-500 p-6 w-full"
          placeholder="Posez votre question..."/>
          </div>
          </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
