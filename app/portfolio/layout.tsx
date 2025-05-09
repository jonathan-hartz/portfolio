import type { Metadata } from "next";
import "./globals.scss";
import BubblesAnimation from "@/app/portfolio/components/animations/BubblesAnimation";
import Header from "@/app/portfolio/components/Header";
import Script from "next/script";
import { Nunito } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const nunito = Nunito({
  weight: ["200", "400", "600", "800", "1000"],
  subsets: ["latin"],
  variable: "--font-nunito",
});
const custom_font = localFont({
  src: "../../public/fonts/custom_font_jh.woff2",
  variable: "--font-custom-font",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jonathan-hartz.dev"),
  title:
    "Jonathan Hartz | Développeur Web Freelance | Création de site internet - Saverne, Alsace",
  description:
    "Développeur web freelance au Val-de-Moder, Alsace. Création de sites internet, d'applications web et de site vitrines et e-commerce optimisés SEO.",
  keywords:
    "création site internet, site web professionnel, e-commerce, optimisation SEO, refonte site web, application web, site sur mesure, développeur web freelance Alsace, site vitrine, site rapide et sécurisé, référencement Google, consultant digital, Val-de-Moder, Alsace, prestation web sur-mesure",
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${custom_font.variable} ${nunito.variable}`}>
      <Script
        src="https://kit.fontawesome.com/836c0b582d.js"
        crossOrigin="anonymous"
      ></Script>
      <Analytics />
      <body className="overscroll-contain">
        <div className="absolute h-full w-full overflow-hidden bg-gradient-to-r from-blue-800 to-indigo-900 font-nunito font-thin text-neutral-100">
          <div
            id="main"
            className="container relative z-40 m-auto h-full w-full underline-offset-8"
          >
            <Header />
            {children}
          </div>
          <BubblesAnimation />
        </div>
      </body>
    </html>
  );
}
