import { Inter } from "next/font/google";
import NavBar from "@/src/components/NavBar";
import { exo2, orbitron, gentium, medievalSharp } from "./fonts";
import "./globals.css";
import "@/public/styles/header.scss";
import "@/public/styles/footer.scss";
import "@/public/styles/reviews.scss";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import { ThemeProvider } from "../components/theme-provider";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:
      "Crypto Digest: Your Gateway to Cryptocurrency News",
    template: "%s | Crypto Digest",
  },
  description:
    "Stay ahead of the curve with Crypto Digest, the ultimate source for the latest cryptocurrency news, market analyses, and insights. Whether you're an experienced investor or new to the blockchain, our dedicated platform brings you up-to-the-minute updates, expert analyses, and in-depth features on everything crypto. Dive into the world of digital currencies with Crypto Digest and navigate the dynamic crypto market with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${exo2.variable} ${gentium.variable} ${medievalSharp.variable}`}
    >
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6358243501215789"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
      </head>
      <body className="flex flex-col min-h-screen bg-">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="px-4 py-3 mx-auto">
            <NavBar />
          </header>
          <main className="grow px-4 py-14">{children}</main>
          <footer className="px-4 py-3 text-center text-xs">
            All Rights Reserved. © 2024
          </footer>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-5HZ7EPGQE1" />
    </html>
  );
}
