import Image from "next/image";
import Coutner from "@/components/Coutner";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // false promise to see the loading screen

  return (
    <main>
      <div>Home Page</div>
      <Coutner />
    </main>
  );
}
