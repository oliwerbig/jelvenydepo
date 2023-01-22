import { Comfortaa } from "@next/font/google";
import Image from "next/image";
import Gallery from "./Sections/Gallery";
import Hero from "./Sections/Hero";
import styles from "./page.module.css";
import { Providers } from "./providers";
import Products from "./Sections/Products";
import Prices from "./Sections/Prices";
import Contact from "./Sections/Contact";
import Order from "./Sections/Order";
import CTA1 from "./Sections/CTA1";
import FAQ from "./Sections/FAQ";
import Testimonials from "./Sections/Testimonials";
import About from "./Sections/About";
import Features from "./Sections/Features";
import CTA2 from "./Sections/CTA2";

const comfortaa = Comfortaa({ subsets: ["latin-ext"] });

export default function Home() {
  return (
    <Providers>
      <main className={`${comfortaa.className}`}>
        <Hero />
        <Products />
        <About />
        <Order />
        <Prices />
        <Contact />
        <CTA2 />
      </main>
    </Providers>
  );
}
