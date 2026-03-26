import Coutner from "@/components/Home/Coutner";
import Banner from "@/components/Home/Banner";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // false promise to see the loading screen

  return (
    <main>
      <Banner/>
      <Coutner />
    </main>
  );
}
