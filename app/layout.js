import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Waleska Makeup Artist",
  description: "Makeup services website",
  icons: [
    { rel: "icon", url: "/images/waleska/icono.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/images/waleska/icono.png" },
  ],
};

const robotoDisplay = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const robotoBody = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoDisplay.variable} ${robotoBody.variable}`}>
        {children}
      </body>
    </html>
  );
}
