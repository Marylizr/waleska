import { getDictionary } from "@/i18n/getDictionary";
import Hero from "@/components/Hero";
import BlockTwo from "@/components/BlockTwo";
import BlockFour from "@/components/BlockFour";
import BlockFive from "@/components/BlockFive";
import BlockSix from "@/components/BlockSix";
import BlockSeven from "@/components/BlockSeven";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import CtaBar from "@/components/CtaBar";

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
      <BlockFour t={t.blockFour} />
      <BlockFive t={t.blockFive} locale={locale} />
      <BlockSeven t={t.blockSeven} />
      <Portfolio />
      <BlockSix t={t.blockSix} locale={locale} />
      <Testimonials />
      <CtaBar />
    </>
  );
}
