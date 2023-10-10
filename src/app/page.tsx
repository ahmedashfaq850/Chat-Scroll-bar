import Image from "next/image";
import { Button } from "../components/ui/button";
import { CardsChat } from "../components/Chat";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen">
      <div className="w-1/2 flex justify-center items-center">
        <CardsChat />
      </div>
    </main>
  );
}
