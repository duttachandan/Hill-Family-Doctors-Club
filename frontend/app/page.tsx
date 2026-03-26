import Coutner from "@/components/Home/Coutner";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // false promise to see the loading screen

  return (
    <main>
      <section className="banner-sec min-h-50 flex items-center text-center bg-green-200">
        <div className="container">
          <h1 className="text-4xl">Welcome To Doctor's Club</h1>
        </div>
      </section>
      <Coutner />
    </main>
  );
}
