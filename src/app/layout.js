import { Baloo_Chettan_2, Calligraffitti, Figtree } from "next/font/google";
import ClientWrapper from "./ClientWrapper";
import "./globals.css";
import "./root.css";
import "./keyframes/fade-in.css";
import "../shared-styles/scrollbars.css";

const balooChettan2 = Baloo_Chettan_2({ variable: "--font-baloo-chettan-2", subsets: ["latin"] });
const calligraffitti = Calligraffitti({ variable: "--font-calligraffitti", weight: "400", subsets: ["latin"] });
const figtree = Figtree({ variable: "--font-figtree", subsets: ["latin"] });

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
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
