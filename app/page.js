// app/page.jsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BlockTwo from "@/components/BlockTwo";
import BlockThree from "@/components/BlockThree";
import BlockFour from "@/components/BlockFour";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BlockTwo />
        <BlockThree />
        <BlockFour />
      </main>
    </>
  );
}
