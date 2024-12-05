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
  title: "Jonathan Hartz - Développeur Web Freelance - Saverne, Alsace",
  description:
    "Site Portfolio de Jonathan Hartz, développeur web freelance spécialisé dans de nombreuses technologies : React JS, Next.js, Prestashop, Wordpress, javascript, PHP, Symfony et autre",
  keywords:
    "développeur web,developpeur web,développeur,développeur full stack,developpeur, développeur, full stack, e-commerce, backend, frontend, applications web, freelance, Saverne, Alsace,React JS, react, next, Next.js, javascript, PHP, Symfony, Prestashop",
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
