import { Comfortaa, Inter } from "@next/font/google";
import "./globals.css";
import Footer from "./Sections/Footer";
import Navbar from "./Sections/Navbar";

const comfortaa = Comfortaa({
  subsets: ["latin-ext"],
  variable: "--font-comfortaa",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hu"
      className={`${inter.variable} ${comfortaa.variable} scroll-smooth`}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
