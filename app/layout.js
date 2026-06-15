import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Waleska Makeup Artist",
  description: "Makeup services website",
  icons: [
    { rel: "icon", url: "/images/waleska/icono.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/images/waleska/icono.png" },
  ],
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
