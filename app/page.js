// app/page.jsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BlockTwo from "@/components/BlockTwo";
import BlockThree from "@/components/BlockThree";
import BlockFour from "@/components/BlockFour";
import BlockFive from "@/components/BlockFive";
import BlockSix from "@/components/BlockSix";
import BlockSeven from "@/components/BlockSeven";
import BlockEight from "@/components/BlockEight";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BlockTwo />
        <BlockThree />
        <BlockFour />
        <BlockFive />
        <BlockSix />
        <BlockSeven />
        <BlockEight />
      </main>
    </>
  );
}
