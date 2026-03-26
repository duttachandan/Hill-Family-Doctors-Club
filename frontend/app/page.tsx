import Coutner from "@/components/Home/Coutner";
import Banner from "@/components/Home/Banner";
import About from "@/components/Home/About";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // false promise to see the loading screen

  return (
    <main>
      <Banner />
      <Coutner />
      <About />
    </main>
  );
}
