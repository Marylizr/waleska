import { getDictionary } from "@/i18n/getDictionary";
import Hero from "@/components/Hero";
import BlockTwo from "@/components/BlockTwo";
import BlockThree from "@/components/BlockThree";
import BlockFour from "@/components/BlockFour";
import BlockFive from "@/components/BlockFive";
import BlockSix from "@/components/BlockSix";
import BlockSeven from "@/components/BlockSeven";
import BlockEight from "@/components/BlockEight";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function Home({ params }) {
  const { locale } = await params;
  const t = await getDictionary(locale);

  return (
    <>
      <Hero t={t.hero} locale={locale} />
      <BlockTwo t={t.blockTwo} />
      <BlockThree t={t.blockThree} locale={locale} />
      <BlockFour t={t.blockFour} />
      <BlockFive t={t.blockFive} locale={locale} />
      <BlockSix t={t.blockSix} locale={locale} />
      <BlockSeven t={t.blockSeven} />
      <BlockEight t={t.blockEight} />
    </>
  );
}
