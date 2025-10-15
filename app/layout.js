export const metadata = {
  title: "Waleska Makeup Artist",
  description: "Makeup services website",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
