import { getDictionary } from "@/i18n/getDictionary";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const titles = {
    en: "Waleska Makeup Artist — Santiago de Chile",
    es: "Waleska Maquilladora — Santiago de Chile",
  };
  const descriptions = {
    en: "Professional makeup artist based in Santiago de Chile. Bridal, editorial, special events & makeup lessons.",
    es: "Maquilladora profesional en Santiago de Chile. Novias, editorial, eventos especiales y clases de maquillaje.",
  };
  return {
    title:       titles[locale]       ?? titles.en,
    description: descriptions[locale] ?? descriptions.en,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", es: "/es" },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const t = await getDictionary(locale);

  return (
    <>
      {/* Patch the <html lang> from the nested layout via a script tag.
          The root layout sets lang="en"; here we correct it for Spanish. */}
      {locale !== "en" && (
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang = "${locale}";`,
          }}
        />
      )}
      <Navbar locale={locale} t={t.nav} />
      <main>{children}</main>
      <Footer locale={locale} t={t.nav} />
    </>
  );
}
