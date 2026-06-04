const dictionaries = {
  en: () => import("./dictionaries/en.json").then((m) => m.default),
  es: () => import("./dictionaries/es.json").then((m) => m.default),
};

export async function getDictionary(locale) {
  const loader = dictionaries[locale] ?? dictionaries.en;
  return loader();
}
