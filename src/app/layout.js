import { Geist, Geist_Mono, Baloo_Chettan_2, Calligraffitti, Figtree } from "next/font/google";
import "./globals.css";

const balooChettan2 = Baloo_Chettan_2({
  variable: "--font-baloo-chettan-2",
  subsets: ["latin"],
});

const calligraffitti = Calligraffitti({
  variable: "--font-calligraffitti",
  weight: "400",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: "Spotify2",
  description: "A Spotify clone app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${balooChettan2.variable} ${calligraffitti.variable} ${figtree.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
